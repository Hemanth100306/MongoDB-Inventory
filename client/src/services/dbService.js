import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const dbService = {
  testConnection: async () => {
    const response = await axios.get(`${API_URL.replace('/api', '')}/api/test-db`);
    return response.data;
  }
};