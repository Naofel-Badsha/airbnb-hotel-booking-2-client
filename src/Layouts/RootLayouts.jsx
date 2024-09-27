import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-24 min-h-[cale(100vh-68px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;