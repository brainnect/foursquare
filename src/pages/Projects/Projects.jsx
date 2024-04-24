import smallImgOne from "../../assets/projects-pic/small/one.jpg"
import smallImgTwo from "../../assets/projects-pic/small/edcf4fa9f8f8c588d31606db6caea554.jpg"
import BigImgOne from "../../assets/projects-pic/big/one.jpg"
import NormalImgOne from "../../assets/projects-pic/normal/one.jpg"
const Projects = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
           {/* main div for grid */}
           <div>
            {/* upper section */}
            <section className="grid grid-cols-3 gap-7">
                <div className="col-span-1">
                   <div className="flex flex-col gap-14">
                   <img src={smallImgOne} alt="small_image_one" className="h-[237px] w-[337px] rounded-lg border-2 border-white hover:scale-[102%] transition-all"/>
                    <img src={smallImgTwo} alt="small_image_one" className="h-[237px] w-[337px] rounded-lg border-2 border-white hover:scale-[102%] transition-all" />
                   </div>
                </div>
                <div  className="col-span-2">
                   <img src={BigImgOne} alt="big_image" className="h-[531px] w-[788px] rounded-lg border-2 border-white hover:scale-[102%] transition-all" />
                </div>
            </section>
            {/* upper section */}
            {/* lower section */}
            <section>
                <div className="flex justify-between mt-5">
                <img src={NormalImgOne} alt="small_image_one" className="w-[559px] h-[355px] rounded-lg border-2 border-white hover:scale-[102%] transition-all"/>
                    <img src={NormalImgOne} alt="small_image_one" className="w-[559px] h-[355px] rounded-lg border-2 border-white hover:scale-[102%] transition-all" /> 
                </div>
            </section>
           {/* lower section */}
           </div>
          {/* see more btn */}
          <div className="my-8 text-center">
            <button className="bg-white px-4 py-2 font-medium rounded-lg border-2 border-white text-black text-lg">See More</button>
            </div>
              {/* see more btn */}
           {/* main div for grid */}
        </div>
    );
};

export default Projects;