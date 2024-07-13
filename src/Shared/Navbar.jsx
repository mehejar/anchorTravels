import { RiLoginBoxLine } from "react-icons/ri"
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/Logo-01.png'
import { useContext } from "react"
import { AuthContex } from "../Pages/AuthProvider/AuthProvider"
import useAdmin from "../Hooks/useAdmin"

const Navbar = () => {

    const {user, logOut, } = useContext(AuthContex)

    const handleSignOut = () => {

        
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error)
                // An error happened.
            });
    }

    const [isAdmin] = useAdmin()


    const navLinks = <>

        <NavLink to='/'><li className="text-lg lg:text-white font-semibold"><a>Home</a></li></NavLink>
        <NavLink to='/blogPage'><li className="text-lg lg:text-white  font-semibold"><a>Blog</a></li></NavLink>
        {
            isAdmin? <NavLink to='/dashboard'><li className="text-lg lg:text-white font-semibold"><a>Dashboard</a></li></NavLink> : ''
        }
        
        <NavLink to='/contact'><li className="text-lg lg:text-white font-semibold"><a>Contact</a></li></NavLink>
        <NavLink to='/about'><li className="text-lg lg:text-white font-semibold"><a>About</a></li></NavLink>

        

       
        
    </>

    return (
        <div className="navbar">
            <div className="navbar-start z-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  items-center dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {navLinks}
                        
                    </ul>
                </div>
                <div>
                    <Link to={'/'}><img className=" lg:w-full" src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end z-10">
            {
            user ? 
                <button onClick={handleSignOut} className="flex gap-2 text-white bg-blue-600 p-2 rounded-lg items-center text-lg font-semibold"><RiLoginBoxLine></RiLoginBoxLine>Sign Out</button>
             :
                <NavLink to={'/login'}><button className="flex text-white bg-blue-600 p-2 rounded-lg gap-2 text-lg font-semibold  items-center"><RiLoginBoxLine></RiLoginBoxLine>Login</button></NavLink>
        }
                
                
                
            </div>
            
        </div>
    )
}

export default Navbar