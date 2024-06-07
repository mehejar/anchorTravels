import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const Main = () => {
    return (
        <div className="bg-blue-50">
            <div className="lg:w-3/4 mx-auto">
            <Navbar></Navbar>
            </div>


            <Outlet></Outlet>


        </div>
    )
}

export default Main;