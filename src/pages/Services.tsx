import Help from "../components/home/Help"
import OtherServices from "../components/home/OtherServices"
import { Link } from "react-router-dom"

const Services = () => {

    return (
        <div className="px-3 mt-12 lg:px-16">
        <div className="bg-[#f8f3ec] rounded-xl py-7 space-y-3 text-center lg:py-14 px-3 lg:px-14">
         <h1 className="bg-[#efcdc0] mx-auto w-fit p-1 font-bold px-4 rounded-full">Services</h1> 
         <h1 className="text-3xl lg:text-5xl font-bold">Our Counseling Services</h1> 
         <h1 className="text-[#937061] lg:text-lg">Explore the support we offer.</h1>
        </div>

         {/* services section */} 
         <Help/> 

         {/* other services section */} 
         <OtherServices/>


          {/* reach out section  */} 
        <div className="mt-16 text-center text-white space-y-7 lg:mt-36 bg-gradient-to-r py-7 lg:py-14 px-3 lg:px-14 rounded-xl from-[#f36551] to-[#f59a84]">
         <h1 className="text-2xl md:text-3xl">Serenity Minds</h1>
         <h1 className="text-2xl md:text-3xl lg:text-5xl lg:max-w-3xl mx-auto">Your journey to healing begins with one small step — reaching out.</h1>
          <Link to="/appointment" className="default-btn mx-auto w-fit">Book an appointment</Link>
          </div>
        </div>
    )
}

export default Services