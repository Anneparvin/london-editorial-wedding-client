import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ServiceSection from "../../Pages/ServiceSection/ServiceSection";
import ReviewSection from "../../Pages/ReviewSection/ReviewSection";
import AddService from "../../Pages/AddService/AddService";
import Checkout from "../../Pages/CheckOut/CheckOut";
import AllServices from "../../Pages/AllServices/AllServices";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";




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
                path:'/services',
                element:<AllServices></AllServices>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>,
                loader: ()=> fetch(`https://y-seven-mu.vercel.app/services`)
            },
            {
                path:'/serviceDetails/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://y-seven-mu.vercel.app/services/${params.id}`)
            },
            {
                path:'/serviceSection',
                element:<ServiceSection></ServiceSection>
            },
            {
                path:'/reviewSection',
                element:<PrivateRoute><ReviewSection></ReviewSection></PrivateRoute>
            },
            {
                path:'/checkOut',
                element:<Checkout></Checkout>,
                loader: ({params})=> fetch(`https://y-seven-mu.vercel.app/services/${params.id}`)
            }
            
        ]
    }
])

export default router;

