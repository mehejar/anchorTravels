import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/SignOut/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import SignUp from "../Pages/Login/SignOut/SIgnUp";
import AddPlan from "../Pages/Add Plans/AddPlan";
import ManagePlan from "../Pages/ManagePlans/ManagePlans";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'addplan',
                element: <AddPlan></AddPlan>
            },
            {
                path: 'manageplans',
                element: <ManagePlan></ManagePlan>
            }
        ]
    }
 ])

 