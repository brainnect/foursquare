import { HiMiniBars3BottomRight, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';
import logo from '../../assets/logo.jpg'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <Link to={'/'}>
                <img src={logo} alt="logo" className='w-44 h-auto' />
            </Link>
            <div>
                <div className="drawer drawer-end z-10">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="drawer-button">
                            <HiMiniBars3BottomRight className='text-2xl cursor-pointer' />                            
                        </label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 md:w-96 overflow-scroll min-h-full bg-secondary text-base-content py-8">
                            <p className='text-description leading-normal text-base w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl nec elit porttitor, at blandit arcu rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
                            <div href="tel:+8801721636762" className="flex items-center gap-3 mt-6 text-white w-full">
                                <HiOutlinePhone className="text-2xl" />
                                <span className='text-base'>+880 1721-636762</span>
                            </div>
                            <div href="tel:+8801721636762" className="flex items-center gap-3 mt-4 text-white w-full">
                                <HiOutlineEnvelope className="text-2xl" />
                                <span className='text-base'>info.foursquarebd@gmail.com</span>
                            </div>
                            <div href="tel:+8801721636762" className="flex items-start gap-3 mt-4 text-white w-full">
                                <HiOutlineMapPin className="text-[33px]" />
                                <span className='text-base'>Pukur Para, Shatarkul, Uttar Badda, Dhaka, Bangladesh</span>
                            </div>
                            <h3 className='text-white text-xl font-medium my-4'>Contact us via social media</h3>
                            <div className="flex items-center gap-4">
                                <Link to="https://facebook.com">
                                    <FaFacebook className="text-3xl text-[#1877f2] bg-white rounded-full" />
                                </Link>
                                <Link to="https://facebook.com">
                                    <FaFacebook className="text-3xl text-[#1877f2] bg-white rounded-full" />
                                </Link>
                                <Link to="https://facebook.com">
                                    <FaFacebook className="text-3xl text-[#1877f2] bg-white rounded-full" />
                                </Link>
                            </div>
                            <p className='text-description mt-6 text-base'>© Copyright 2024 <span className='font-semibold'>Foursquare bd</span> All Right Reserved</p>
                            <p className='text-description mt-3 text-base'>Developed by <Link to='https://brainnect.com' className='underline font-semibold underline-offset-2' target="_blank">Brainnect</Link></p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;