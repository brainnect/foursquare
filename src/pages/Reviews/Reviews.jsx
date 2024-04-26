import quoteImg from '../../assets/quote.png'

const Reviews = () => {
    const reviews = [
        {
            name: 'Abdur Rahman',
            category: 'unknown',
            image: 'https://i.ibb.co/N6fx4qz/client.jpg',
            position: 'COO, Brainnect',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus.'
        },
        {
            name: 'Abdur Rahman',
            category: 'unknown',
            image: 'https://i.ibb.co/N6fx4qz/client.jpg',
            position: 'COO, Brainnect',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus.'
        },
        {
            name: 'Abdur Rahman',
            category: 'unknown',
            image: 'https://i.ibb.co/N6fx4qz/client.jpg',
            position: 'COO, Brainnect',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus.'
        },
        {
            name: 'Abdur Rahman',
            category: 'unknown',
            image: 'https://i.ibb.co/N6fx4qz/client.jpg',
            position: 'COO, Brainnect',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus.'
        },
        {
            name: 'Abdur Rahman',
            category: 'unknown',
            image: 'https://i.ibb.co/N6fx4qz/client.jpg',
            position: 'COO, Brainnect',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus.'
        },
    ]

    return (
        <div>
            <h1 className="font-medium text-3xl">What our clients says</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews?.map((review, idx) => (
                        <div key={idx} className="rounded-md grid grid-cols-5">
                            <div className='z-10'>
                            <img src={review?.image} alt="" className='w-20 h-16 md:h-20 rounded-xl border-2 border-white border-opacity-80' />
                            </div>
                            <div className='bg-accent rounded-xl w-auto col-span-4 mt-5 -ml-14'>
                                <div className="p-3 flex justify-between ml-16 pb-5">
                                    <div>
                                        <h3 className='text-lg font-medium'>{review?.name}</h3>
                                        <h4 className='text-sm font-medium text-description'>{review?.position}</h4>
                                    </div>
                                    <img src={quoteImg} className='w-10 h-10 hidden md:block'/>
                                </div>
                                <div className="bg-secondary p-4 rounded-b-xl">
                                    <p className='text-description'>{review?.review}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Reviews;