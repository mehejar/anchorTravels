import Navbar from "../../Shared/Navbar"
import SearchPlan from "../Plans/SearchPlans"
import Cover from "./Cover"

const Home = () =>{
    return(
        <div>
            <Cover></Cover>
            <SearchPlan></SearchPlan>
        </div>
    )
}

export default Home