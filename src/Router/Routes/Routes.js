import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default router;

