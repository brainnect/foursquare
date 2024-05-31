import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Projects = () => {
  const projects = [
    {
      title: "Luxurious Residencial",
      img: "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg",
      link: "/recent-projects/luxurious-residencial",
    },
    {
      title: "Office Interior",
      img: "https://i.ibb.co/M90CnTf/newimag.jpg",
      link: "/recent-projects/office-interior",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mb-20 mt-10">
      <h2 className="text-3xl mb-8 font-medium">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects
          ?.map((category, idx) => (
            <Link
              to={category?.link}
              key={idx}
              className="top_category_card"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${category?.img}') no-repeat center center / cover`,
              }}
            >
              <div className="flex justify-between items-center">
                <h2 style={{ fontSize: "24px" }}>{category.title}</h2>
                <div className="icon_box">
                  <IoIosArrowForward className="text-xl" />
                </div>
              </div>
            </Link>
          ))
          .slice(0, 2)}
      </div>
    </div>
  );
};

export default Projects;
