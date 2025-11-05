import api from './api';

export const productService = {
  getAll: () => api.get('/products'),
  
  getById: (id) => api.get(`/products/${id}`),
  
  create: (data) => api.post('/products', data),
  
  update: (id, data) => api.put(`/products/${id}`, data),
  
  delete: (id) => api.delete(`/products/${id}`),
  
  getDashboardStats: () => api.get('/products/stats'), // ← FIX THIS (remove /dashboard)
  
  getLowStock: () => api.get('/products/low-stock')
};