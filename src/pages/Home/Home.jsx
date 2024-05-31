import Banner from "../../Components/Banner/Banner";
import Projects from "../Projects/Projects";
import "./app.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="scroll-div">
        <Banner />
      </div>
      <div className="scroll-div-2">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
