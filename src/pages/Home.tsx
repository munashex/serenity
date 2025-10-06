import { FaStar } from "react-icons/fa";
import face1 from '../images/home/face1.avif' 
import face2 from '../images/home/face2.avif'
import face3 from '../images/home/face3.avif' 
import image1 from '../images/home/image1.avif' 
import image2 from '../images/home/image2.avif'
import { MdAutorenew as Renew } from "react-icons/md";
import { FaStarOfLife as Mental } from "react-icons/fa";
import { VscWorkspaceTrusted as Trust } from "react-icons/vsc";
import { FaHourglassStart } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import SecondSection from "../components/home/SecondSection";
import Help from "../components/home/Help"; 
import homeImage5 from '../images/home/homeImage5.avif' 
import OtherServices from "../components/home/OtherServices";
import inside1 from '../images/home/inside1.avif' 
import inside2 from '../images/home/inside2.avif'
import inside3 from '../images/home/inside3.avif'
import inside4 from '../images/home/inside4.avif'
import inside5 from '../images/home/inside5.avif'

const facesImages = [
    {image: face1, id: 1}, 
    {image: face2, id: 2}, 
    {image: face3, id: 3}
]

const homeData = [ 
{name: "Mental Wellness", icon: <Mental size={20}/>}, 
{name: "Built on Trust", icon: <Trust size={20}/>},
{name: "Start Your Healing Journey", icon: <FaHourglassStart size={20}/>}, 
{name: "Heal", icon: <RiMentalHealthFill size={20}/>}
]

const whatMakesBetter = [
  {
  id: 1,
  name: "You’ll Feel Heard and Understood", icon: <Mental size={30}/>, 
  description: "Our counselors listen with care, creating a space where you can express yourself freely — without judgment or pressure."
 }, 
 {
  id: 2,
  name: "Safe, Non-Judgmental Environment", icon: <Trust size={30}/>, 
  description: "From your first session onward, we help you uncover patterns, build resilience, and make steady, meaningful progress."
 }, 
 {
id: 3,
name: "Observe Real Progress with Real Change", icon: <FaHourglassStart size={30}/>, 
description: "Investing in your mental health isn’t a luxury — it’s self-respect. You deserve the calm, clarity, and confidence that comes."
 }
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
          <a href="mailto:munashemugondaa@gamil.com" className="default-btn">Book an appointment</a>
          
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

            {/* first home section on lg screens*/} 
            <div className="hidden lg:grid grid-cols-3 gap-x-6 mt-24 items-start">
             <div className="flex flex-col gap-5">
             <div className="flex items-center gap-5">
            <span className="bg-[#8d6959] inline-flex items-center gap-1 rounded-full py-1 px-3 text-white">
            <FaStar color="gold" size={18}/> 4.7 Rated
            </span> 
            <h1 className="text-[#8d6969]">By Satisfied customers</h1>
           </div>
           
           <h1 className="text-5xl font-bold  max-w-xl">You Deserve to Feel Better. Peace Begins with Us</h1>
           <h1 className="text-[#8d6969] max-w-lg">We offer compassionate and personalized mental health support to guide life’s challenges.</h1>
          <a href="mailto:munashemugondaa@gamil.com" className="default-btn w-fit">Book an appointment</a>
          
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
             </div>

             <div className="relative">
           <img src={image1} alt="serenity-1"  
            className="object-cover rounded-xl"
           />
          <div className="absolute top-20 right-7 inline-flex items-center">
          <div className="bg-[#8d6959] w-8 h-8 rounded-full p-1.5">
            <div className="h-5 w-5 rounded-full bg-[#d5c7c0] animate-pulse"></div>
            </div>
          <h1 className="bg-[#8d6959] py-1 px-3 text-white -ml-1 rounded-full">Healthy Mind</h1>
          </div>

          <div className="absolute bottom-5 left-7 flex flex-wrap gap-4">
            {homeData.map((item) => (
            <div key={item.name} className="bg-white  py-2 px-3 rounded-full inline-flex items-center gap-2">  
              <span className="text-[#e1937d]">{item.icon}</span>
              <h1 className="text-[#997a6b] font-bold">{item.name}</h1>
            </div>
            ))}
          </div>
           </div>

           <div className="flex flex-col gap-y-12">
            <div className="space-y-4">
            <h1 className="font-bold text-3xl">You Deserve Peace</h1>
            <h1 className="text-[#8d6969] max-w-sm">We offer compassionate, personalized mental health support.</h1>
            </div>
            <div className="relative">
           <img src={image2} alt="serenity-1"  
            className="object-cover rounded-xl h-96  w-full"
           />
           <h1 className="absolute top-10 right-16 text-lg bg-black/20 text-white inline-flex items-center gap-1 py-1 px-3 rounded-full font-bold">
            <Renew color="white" size={30}/> Renew
            </h1>
           </div>
           </div>
          </div>

          {/* second home section */}  
          <SecondSection/>

          {/* help component */}
          <Help/>

          <div className="mt-20 md:mt-24 gap-12 lg:mt-40 grid grid-cols-1 lg:grid-cols-2 bg-[#f8f3ec] lg:bg-white py-7 px-3 rounded-xl lg:px-14">
           
             <img src={homeImage5} alt="serenity-image5"  
             className="w-full h-96 lg:h-[80%] object-cover rounded-xl"
             />
          
           <div className="space-y-6 lg:space-y-9">
             <h1 className="text-3xl lg:text-5xl">Steps toward mental, emotional peace</h1>
            <h1 className="text-[#8d6969]">Personalized one-on-one sessions to help you manage anxiety, depression, stress, or life transitions in a safe, judgment-free space</h1>
             
             <div className="mt-12 flex flex-col lg:flex-row gap-7 mb-16">
              <div className="space-y-1">
               <h1 className="bg-white w-fit p-2 rounded-full"><Mental color="#e2957f" size={25}/></h1>
               <h1 className="text-2xl">Therapy Session</h1>
               <h1 className="text-[#8d6969]">walkthrough of what to expect in a typical therapy session Minds</h1>
              </div> 

              <div className="space-y-1">
               <h1 className="bg-white w-fit p-2 rounded-full"><RiMentalHealthFill color="#e2957f" size={25}/></h1>
               <h1 className="text-2xl">Observe Real Progress</h1>
               <h1 className="text-[#8d6969]">When you arrive—either in person or virtually—you’ll be  environment.</h1>
              </div> 
              
             </div> 
             <a href="mailto:munashemugondaa@gamil.com" className="default-btn w-fit">Book an appointment</a>
           </div>
      
          </div> 

          {/* What Makes Us Best section */}
          <div className="mt-20 lg:mt-0">
            <div className="flex flex-col items-center gap-4">
              <h1 className="bg-[#f1d1c6] w-fit p-2 px-2 rounded-full font-bold">Why It’s Worth It</h1>
              <h1 className="text-3xl lg:text-5xl">What Makes Us Best</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   mt-16">
              {whatMakesBetter.map((item) => (
                <div key={item.name} className={`bg-[#f3f4f6] flex flex-col items-center md:items-start p-3 py-8 shadow-sm  md:p-6 md:py-12 rounded-xl space-y-4 ${item.id === 2 ? 'lg:mt-16 lg:h-full': ''}`}> 
                  <h1 className="text-[#e1937d]">{item.icon}</h1> 
                  <h1 className="text-xl">{item.name}</h1> 
                  <h1 className="text-[#8d6969] text-center md:text-start">{item.description}</h1>
                </div>
              ))}
            </div>

          </div>

          {/* explore other services section */}
           <OtherServices/>

           {/* inside Serenity Minds */} 
           <div className="mt-20 lg:mt-36">
           <div className="flex flex-col  gap-4">
            <h1 className="bg-[#f1d1c6] w-fit p-2 px-2 rounded-full font-bold">Why It’s Worth It</h1>
            <h1 className="text-3xl lg:text-5xl">Inside Serenity Minds</h1>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
               <img src={inside1} alt="serenity" className="md:col-span-2 rounded-xl h-full object-cover"/>
               <img src={inside2} alt="serenity" className="rounded-xl h-full object-cover"/>
               <img src={inside3} alt="serenity" className="rounded-xl h-full object-cover"/>
               <img src={inside4} alt="serenity" className="rounded-xl h-full object-cover"/>
               <img src={inside5} alt="serenity" className="rounded-xl h-full object-cover"/>
            </div>
           </div>

           {/* reach out section  */} 
           <div className="mt-16 text-center text-white space-y-7 lg:mt-36 bg-gradient-to-r py-7 lg:py-14 px-3 lg:px-14 rounded-xl from-[#f36551] to-[#f59a84]">
            <h1 className="text-2xl md:text-3xl">Serenity Minds</h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl lg:max-w-3xl mx-auto">Your journey to healing begins with one small step — reaching out.</h1>
           <a href="mailto:munashemugondaa@gamil.com" className="default-btn mx-auto w-fit">Book an appointment</a>
           </div>
        </div>
    )
}

export default Home