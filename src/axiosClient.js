import axios from 'axios';
const axiosClient=axios.create({
    baseURL: 'fakestoreapi.com',
});
export default axiosClient;