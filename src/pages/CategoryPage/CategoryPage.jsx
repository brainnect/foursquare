import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import useCategories from "../../Hook/useCategory";
import Projects from "../../Components/Projects/Projects";

const CategoryPage = () => {
    const {category} = useParams()
    const {categories} = useCategories()
    const currentCategory = categories?.find(categoryName =>  categoryName.link === category)

    return (
        <div className={`py-10`}>
            {
                currentCategory?.items ?
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        currentCategory?.items?.map((item, idx) => (
                            <Link key={idx} to={`/${category}/${item?.link}`} className="category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${item?.img}') no-repeat center center / cover`}}>
                                <div className="flex justify-between items-center">
                                    <h2>{item?.title}</h2>
                                    <div className="icon_box">
                                        <IoIosArrowForward className="text-xl" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                : <Projects></Projects>
            }
        </div>
    );
};

export default CategoryPage;