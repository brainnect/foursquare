import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {project} = useParams();

    const projectsImages = [
        {
            _id: 1,
            projectCode: "dhanmondi-9a",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
        {
            _id: 2,
            projectCode: "noakhali",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
        {
            _id: 3,
            projectCode: "tuhin-sir",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
        {
            _id: 4,
            projectCode: "navana-head-office",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
    ]

    const findProject = projectsImages?.find(proj => proj?.projectCode === project);

    return (
        <div className="grid grid-cols-3 gap-5 mt-5 mb-16">
            {
                findProject?.images?.map((image, indx) => (
                    <img className="h-72" key={indx} src={image} alt="" />
                ))
            }
        </div>
    );
};

export default ProjectDetails;