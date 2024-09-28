import axios from "axios";

export const axiosCommon = axios.create({
    // ToDo: baseURL-------// import.meta.env.VITE_API_URL
   baseURL: 'http://localhost:5000/',
   

})
const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;