import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () => {
    return (
        <div className="bg-blue-50">
            <div className="">
            <div className="lg:w-3/4 mx-auto">
            <Navbar></Navbar>
            </div>
            </div>


            <Outlet></Outlet>
            <div className="bg-blue-600">
            <Footer></Footer>
            </div>


        </div>
    )
}

export default Main;