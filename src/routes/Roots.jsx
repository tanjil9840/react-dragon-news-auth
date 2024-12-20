import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/Shared/News/News";
import PriveRoute from "./PriveRoute";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Root> </Root>,
        children:[
            {
                path:"/",
                element: <Home> </Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PriveRoute>  <News> </News> </PriveRoute>
            }, 
            {
                path:'/login',
                element: <Login> </Login>
            },
            {
                path:'/register',
                element: <Register> </Register>
            }
        ]
    }
])

export default routes ; 