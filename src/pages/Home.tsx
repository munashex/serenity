import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import face1 from '../images/home/face1.avif' 
import face2 from '../images/home/face2.avif'
import face3 from '../images/home/face3.avif' 
import image1 from '../images/home/image1.avif' 
import image2 from '../images/home/image2.avif'
import { MdAutorenew as Renew } from "react-icons/md";

const facesImages = [
    {image: face1, id: 1}, 
    {image: face2, id: 2}, 
    {image: face3, id: 3}
]

const Home = () => {

    return (
        <div className="px-3 mt-12 lg:px-16">
          {/* first home section on sm & md screens*/} 
          <div className="flex flex-col gap-5 items-center lg:hidden">
           <div className="flex items-center gap-5">
            <span className="bg-[#8d6959] inline-flex items-center gap-1 rounded-full py-1 px-3 text-white">
            <FaStar color="gold" size={18}/> 4.7 Rated
            </span> 
            <h1 className="text-[#8d6969]">By Satisfied customers</h1>
           </div>
           
           <h1 className="text-3xl font-bold text-center">You Deserve to Feel Better. Peace Begins with Us</h1>
           <h1 className="text-[#8d6969] text-center">We offer compassionate and personalized mental health support to guide life’s challenges.</h1>
          <Link to="/appointment" className="default-btn">Book an appointment</Link>
          
           <div className="flex mt-8">
            {facesImages.map((face) => (
            <div key={face.id}  className={`-ml-4 first:ml-0 rounded-full border-2 border-white`}>
             <img src={face.image} alt={`serenity-face${face.id}`} 
             className="w-14"
             />
             </div>
            ))}
           </div>

           <h1 className="text-[#8d6969]"><span className="text-[#e39a86] font-bold">300+</span>  Individuals who have trusted Serenity Minds</h1>
           
           <div className="mt-12 relative">
           <img src={image1} alt="serenity-1"  
            className="h-1/2 md:h-screen  w-screen object-cover rounded-xl"
           />
          <div className="absolute top-20 right-7 inline-flex items-center">
          <div className="bg-[#8d6959] w-8 h-8 rounded-full p-1.5">
            <div className="h-5 w-5 rounded-full bg-[#d5c7c0] animate-pulse"></div>
            </div>
          <h1 className="bg-[#8d6959] py-1 px-3 text-white -ml-1 rounded-full">Healthy Mind</h1>
          </div>
           </div>

           <h1 className="text-2xl font-bold">You Deserve Peace</h1>
           <h1 className="text-[#8d6959] ">We offer compassionate, personalized mental health support.</h1>
          
           <div className="mt-10 relative">
           <img src={image2} alt="serenity-1"  
            className="h-1/2 md:h-screen  w-screen object-cover rounded-xl"
           />
           <h1 className="absolute top-10 right-16 text-lg bg-black/20 text-white inline-flex items-center gap-1 py-1 px-3 rounded-full font-bold">
            <Renew color="#8d6959" size={25}/> Renew
            </h1>
           </div>
          </div> 

          

        </div>
    )
}

export default Home