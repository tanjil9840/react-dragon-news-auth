import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Root> </Root>,
        children:[
            {
                path:"/",
                element: <Home> </Home>
            },
            {
                path:'/login',
                element: <Login> </Login>
            }
        ]
    }
])

export default routes ; 