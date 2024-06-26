// export const axiosSecure = axios.create({
//     baseURL: 'https://freshfood-server.vercel.app'
// })

import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../Pages/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://y-lime-beta.vercel.app'
})

const useAxiosSecure = () =>{

    const { logOut, loading } = useContext(AuthContex)
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('stopped by interseptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)


    });
    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
    }, async (error) => {
        if(loading){
            return <span className="loading loading-ring loading-lg flex justify-center"></span>
        }

        const status = error.response.status;
        // console.log('status error in interseptors', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })
    
    return axiosSecure;
}

export default useAxiosSecure