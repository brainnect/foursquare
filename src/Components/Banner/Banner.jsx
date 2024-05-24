import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Banner = () => {
    const categories = [
        {
            title: 'Acoustic Panels',
            img: 'https://i.ibb.co/7zxvTnh/2.jpg',
            link: '/acoustic-panels'
        },
        {
            title: 'CNC Works',
            img: 'https://i.ibb.co/wKHmj89/1.jpg',
            link: '/cnc-works'
        },
        {
            title: 'Metal Works',
            img: 'https://i.ibb.co/0QzYVSV/3.webp',
            link: '/metal-cnc-work'
        },
        {
            title: '3D Panels',
            img: 'https://i.ibb.co/cJWGG0h/4.jpg',
            link: '/3d-panels'
        },
        {
            title: 'Sculpture',
            img: 'https://i.ibb.co/4sMqxfN/5.jpg',
            link: '/sculpture'
        },
        {
            title: 'Design Portfolio',
            img: 'https://i.ibb.co/pKhYRjC/Tom-Oliver-Payne-Brutalism-Natio.jpg',
            link: '/design-portfolio'
        },
        {
            title: 'Gift Item',
            img: 'https://i.ibb.co/5skdXKS/holiday-gift-guide-for-mechanics.jpg',
            link: '/gift-item'
        }

    ]

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