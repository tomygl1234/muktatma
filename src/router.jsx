//Esta linea inizializa el router
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./views/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            }
        ]
    }
])

export default router;