import { otherServices } from "../../data/home" 
import { GoArrowUpRight as Arrow } from "react-icons/go";


const OtherServices = () => {


    return (
        <div className="mt-20  lg:mt-44 bg-[#f8f3ec] px-3 py-7 rounded-xl lg:py-16 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-y-5 items-center justify-between">
        <h1 className="text-2xl lg:text-4xl lg:max-w-2xl text-center lg:text-start">Explore our core services and discover the right support.</h1>
        <a
        href="mailto:munashemugondaa@gamil.com"
        className="bg-white p-3  rounded-full transition delay-300 duration-500 hover:scale-110 hover:rotate-45 hover:bg-[#e1937d]"
        >
        <Arrow size={30} />
        </a>
        </div> 

         {/* services types section */} 
         <div className="mt-12 lg:mt-24"> 
            {otherServices.map((item) => {
                const services = item.services 
                return (
                <div className="flex flex-row lg:max-w-5xl mx-auto flex-wrap gap-5 justify-center">
                    {services?.map(item => (
                    <h1 className="border p-2 rounded-full lg:text-lg text-[#8d6969]">{item.name}</h1>
                    ))}
                </div>
                )
            })}
         </div>

         <div className="mt-16 lg:mt-28">
           {otherServices.map((item) => {
          const data = item.data;
          return (
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 items-center justify-items-center">
        {data?.map((item) => (
          <div key={item.name} className="space-y-2 text-center">
            <h1 className="text-3xl lg:text-4xl">{item.name}</h1>
            <h1 className="md:max-w-sm">{item.description}</h1>
          </div>
        ))}
      </div>
    );
  })}
</div>
</div>
    )
}

export default OtherServices 