import { useLoaderData } from "react-router-dom"

const BlogDetails = () => {

    const blog = useLoaderData()
    const { title, image, article } = blog
    console.log("blog:", blog)

    return (
        <div className="lg:w-2/3 px-4 mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold py-6">{title}</h2>
                    <img className="pb-8" src={image} alt="" />
                </div>

                <div className="lg:w-1/2 lg:mt-16">
                    {
                        article.length > 1400 ? <p className="text-gray-600">{article.slice(0, 1400)}</p> : <p>{article}</p>
                    }
                </div>
            </div>
            <div>
                {
                    article.length > 1400 ? <p className="text-gray-600">{article.slice(1400, article.length)}</p> : <p>{article}</p>
                }
            </div>

        </div>
    )
}

export default BlogDetails