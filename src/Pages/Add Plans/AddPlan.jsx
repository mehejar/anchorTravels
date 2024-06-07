import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import useAxiosPublic from "../../Hooks/useAxiosPublic"



const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const country_hosting_key = 'dabd679c22984799bf040c4d53b666ad'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const country_hosting_api = `https://api.imgbb.com/1/upload?key=${country_hosting_key}`

const AddPlan = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        // console.log(data)
        // image hosting api
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const countryImage = { image: data.image[0] }
        const countryRes = await axiosPublic.post(country_hosting_api, countryImage, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log('imaggg cty',countryRes.data);
        if (res.data.success && countryRes.data.success) {
            const plan = {
                name: data.name,
                country: data.country,
                to: data.to,
                description: data.description,
                from: data.from,
                offer: data.offer,
                countryImg: countryRes.data.data.display_url,
                image: res.data.data.display_url,

            }
            console.log(plan)
            const planRes = await axiosSecure.post('/plans', plan)
            console.log('Added', planRes.data)
            if (planRes.data.insertedId) {
                reset()
                Swal.fire({
                    title: "Added Products!",
                    text: "You added a new product",
                    icon: "success"
                });


            }
        }
    }

    return (
        <div className="mt-20">
            <div className="w-2/4 mx-auto">
                <h2 className="text-2xl font-semibold">Add a new plan</h2>

            </div>
            <div className="divider"></div>

            <div className="w-2/4 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Plan Name*</span>
                        </label>
                        <input {...register("name")}
                            type="text"
                            placeholder="Write product name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6 items-center">
                        {/* category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Country*</span>
                            </label>
                            <select defaultValue='value' {...register("country")} className=" select select-bordered w-full">
                                <option disabled selected>Choose A Food Category</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="canada">Canada</option>


                            </select>
                        </div>
                        <div className="">
                        <input {...register("countryImg")} type="file" className="file-input w-full max-w-xs" />
                        </div>
                        {/* price */}
                        
                    </div>
                    {/* Recipe Details */}
                    <div className="flex gap-6">
                        {/* sub category */}
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">From*</span>
                            </label>
                            <input {...register("from")}
                                type="text"
                                placeholder="Landing Airport"
                                className="input input-bordered w-full " />
                        </div>
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">To*</span>
                            </label>
                            <input {...register("to")}
                                type="text"
                                placeholder="Landing Airport"
                                className="input input-bordered w-full " />
                        </div>
                        {/*weight*/}


                    </div>

                    {/* Recipe Details */}
                    <div className="flex gap-6">
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Offer</span>
                            </label>
                            <select defaultValue='value' {...register("offer")} className=" select select-bordered w-full">
                                <option disabled selected>Choose Offer</option>
                                <option value="Eid Offer">Eid Offeer</option>
                                <option value="Summer SPecial Offer">Summer Special Offer</option>


                            </select>
                        </div>
                        <div className="my-6 w-1/2">
                            <label className="label">
                                <span className="label-text">Plan Details*</span>
                            </label>
                            <input {...register("description")}
                                type="text"
                                placeholder="details"
                                className="input  input-bordered w-full " />
                        </div>
                    </div>
                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Add Plan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPlan