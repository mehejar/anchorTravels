import { RiLoginBoxLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"
import logo from '../assets/Logo-01.png'

const Navbar = () => {

    const navLinks = <>

        <NavLink to='/'><li className="text-lg lg:text-white font-semibold"><a>Home</a></li></NavLink>
        <NavLink to='/shop'><li className="text-lg lg:text-white  font-semibold"><a>All Category</a></li></NavLink>
        <NavLink to='/dashboard'><li className="text-lg lg:text-white font-semibold"><a>Dashboard</a></li></NavLink>
        <NavLink to='/contact'><li className="text-lg lg:text-white font-semibold"><a>Contact</a></li></NavLink>

        

        {/* {
            user ? <>
                <button onClick={handleSignOut} className="flex gap-2 items-center text-lg font-semibold"><RiLoginBoxLine></RiLoginBoxLine>Sign Out</button>
            </> :
                <NavLink to={'/login'}><button className="flex gap-2 text-lg font-semibold  items-center"><RiLoginBoxLine></RiLoginBoxLine>Login</button></NavLink>
        } */}
        
    </>

    return (
        <div className="navbar">
            <div className="navbar-start z-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><div>
                    <img className=" lg:w-full" src={logo} alt="" />
                </div></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-10">
            <NavLink to={'/login'}><button className="py-2 px-4 flex gap-2 items-center text-white  bg-blue-500 rounded-sm bg-anchor font-semibold"><RiLoginBoxLine></RiLoginBoxLine>Sign Up</button></NavLink>
                
                
                
            </div>
            
        </div>
    )
}

export default Navbar