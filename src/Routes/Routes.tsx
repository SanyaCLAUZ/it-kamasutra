import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import TaskPage from "../pages/TaskPage";
import TrashRoom from "../pages/TrashRoom";
import {Contact} from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [ 
            {path: "", element: <HomePage/>},
            {path: "TestPage", element: <TestPage/>},
            {path: "TaskPage", element: <TaskPage/>},
            {path: "Contact", element: <Contact/>},
            {path: "TrashRoom", element: <TrashRoom/>},
        ]
    }
])