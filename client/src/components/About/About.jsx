import { FiDatabase, FiServer, FiCode, FiPackage } from 'react-icons/fi';

const About = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: FiCode,
      items: ['React 18', 'React Router', 'Tailwind CSS', 'Axios', 'Chart.js']
    },
    {
      category: 'Backend',
      icon: FiServer,
      items: ['Node.js', 'Express.js', 'JWT Authentication', 'Bcrypt']
    },
    {
      category: 'Database',
      icon: FiDatabase,
      items: ['MongoDB', 'Mongoose ODM']
    },
    {
      category: 'Features',
      icon: FiPackage,
      items: ['Inventory Management', 'Supplier Management', 'Transaction Tracking', 'Dashboard Analytics', 'Role-based Access']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Inventory Management System
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          A comprehensive full-stack inventory management solution built with modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <tech.icon className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {tech.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Product Management
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Add, edit, and track products with detailed information
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Supplier Management
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Manage supplier information and relationships
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Transaction Tracking
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Monitor stock in/out and adjustments
            </p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Dashboard Analytics
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Visualize inventory data with charts
            </p>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Low Stock Alerts
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get notified when stock levels are low
            </p>
          </div>
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              User Authentication
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Secure login with role-based access control
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Version</h2>
        <p className="text-lg">1.0.0</p>
        <p className="mt-4 text-sm opacity-90">
          Built with ❤️ for efficient inventory management
        </p>
      </div>
    </div>
  );
};

export default About;