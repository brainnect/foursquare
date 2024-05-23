import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const {project} = useParams();

    const projectsImages = [
        {
            _id: 1,
            projectCode: "dhanmondi-9a",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
        {
            _id: 2,
            projectCode: "noakhali",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg"]
        },
        {
            _id: 3,
            projectCode: "tuhin-sir",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg"]
        },
        {
            _id: 4,
            projectCode: "navana-head-office",
            images: ["https://i.ibb.co/M90CnTf/newimag.jpg", "https://i.ibb.co/ssZKx4X/jake-colling-ao06rsr8-Cls-unsplash.jpg", "https://i.ibb.co/M90CnTf/newimag.jpg"]
        },
    ]

    const findProject = projectsImages?.find(proj => proj?.projectCode === project);

    return (
        <div className={`grid gap-5 mt-5 mb-16 ${findProject?.images.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {
                findProject?.images?.map((image, indx) => (
                    <img className={`${findProject?.images.length > 2 ? 'h-72' : 'h-80'} w-full`} key={indx} src={image} alt="" />
                ))
            }
        </div>
    );
};

export default ProjectDetails;