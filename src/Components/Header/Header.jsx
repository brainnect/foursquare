import {
  HiMiniBars3BottomRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import logo from "../../assets/logo.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import pinterest from "../../assets/pinterest.png";
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
                  Welcome to Foursquare CNC & Décor. We are a leading CNC Design
                  service provider based in Dhaka; Bangladesh established back
                  in 2015. Foursquare are dedicated for making & producing
                  Acoustic Panels, CNC Jali Cutting (Wood, Board, Metal,
                  ACP/Alcobon), CNC Engraving, CNC 3D Panels, Classical CNC
                  Design. We also have expertise on Royal Classical Residential
                  interior turnkey project and have done projects with Various
                  Architect Firm & Leading Real Estate Company in Bangladesh.
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
                  Contact Us
                </h3>
                <div className="flex items-center gap-4">
                  <Link
                    to="https://facebook.com/foursquareinterior"
                    target="_blank"
                  >
                    <img src={facebook} alt="foursquare-bd-facebook" />
                  </Link>
                  <Link
                    to="https://instagram.com/foursquare_luxurious_interior_"
                    target="_blank"
                  >
                    <img src={instagram} alt="foursquare-bd-instagram" />
                  </Link>
                  <Link to="https://www.pinterest.com/foursquarebd/">
                    <img
                      src={pinterest}
                      alt="foursquare-bd-pinterest"
                      target="_blank"
                    />
                  </Link>
                  <Link
                    to="https://www.youtube.com/@foursquareinterior4968"
                    target="_blank"
                  >
                    <img src={youtube} alt="foursquare-bd-youtube" />
                  </Link>
                </div>
                <div className="responsive_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9068743892794!2d90.4479416!3d23.786330299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78af65dc51f%3A0xe063832e6c616fc5!2sFoursquare%20CNC%20%26%20Interior!5e0!3m2!1sen!2sbd!4v1717247343867!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
