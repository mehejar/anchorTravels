import { Link } from "react-router-dom"
import useBlogs from "../../../Hooks/useBlogs"
import { FaArrowRight } from "react-icons/fa";
import blogImg from '../../../assets/blog-01.png'


const Blog = () => {
    const [blogs, refetch] = useBlogs()

    return (

        <div className="bg-white mt-20 py-20">
            <div className="pb-16 text-center">
                <h2 className="text-5xl font-bold">Know About The World</h2>
                <p className="py-4">Latest Article: Read Anchor Travels Blogs and know about the world</p>
            </div>
            <div className="flex flex-col lg:flex-row px-4 mx-auto lg:w-5/6">
                <div className="lg:w-1/2 my-4 mx-8">
                    <img className="w-full rounded-lg" src={blogImg} alt="" />

                </div>
                <div className="lg:w-1/2 justify-end flex flex-col gap-4">

                    {
                        blogs.slice(0, 4).map(item => <>
                            <div className="flex flex-col lg:flex-row gap-6 hover:bg-blue-100 bg-white p-4  mx-8 rounded-lg border-2">
                                <img className="lg:w-[300px] w-full rounded-md h-[150px]" src={item.image} alt="" />
                                <div>
                                    <h1 className="text-lg font-semibold">{item.title}</h1>
                                    {
                                        item.article.length > 100 ? <p className="text-gray-600">{item.article.slice(0, 100)}</p> : <p>{item.article}</p>
                                    }
                                    {/* <Link to={`/blogs/${item._id}`}><button className="py-2 my-2 px-4 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-600 flex gap-2 items-center hover:text-white font-semibold">Read more<FaArrowRight></FaArrowRight></button></Link> */}
                                </div>

                            </div>


                        </>)
                    }


                </div>
            </div>
        </div>
    )
}

export default Blog