import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import ProductCat from "../../assets/products.jpg";
const RecentProjects = () => {
  const { projects } = useParams();
  const recentProjects = [
    {
      _id: "1",
      projectName: "Dhanmondi 9/A",
      projectCode: "dhanmondi-9a",
      projectType: "luxurious-residencial",
      projectImage: "https://i.ibb.co/b6zmFQF/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg",
    },
    {
      _id: "2",
      projectName: "Noakhali",
      projectCode: "noakhali",
      projectType: "luxurious-residencial",
      projectImage: "https://i.ibb.co/dkgym65/pexels-pixabay-164558.jpg",
    },
    {
      _id: "3",
      projectName: "Tuhin Sir",
      projectCode: "tuhin-sir",
      projectType: "office-interior",
      projectImage: "https://i.ibb.co/5TvkTvB/pexels-expect-best-79873-323780.jpg",
    },
    {
      _id: "4",
      projectName: "Navana Head Office",
      projectCode: "navana-head-office",
      projectType: "office-interior",
      projectImage: "https://i.ibb.co/4jLRZRJ/2-center-point-hero-min.webp",
    },
  ];

  const filterProjects = recentProjects?.filter(
    (proj) => proj?.projectType === projects
  );


  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filterProjects?.map((project) => (
        <Link
        key={project?._id}
          to={`/recent-projects-details/${project?.projectCode}`}
          className="category_card"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('${project?.projectImage}') no-repeat center center / cover`,
          }}
        >
          <div className="flex justify-between items-center">
            <h2>{project?.projectName}</h2>
            <div className="icon_box">
              <IoIosArrowForward className="text-xl" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentProjects;
