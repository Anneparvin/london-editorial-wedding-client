import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ServiceSection from "../../Pages/ServiceSection/ServiceSection";
import ReviewSection from "../../Pages/ReviewSection/ReviewSection";


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
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/serviceSection',
                element:<ServiceSection></ServiceSection>
            },
            {
                path:'/reviewSection',
                element:<ReviewSection></ReviewSection>
            }
        ]
    }
])

export default router;

