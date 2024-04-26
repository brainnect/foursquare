import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductCat from '../../assets/products.jpg'
import ProjectCat from '../../assets/projects.jpg'
import ReviewCat from '../../assets/reviews.jpg'

const CategoryPage = () => {
    const {category} = useParams()

    return (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link to={`/${category}/products`} className="category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${ProductCat}') no-repeat center center / cover`}}>
                <div className="flex justify-between items-center">
                    <h2>Products</h2>
                    <div className="icon_box">
                        <IoIosArrowForward className="text-xl" />
                    </div>
                </div>
            </Link>
            <Link to={`/${category}/projects`} className="category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${ProjectCat}') no-repeat center center / cover`}}>
                <div className="flex justify-between items-center">
                    <h2>Our Projects</h2>
                    <div className="icon_box">
                        <IoIosArrowForward className="text-xl" />
                    </div>
                </div>
            </Link>
            <Link to={`/${category}/reviews`} className="category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${ReviewCat}') no-repeat center center / cover`}}>
                <div className="flex justify-between items-center">
                    <h2>Supplied Client List</h2>
                    <div className="icon_box">
                        <IoIosArrowForward className="text-xl" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryPage;