import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";
import { useEffect, useState } from "react";

const Layout = () => {
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setShowLoading(false)
        }, 2000)

        return () => clearTimeout(timeOut)
    }, [])

    return (
        <div className="max-w-[92%] xl:max-w-[1200px] mx-auto">
            <div className={`transition-all duration-1000 ${showLoading ? 'opacity-100' : 'opacity-0'}`}>
                <Loading showLoading={showLoading}></Loading> 
            </div>
            <div className={`transition-all duration-1000 ${showLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;