import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const getCategories = () => api.get('/category');
export const getCategory = (id) => api.get(`/category/${id}`);
export const createCategory = (CategoryData) => api.post('/category',CategoryData);
export const updateCategory = (id, CategoryData) => api.put(`/category/${id}`, CategoryData);
export const deleteCategory = (id) => api.delete(`/category/${id}`);

export default api;