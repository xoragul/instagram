import { createBrowserRouter } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/Login";
import Home, { Layout } from "./components/home";
import Profile from "./components/profile";
import AccountPost from "./components/accountPost";
import AccountSave from "./components/accountSave";
import AccountTagged from "./components/accoutTagged";
import Create from "./components/create";

const route = createBrowserRouter([
    {
        path:'/register',
        element: <Register />
    },
    {
        path:'/login',
        element: <Login />
    },
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"profile",
                element:<Profile />,
                children:[
                    {
                        path:"",
                        element:<AccountPost/>
                    },
                    {
                        path:"save",
                        element:<AccountSave/>
                    },
                    {
                        path:"tagged",
                        element:<AccountTagged />
                    },
                ]
            }
        ]

        
    }
])

export default route;