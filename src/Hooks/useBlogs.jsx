import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBlogs = () =>{
    const axiosSecure = useAxiosSecure()
    const { refetch, data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data
        },

    })

    return [blogs,  refetch]

}

export default useBlogs