import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import useAxiosPublic from "../../Hooks/useAxiosPublic"




const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBlog = () => {
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
       
        if (res.data.success) {
            const blog = {
                article: data.blog,
                title: data.title,
                image: res.data.data.display_url,

            }
            console.log(blog)
            const blogRes = await axiosSecure.post('/blogs', blog)
            console.log('Added', blogRes.data)
            if (blogRes.data.insertedId) {
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
        <div className="py-16">
            <div className="lg:w-2/4 mx-auto">
                <h2 className="text-2xl px-6 font-semibold">Post a Blog</h2>

            </div>
            

            <div className=" px-6 lg:w-2/4 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Title*</span>
                        </label>
                        <input {...register("title")}
                            type="text"
                            placeholder="Write product name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Article*</span>
                        </label>
                        <input {...register("blog")}
                            type="text"
                            placeholder="Write product name"
                            className="input input-bordered h-40 w-full " />
                    </div>
                    
                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Post Blog</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlog