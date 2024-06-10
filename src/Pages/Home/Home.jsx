import Navbar from "../../Shared/Navbar"
import SearchPlan from "../Plans/SearchPlans"
import Blog from "./Blog.jsx/Blog"
import Cover from "./Cover"

const Home = () =>{
    return(
        <div>
            <Cover></Cover>
            <SearchPlan></SearchPlan>
            <Blog></Blog>
        </div>
    )
}

export default Home