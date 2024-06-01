import {
  HiMiniBars3BottomRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import logo from "../../assets/logo.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
// import twitter from "../../assets/twitter.png";
import { Link } from "react-router-dom";
import CurrentYear from "../../utils/currentyear.jsx";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-44 h-auto" />
      </Link>
      <div>
        <div className="drawer drawer-end z-40">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button">
              <HiMiniBars3BottomRight className="text-2xl cursor-pointer" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-6 w-60 md:w-96 min-h-full bg-secondary text-base-content py-8 flex flex-col justify-between">
              <div>
                <p className="text-description leading-normal text-base w-full break-words">
                  Foursquare Cnc and Decor is an Architectural CNC firm were established in 2015. It provides all kinds of Wood and Metal CNC works.
                </p>
                <div
                  href="tel:+8801721636762"
                  className="flex items-center gap-3 mt-6 text-white w-full break-all"
                >
                  <HiOutlinePhone className="text-2xl" />
                  <span className="text-base">+880 1721-636762</span>
                </div>
                <div
                  href="tel:+8801721636762"
                  className="flex items-center gap-3 mt-4 text-white w-full break-all"
                >
                  <HiOutlineEnvelope className="text-2xl" />
                  <span className="text-base">info.foursquarebd@gmail.com</span>
                </div>
                <div
                  href="tel:+8801721636762"
                  className="flex items-start gap-3 mt-4 text-white w-full break-words"
                >
                  <HiOutlineMapPin className="text-[33px]" />
                  <span className="text-base">
                    Pukur Para, Shatarkul, Uttar Badda, Dhaka, Bangladesh
                  </span>
                </div>
                <h3 className="text-white text-xl font-medium my-4">
                  Contact us via social media
                </h3>
                <div className="flex items-center gap-4">
                  <Link to="https://facebook.com/foursquareinterior" target="_blank">
                    <img src={facebook} alt="foursquare-facebook" />
                  </Link>
                  <Link to="https://instagram.com/foursquare_luxurious_interior_" target="_blank">
                    <img src={instagram} alt="foursquare-instagram" />
                  </Link>
                  {/* <Link to="https://facebook.com">
                    <img src={twitter} alt="foursquare-twitter" />
                  </Link> */}
                </div>
              </div>
              <div>
                <p className="text-description mt-6 text-base">
                  © Copyright <CurrentYear /> Foursquare bd All Right Reserved
                </p>
                <p className="text-description mt-3 text-base">
                  Developed & Designed by{" "}
                  <Link
                    to="https://brainnect.com"
                    className="underline font-semibold underline-offset-2"
                    target="_blank"
                  >
                    Brainnect
                  </Link>
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;