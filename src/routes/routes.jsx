import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoriseNews from "../pages/Home/CategoriseNews/CategoriseNews";
import SingleNews from "../layouts/SingleNews";
import HomeContent from "../pages/Home/HomeContent/HomeContent";
import NewsPage from "../pages/NewsPage/NewsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeContent></HomeContent>
            },
            {
                path: '/category/:id',
                element: <CategoriseNews></CategoriseNews>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <SingleNews></SingleNews>,
        children: [
            {
                path: ':id',
                element: <NewsPage></NewsPage>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;