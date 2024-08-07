import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContex } from "../Pages/AuthProvider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () =>{
    const {user} = useContext(AuthContex)
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`user/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
}

export default useAdmin