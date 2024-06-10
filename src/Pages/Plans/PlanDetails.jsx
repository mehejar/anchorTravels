import { useForm } from "react-hook-form"
import { FaDotCircle } from "react-icons/fa"
import { FaRegCircleDot } from "react-icons/fa6"
import { IoAirplane } from "react-icons/io5"
import { useLoaderData } from "react-router-dom"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import Swal from "sweetalert2"

const PlanDetails = () => {

    const plan = useLoaderData()

    const { name, country, to, description, from, offer, image } = plan
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        // console.log(data)
        // image hosting api


       
            const booking = {
                // article: data.blog,
                from: from,
                to: to,
                pessengerName: data.pessengerName,
                email: data.email,
                // article: data.blog,
                adults: data.adults,
                contact: data.contact,
                childs: data.childs,
                passengers: data.passengers,
                journeyDate: data.journeyDate,
                returnDate: data.returnDate,
                

            }
            console.log(booking)
            const bookingRes = await axiosSecure.post('/bookings', booking)
            console.log('Added', bookingRes.data)
            if (bookingRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Successfully Send Request!",
                    text: "We shortly reach out you with best price",
                    icon: "success"
                });


            }
       
    }


    return (
        <div className="lg:w-3/4 py-16 flex flex-col px-4 lg:flex-row gap-8 justify-between mx-auto">
            <div className="lg:w-1/2">
                <div className="lg:w-1/2 w-3/4 ">
                    <div className="flex items-center py-2">
                        <h2><FaRegCircleDot></FaRegCircleDot></h2>
                        <h2 className="text-gray-300">-----------------------</h2>
                        <h2><IoAirplane></IoAirplane></h2>
                        <h2 className="text-gray-300">-----------------------</h2>
                        <h2 className="text-blue-600
                    "><FaDotCircle></FaDotCircle></h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="font-semibold">{from}</h2>

                        <h2 className="text-blue-600 font-semibold
                    ">{to}</h2>
                    </div>
                </div>
                <div>
                    <h1 className="text-lg pt-4 font-semibold">Fill the form for getting best price</h1>
                </div>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Your Name*</span>
                        </label>
                        <input {...register("pessengerName")}
                            type="text"
                            placeholder="Write Your Full Name"
                            className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-4">
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Contact Number*</span>
                            </label>
                            <input {...register("contact")}
                                type="tel"
                                placeholder="Write Your Full Name"
                                className="input input-bordered w-full " />
                        </div>
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input {...register("email")}
                                type="email"
                                placeholder="Write Your Full Name"
                                className="input input-bordered w-full " />
                        </div>

                    </div>
                    <div className="flex gap-4">
                        <div className="my-6 w-1/3">
                            <label className="label">
                                <span className="label-text">Passengers*</span>
                            </label>
                            <input {...register("passengers")}
                                type="number"
                                placeholder="How many passengers"
                                className="input input-bordered w-full " />
                        </div>
                        <div className="my-6 w-1/3">
                            <label className="label">
                                <span className="label-text">Adults*</span>
                            </label>
                            <input {...register("adults")}
                                type="number"
                                placeholder="How many passengers"
                                className="input input-bordered w-full " />
                        </div>
                        <div className="my-6 w-1/3">
                            <label className="label">
                                <span className="label-text">Child*</span>
                            </label>
                            <input {...register("child")}
                                type="number"
                                placeholder="How many passengers"
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Journey Date*</span>
                            </label>
                            <input {...register("journeyDate")}
                                type="date"
                                placeholder=""
                                className="input input-bordered w-full " />
                        </div>
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold ">Return Date <span className="font-normal text-gray-500">(Optional: apply for best price)</span>  </span>
                            </label>
                            <input {...register("returnDate")}
                                type="date"
                                placeholder="How many passengers"
                                className="input input-bordered w-full " />
                        </div>
                    </div>



                    <div className="py-4">
                        <button type="submit" className="flex gap-2  items-center bg-blue-600 text-white btn text-xl">Request for Best Price</button>
                    </div>
                </form>
            </div>
            <div className="w-1/2 bg-blue-500">
                <img src={image} alt="" />

            </div>

        </div>
    )
}

export default PlanDetails