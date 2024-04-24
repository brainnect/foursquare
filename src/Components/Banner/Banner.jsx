
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
            title: '3D CNC Work',
            img: 'https://i.ibb.co/0QzYVSV/3.webp',
        },
        {
            title: 'Acoustic Panels',
            img: 'https://i.ibb.co/cJWGG0h/4.jpg',
        },
        {
            title: 'Acoustic Panels',
            img: 'https://i.ibb.co/4sMqxfN/5.jpg',
        }
    ]

    return (
        <div className="py-10">
            <div className="grid grid-cols-2 gap-7">
                {
                    categories?.map((category, idx) => (
                        <div key={idx}>
                            <div>
                                <h2>{category.title}</h2>
                            </div>
                        </div>
                    )).slice(0, 2)
                }
            </div>
        </div>
    );
};

export default Banner;