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





const PlanCard = ({ item }) => {
    const { name, image, from, to, countryImg, description, _id, country } = item

    const { user } = useContext(AuthContex);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = usePlans()

    const handlecart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,

                quantity: 1,
                subtotal: wei,

            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)

                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: "Added to the cart ",
                            text: `${name}Added`,
                            icon: "success"
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        console.log(item, user.email);
    }
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
                        description.length > 60 ? <p>{description.slice(0, 60)}  <Link><span className="text-blue-600 font-semibold">Know more...</span></Link></p> : <p>{description}</p>
                    }

                </div>
                <div className="pt-6 pb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">$???</h2>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold">Get Special Price</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <div className="modal-action">
                                <form className="" method="dialog">
                                    <p className="my-2">Your Name</p>
                                    <input className="w-full py-2 px-3 border-2 active:border-blue-600 active:border-2" type="text" />

                                    <p className="mt-4">Contact Number*</p>
                                    <input className="w-full my-2 py-2 px-3 border-2 active:border-blue-600 active:border-2" type="tel" pattern="[0-9]{10}"  title="Ten digits code" />

                                    <p className="mt-4">Journey Date*</p>
                                    <input className="w-full my-2 py-2 px-3 border-2 active:border-blue-600 active:border-2" type="date" />

                                    <input required className="w-full my-4 py-2 px-3 border-2 active:border-blue-600 active:border-2" type="number" />
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="submit" className="py-2 px-4 text-center rounded-md bg-blue-600 text-white font-semibold">Submit</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

            </div>
        </div>

    )
}

export default PlanCard