import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useCategories from "../../Hook/useCategory";

const Banner = () => {
    const {categories} = useCategories()

    return (
        <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                {
                    categories?.map((category, idx) => (
                        <Link to={category?.link} key={idx} className="top_category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`}}>
                            <div className="flex justify-between items-center">
                                <h2>{category.title}</h2>
                                <div className="icon_box">
                                    <IoIosArrowForward className="text-xl" />
                                </div>
                            </div>
                        </Link>
                    )).slice(0, 2)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    categories?.map((category, idx) => (
                        <Link to={category?.link} key={idx} className="bottom_category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`}}>
                            <div className="flex justify-between items-center">
                                <h2>{category.title}</h2>
                                <div className="icon_box">
                                    <IoIosArrowForward className="text-xl" />
                                </div>
                            </div>
                        </Link>
                    )).slice(2, 5)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {
                    categories?.map((category, idx) => (
                        <Link to={category?.link} key={idx} className="top_category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`}}>
                            <div className="flex justify-between items-center">
                                <h2>{category.title}</h2>
                                <div className="icon_box">
                                    <IoIosArrowForward className="text-xl" />
                                </div>
                            </div>
                        </Link>
                    )).slice(5, 7)
                }
            </div>
        </div>
    );
};

export default Banner;