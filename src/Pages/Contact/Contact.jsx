import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import BranchSection from "../BranchSection.jsx/BranchSection"

import './contact.css'

const Contact = () => {
    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {

        const contact = {
            name: data.name,
            category: data.category,

            description: data.recipe,
            sub_category: data.sub_category,
        }

        // const res = await axiosPublic.post(contact, '/contacts')
        // console.log('Contact Details send', res.data)
        // if (res.data.insertedId) {
        //     reset()
        //     Swal.fire({
        //         position: "top",
        //         icon: "Added Successfully",
        //         title: "Your item added to the card",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
    }

    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-center py-8">
                    Contact with Us
                </h2>
            </div>

            <div>
                <img src="" alt="" />
            </div>
            <div className="responsive-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12102.96663822908!2d-73.8627058!3d40.6796608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25da88b7d2733%3A0xe9aa985b7697735b!2zQW5jaG9yIFRyYXZlbHMgJiBNdWx0aSBTZXJ2aWNlICjgpo_gp43gpq_gpoLgppXgprAp!5e0!3m2!1sen!2sbd!4v1720849043175!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            <div className="w-2/3 mb-16 flex flex-col-reverse lg:flex-row gap-16 mx-auto">




                <div className=" lg:w-1/2">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-bold py-4">
                            Get in touch
                        </h2>

                        <div className="flex flex-col lg:flex-row lg:gap-6">
                            {/* Name */}
                            <div className="my-2 lg:w-1/2">

                                <input {...register("name")}
                                    type="text"
                                    placeholder="john Butler"
                                    className="input input-bordered w-full " />
                            </div>
                            <div className="my-2 lg:w-1/2">

                                <input {...register("email")}
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="input input-bordered  w-full" />
                            </div>
                        </div>
                        <div className="my-2">

                            <input {...register("message")}
                                type="text"
                                placeholder=" I want to know..."
                                className="input input-bordered w-full min-h-20 " />
                        </div>




                        <div>
                            <button type="submit mt-4" className="flex gap-2 items-center bg-white btn text-xl">Submit Now</button>
                        </div>





                    </form>
                </div >
                {/* ======================Info====== */}
                <div>
                    
                    <div>
                        <h2 className="text-xl font-semibold">Address:</h2>
                        <p>77-04 101 Avenue,
                            Ozone Park, NY 11416</p>
                        <h2 className="text-xl mt-8 font-semibold">Information:</h2>
                        <p>
                            Call (09:00 AM to 10:00 PM) to contact us or for any information.</p>
                        <p>
                            +1 917-300-2450,  +1 516-850-1311
                        </p>
                    </div>

                </div>
            </div >
            <div className="-mt-16">
                <BranchSection></BranchSection>
            </div>
        </div>
    )
}

export default Contact