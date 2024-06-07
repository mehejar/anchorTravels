import { FaCalendar, FaHome, FaPalette, FaShoppingCart } from "react-icons/fa"
import { RiMenuSearchFill } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom"
import { FaPlaneDeparture } from "react-icons/fa";
import logo from "../../assets/Logo-01.png"
import UserDashboard from "./UserDashboard";


const Dashboard = () => {
    // const [isAdmin] = useAdmin()
    const isAdmin = true

    
    return (
        <div>
            { isAdmin?
                <div className="">
                <div className="  drop-shadow-xl bg-[#ffffff]">
                    <div className="menu mt-4 ml-8 flex flex-row">
                        
                            
                               
                                    <li>
                                        <img className="w-[200px]" src={logo} alt="" />
                                        
                                    </li>
                                    <div className="divider"></div>
                                    {/* <li className="flex gap-2 text-left py-4 items-center uppercase" to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</li> */}
    
                                    <li><NavLink className="flex gap-2 my-4 items-center  uppercase" to="/dashboard/addplan"><FaPlaneDeparture></FaPlaneDeparture>Add Plan</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 items-center  uppercase" to="/dashboard/manageplans"><RiMenuSearchFill></RiMenuSearchFill>Manage Plan</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 items-center  uppercase" to="/dashboard/manageorders"><IoMdListBox></IoMdListBox>Manage Bookings</NavLink></li>
    
                                    <li><NavLink className="flex gap-2 py-4 uppercase  items-center" to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>
    
                            
    
                                
                        
    
                        {/* common */}
                        <div className="divider"></div>
    
                        <li><NavLink className="flex gap-2 py-4 uppercase items-center" to="/"><FaHome></FaHome>Home</NavLink></li>
    
                        <li><NavLink className="flex gap-2 py-4 uppercase  items-center" to="/"><FaPalette></FaPalette> Menu</NavLink></li>
                    </div>
    
                </div>
                {/* dashboard content */}
                <div className="bg-gray-100">
                    <Outlet></Outlet>
                </div>
            </div> : <UserDashboard></UserDashboard>
            // <NavLink className="flex gap-2 py-4 uppercase  items-center" to="/dashboard/myOrders"><FaUsers></FaUsers>My Orders</NavLink>
            }
        </div>
    )
}

export default Dashboard