import homeImage3 from '../../images/home/homeImage3.avif'
import { GoArrowUpRight as Arrow } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FaHourglassStart } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbBulb as Bulb } from "react-icons/tb";
import { secondSectionData } from '../../data/home'; 
import {useEffect, useState} from 'react'
import homeImage4 from '../../images/home/homeImage4.avif'



const homeData = [ 
  { name: "Renew", icon: <FaHourglassStart size={20}/> }, 
  { name: "Heal", icon: <RiMentalHealthFill size={20}/> }
]

const SecondSection = () => {
  const [carousel, setCarousel] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel((prev) => {
        const maxId = Math.max(...secondSectionData.map((item) => item.id));
        return prev >= maxId ? 1 : prev + 1;
      });
    }, 7000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="mt-16 md:mt-20 lg:mt-36">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-2xl lg:text-3xl">Space to Talk.</h1>
        <h1 className="text-[#8d6969] lg:text-lg">
          At Serenity Minds, we believe healing begins with feeling heard.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
        {/* first item */}
        <div className="bg-[#f8f3ec] py-7 px-7 rounded-xl">
          <div className="relative">
            <img
              src={homeImage3}
              alt="serenity-homeImage"
              className="mx-auto object-cover w-full"
            />
            <Link
              to="/appointment"
              className="absolute top-6 right-10 bg-white p-3 rounded-full transition delay-300 duration-500 hover:scale-110 hover:rotate-45 hover:bg-[#e1937d]"
            >
              <Arrow size={30} />
            </Link>
            <div className="absolute bottom-5 left-7 flex flex-wrap gap-4">
              {homeData.map((item) => (
                <div
                  key={item.name}
                  className="bg-white/10 py-2 px-3 rounded-full inline-flex items-center gap-2"
                >
                  <span className="text-white">{item.icon}</span>
                  <h1 className="text-white font-bold text-lg">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1 className="text-2xl text-center">Inside a Therapy Session</h1>
            <h1 className="text-center text-[#8d6969]">
              Walkthrough of what to expect in a typical therapy session at Serenity Minds.
            </h1>
          </div>
        </div>

        {/* second item */}
        <div className="bg-gradient-to-r relative from-[#f36551] to-[#f59a84] py-7 rounded-xl px-3">
          <div className="flex items-center justify-between">
            <div className="bg-white w-fit p-2 rounded-full">
              <Bulb size={30} color="#e5a08c" />
            </div>
            <h1 className="bg-white w-fit py-1 rounded-xl font-bold px-5">
              This Year
            </h1>
          </div>

          <div className="mt-5 text-white lg:absolute lg:inset-y-30">
            {secondSectionData.map((item) =>
              item.id === carousel ? (
                <div key={item.id} className="space-y-3 mt-12 animate-fade-right">
                  <h1 className="text-5xl">+{item.percentage}</h1>
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="text-white/90">{item.description}</p>
                </div>
              ) : null
            )}
            {/* carousel progress bars */}
            <div className="mt-12 lg:mt-20 flex gap-2 items-center justify-center">
             {secondSectionData.map((item) => (
              <h1 key={item.id} className={item.id === carousel ? 'w-5  h-2   bg-white animate-fade-right rounded': 'w-5  h-2 rounded bg-white/20'}></h1>
             ))}
            </div>
          </div>
        </div>

        {/* third item of grid  */} 
        <div className="bg-[#f8f3ec] py-7 px-3 rounded-xl flex flex-col items-center gap-7">
          <img src={homeImage4} alt="serenity-image" 
           className="h-80 obect-cover"
          />
          <div className="space-y-7">
            <div className="flex flex-col items-center"> 
              <h1 className="text-2xl font-bold">Expert Care</h1>
              <h1 className="text-[#8d6969]">Meet Our Counseling Team at Serenity Minds</h1>
            </div>
            <div className="flex flex-col items-center"> 
              <h1 className="text-4xl">12+</h1>
              <h1>Licensed Counselors</h1>
            </div>
            <div className="flex flex-col items-center"> 
              <h1 className="text-4xl">50+</h1>
              <h1>Years of Combined Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
