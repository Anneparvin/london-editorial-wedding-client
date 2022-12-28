import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blog from "../../Pages/Blog/Blog";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ServiceSection from "../../Pages/ServiceSection/ServiceSection";
import ReviewSection from "../../Pages/ReviewSection/ReviewSection";
import Services from "../../Pages/Home/Services/Services";


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
                element:<Services></Services>
            },
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://y-seven-mu.vercel.app/services/${params.id}`)
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

