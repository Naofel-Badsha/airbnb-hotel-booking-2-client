import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
//import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Singup/Singup";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import DashboardLayouth from "../Layouts/DashboardLayouth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayouth></DashboardLayouth>,
    children: [
      {
        
      }
    ]
  },
]);
export default router;
