import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="max-w-[90%] md:max-w-[1200px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;