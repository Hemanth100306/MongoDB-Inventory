const Transaction = require('../models/Transaction');
const Product = require('../models/Product');

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate('product', 'name sku')
      .populate('performedBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create transaction
// @route   POST /api/transactions
// @access  Private
const createTransaction = async (req, res) => {
  try {
    const { product: productId, type, quantity, reason, reference, notes } = req.body;
    
    // Get product
    const product = await Product.findById(productId);
    
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    
    const previousQuantity = product.quantity;
    let newQuantity = previousQuantity;
    
    // Calculate new quantity based on transaction type
    switch (type) {
      case 'in':
        newQuantity = previousQuantity + parseInt(quantity);
        break;
      case 'out':
        if (previousQuantity < quantity) {
          res.status(400);
          throw new Error('Insufficient stock');
        }
        newQuantity = previousQuantity - parseInt(quantity);
        break;
      case 'adjustment':
        newQuantity = parseInt(quantity);
        break;
      default:
        res.status(400);
        throw new Error('Invalid transaction type');
    }
    
    // Create transaction
    const transaction = await Transaction.create({
      product: productId,
      type,
      quantity: parseInt(quantity),
      previousQuantity,
      newQuantity,
      reason,
      reference,
      notes,
      performedBy: req.user._id
    });
    
    // Update product quantity
    product.quantity = newQuantity;
    
    // Update product status
    if (newQuantity === 0) {
      product.status = 'out-of-stock';
    } else if (product.status === 'out-of-stock' && newQuantity > 0) {
      product.status = 'active';
    }
    
    await product.save();
    
    // Populate transaction before sending response
    await transaction.populate('product', 'name sku');
    await transaction.populate('performedBy', 'name email');
    
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get transactions by product
// @route   GET /api/transactions/product/:productId
// @access  Private
const getTransactionsByProduct = async (req, res) => {
  try {
    const transactions = await Transaction.find({ product: req.params.productId })
      .populate('performedBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTransactions,
  createTransaction,
  getTransactionsByProduct,
};