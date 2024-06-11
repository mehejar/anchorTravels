import { Link } from "react-router-dom"
import useBlogs from "../../../Hooks/useBlogs"
import Blog from "./Blog"
import { FaArrowRight } from "react-icons/fa"

const BlogPage = () =>{
    const [blogs, refetch] = useBlogs()
    return(
        <div className="grid grid-cols-1 px-8 mx-auto lg:grid-cols-3 gap-5">
            {
            blogs.map(item =>  <div className="flex flex-col lg:flex-row gap-6 hover:bg-blue-100 bg-white p-4   rounded-lg border-2">
            <img className="lg:w-[300px] w-full rounded-md h-[150px]" src={item.image} alt="" />
            <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                {
                    item.article.length > 100 ? <p className="text-gray-600">{item.article.slice(0, 100)}</p> : <p>{item.article}</p>
                }
                <Link to={`/blogs/${item._id}`}><button className="py-2 my-2 px-4 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-600 flex gap-2 items-center hover:text-white font-semibold">Read more<FaArrowRight></FaArrowRight></button></Link>
            </div>

        </div>)
            }
        </div>
    )
}

export default BlogPage