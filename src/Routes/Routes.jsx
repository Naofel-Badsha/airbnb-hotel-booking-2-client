import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
//import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/Singup/Singup";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import DashboardLayouth from "../Layouts/DashboardLayouth";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import AddRoom from "../Pages/Dashboard/Host/AddRoom";
import MyListing from "../Pages/Dashboard/Host/MyListing";


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
        index: true,
        element: <Statistics></Statistics>
      },
      {
        path: "addRoom",
        element: <AddRoom></AddRoom>
      },
      {
        path: "myListing",
        element: <MyListing></MyListing>
      },
    ]
  },
]);
export default router;
