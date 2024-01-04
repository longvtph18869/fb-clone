import PhotoView from "../components/Photo/PhotoView";
import Layout from "../components/layout/Layout";
import AuthGuard from "../guard/authGuard";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/profile/Profile";


export const indexRouter: any = {
    path: "/",
    // element: <AuthGuard><Layout /></AuthGuard>,
    element: <Layout />,
    children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "profile", element: <Profile /> },
        { path: "post/215452684/photo", element: <PhotoView /> }
    ]
}