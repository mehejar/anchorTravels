import { FaDotCircle } from "react-icons/fa"
import { FaRegCircleDot } from "react-icons/fa6"
import { IoAirplane } from "react-icons/io5"
import { MdPending } from "react-icons/md"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import Swal from "sweetalert2"
import useAxiosSecure from "../../Hooks/useAxiosSecure"

const Booking = ({ booking }) => {
    const { from, to, _id, pessengerName, contact, status, email, adults, childs, passengers, journeyDate, returnDate } = booking

    const axiosSecure = useAxiosSecure()

    const orderStatus = (_id) => {
        console.log('status')


        axiosSecure.patch(`/bookings/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifieddCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Confirmed Order!",
                        text: `Order Id${_id}`,
                        icon: "success"
                    });


                }
            })

    }


    return (
        <div className=" bg-white flex flex-col lg:flex-row p-5 rounded-lg my-2 mx-2">
            <div className="flex gap-4 lg:w-1/2 lg:gap-8">
                <div>
                    <h2>{pessengerName}</h2>
                    <h2>{contact}</h2>
                    <h2>{email}</h2>
                </div>
                <div className="divide-y-2"></div>
                <div className="flex gap-4">
                    <h2 className=" px-4 py-2 lg:text-lg rounded-lg text-blue-500 font-semibold"> Pessengers: {passengers}</h2>
                    <h2 className="px-4 py-2 lg:text-lg rounded-lg text-black font-semibold">Adults: {adults}</h2>
                    <h2 className="px-4 py-2 lg:text-lg rounded-lg text-black font-semibold">Childs: {childs}</h2>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="lg:w-2/3">
                    <div className="flex">
                        <h2 className=" flex flex-col px-4 py-2 rounded-lg "> Journey Date: <span className="text-blue-500 text-lg  font-semibold">{journeyDate}</span></h2>
                        <h2 className=" flex flex-col px-4 py-2 rounded-lg "> Return Date: <span className="text-blue-500 text-lg  font-semibold">{returnDate}</span></h2>
                    </div>
                    <div className="w-5/6">
                        <div className="flex items-center py-2">
                            <h2><FaRegCircleDot></FaRegCircleDot></h2>
                            <h2 className="text-gray-300">------------------------</h2>
                            <h2><IoAirplane></IoAirplane></h2>
                            <h2 className="text-gray-300">------------------------</h2>
                            <h2 className="text-blue-600
                    "><FaDotCircle></FaDotCircle></h2>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="font-semibold">{from}</h2>

                            <h2 className="text-blue-600 font-semibold
                    ">{to}</h2>

                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-8 lg:">
                {
                    status === 'contacted' ? <button className="py-1 px-2 text-white font-semibold bg-green-500 rounded-md flex items-center gap-2"><RiVerifiedBadgeFill></RiVerifiedBadgeFill>Contacted</button> : <button onClick={() => orderStatus(_id)} className="py-1 px-2 text-white font-semibold bg-red-600 rounded-md flex items-center gap-2"><MdPending></MdPending> Pending</button>
                }
            </div>

        </div>
    )
}

export default Booking