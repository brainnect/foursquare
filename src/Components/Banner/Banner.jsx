import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    const categories = [
        {
            title: 'Acoustic Panels',
            img: 'https://i.ibb.co/7zxvTnh/2.jpg',
        },
        {
            title: 'CNC Works',
            img: 'https://i.ibb.co/wKHmj89/1.jpg',
        },
        {
            title: 'Metal CNC Work',
            img: 'https://i.ibb.co/0QzYVSV/3.webp',
        },
        {
            title: '3D Panels',
            img: 'https://i.ibb.co/cJWGG0h/4.jpg',
        },
        {
            title: 'Sculpture',
            img: 'https://i.ibb.co/4sMqxfN/5.jpg',
        }
    ]

    return (
        <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    categories?.map((category, idx) => (
                        <div key={idx} className="top_category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`}}>
                            <div className="flex justify-between items-center">
                                <h2>{category.title}</h2>
                                <div className="icon_box">
                                    <IoIosArrowForward className="text-xl" />
                                </div>
                            </div>
                        </div>
                    )).slice(0, 2)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {
                    categories?.map((category, idx) => (
                        <div key={idx} className="bottom_category_card" style={{background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`}}>
                            <div className="flex justify-between items-center">
                                <h2>{category.title}</h2>
                                <div className="icon_box">
                                    <IoIosArrowForward className="text-xl" />
                                </div>
                            </div>
                        </div>
                    )).slice(2, 5)
                }
            </div>
        </div>
    );
};

export default Banner;