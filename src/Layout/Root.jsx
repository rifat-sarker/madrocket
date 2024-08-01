import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/Home/Navbar/Navbar";


const Root = () => {
    return (
        <div className="p-4 font-Inter">
            <StickyNavbar/>
            <Outlet/>
        </div>
    );
};

export default Root;