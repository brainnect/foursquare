import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
    return (
        <div className="max-w-[92%] xl:max-w-[1200px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;