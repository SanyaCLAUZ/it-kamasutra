import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import TestPage from "../pages/TestPage/TestPage";
import AboutPage from "../pages/AboutPage/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [ 
            {path: "", element: <HomePage/>},
            {path: "TestPage", element: <TestPage/>},
            {path: "about", element: <AboutPage/>},
        ]
    }
])