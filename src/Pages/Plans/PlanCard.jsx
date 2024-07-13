import { useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import usePlans from "../../Hooks/usePlans"
import { AuthContex } from "../AuthProvider/AuthProvider"
// import useAxiosSecure from "../Hooks/useAxiosSecure"
// import useCart from "../Hooks/useCart"
import { FaLocationDot } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';





const PlanCard = ({ item }) => {
    const { name, image, from, to, countryImg, description, _id, country } = item

    const { user } = useContext(AuthContex);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = usePlans()


    
    // to={`product/${_id}`
    return (

        <div className="bg-white rounded-b-lg">
            <div>
                <img className="rounded-lg" src={image} alt="" />
            </div>
            <div className="bg-white p-3 rounded-b-lg">
                <div className="my-2">
                    <h2 className="flex gap-2 items-center text-lg font-semibold"><FaLocationDot></FaLocationDot>{country}</h2>
                </div>
                <div>
                    <div className="flex justify-between py-2">
                        <h2><FaRegCircleDot></FaRegCircleDot></h2>
                        <h2><IoAirplane></IoAirplane></h2>
                        <h2 className="text-blue-600
                    "><FaDotCircle></FaDotCircle></h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="font-semibold">{from}</h2>

                        <h2 className="text-blue-600 font-semibold
                    ">{to}</h2>
                    </div>
                </div>
                <div className="my-3 divider"></div>
                <div className="text-left">
                    {
                        description.length > 60 ? <p>{description.slice(0, 60)}  <Link to={`/plans/${_id}`}><span className="text-blue-600 font-semibold">Know more...</span></Link></p> : <p>{description}</p>
                    }







                    

                </div>
                <div className="pt-6 pb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">$???</h2>
                    <Link to={`/plans/${_id}`}><button className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold">Get Special Price</button></Link>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                   
                </div>

            </div>
        </div>

    )
}

export default PlanCard