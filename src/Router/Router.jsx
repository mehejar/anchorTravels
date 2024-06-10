import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/SignOut/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import SignUp from "../Pages/Login/SignOut/SIgnUp";
import AddPlan from "../Pages/Add Plans/AddPlan";
import ManagePlan from "../Pages/ManagePlans/ManagePlans";
import PlanDetails from "../Pages/Plans/PlanDetails";
import AddBlog from "../Pages/Add Blog/AddBlog";
import BlogDetails from "../Pages/Home/Blog.jsx/BlogDetails";
import ManageBookings from "../Pages/ManageBookings/ManageBooking";
// import ManageBookings from "../Pages/ManageBookings/ManageBooking";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/plans/:id',
                
                element: <PlanDetails></PlanDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/plans/${params.id}`)
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'addplan',
                element: <AddPlan></AddPlan>
            },
            {
                path: 'manageplans',
                element: <ManagePlan></ManagePlan>
            },
            {
                path: 'addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: 'manageBooking',
                element: <ManageBookings></ManageBookings>
            },
        ]
    }
])

