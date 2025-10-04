import { Link } from "react-router-dom";
import { IoLeafSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { VscWorkspaceTrusted as Trust } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

const services = [
  {
    icon: <IoLeafSharp size={35} />,
    name: "Individual Therapy",
    description:
      "Personalized one-on-one sessions to help you manage anxiety, depression, stress or life transitions in a safe, judgement-free space",
  },
  {
    icon: <FaStarOfLife size={35} />,
    name: "Couples Counseling",
    description:
      "Strengthen communication, rebuild trust, and navigate relationship challenges with the help of an experienced counselor",
  },
  {
    icon: <RiPsychotherapyFill size={35} />,
    name: "Family Therapy",
    description:
      "Support for families navigating conflict, change, or emotional struggle - creating healthier, more connected relationships",
  },
  {
    icon: <Trust size={35} />,
    name: "Youth Counseling",
    description:
      "Age-appropriate support for children and teens dealing with school stress, self-esteem issues, or emotional concerns",
  },
];

const Help = () => {

const pathName = useLocation()

  return (
    <div className="mt-20 md:mt-24 lg:mt-40">
      <div className={`flex flex-col items-center gap-y-7 lg:flex-row lg:justify-between ${pathName.pathname === '/services' ?  'hidden' : ''}`}>
        <div className="space-y-2 lg:space-y-3">
          <h1 className="text-3xl font-semibold text-center lg:text-start lg:text-5xl">
            How we help you heal
          </h1>
          <h1 className="text-[#8d6969] text-center lg:text-start lg:text-lg">
            We offer compassionate and personalized mental health support to guide life’s challenges.
          </h1>
        </div>

        <Link to="/services" className="default-btn w-fit">
          View All Services
        </Link>
      </div>

      <div className="mt-16 space-y-8">
        {services.map((item) => (
          <div
            key={item.name}
            className="bg-gray-100 rounded-xl py-7 px-5 lg:px-8"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-[#e1937d]">{item.icon}</h1>
                <h1 className="text-2xl font-bold lg:text-3xl">{item.name}</h1>
              </div>

              <h1 className="text-[#8d6969] lg:max-w-xl">{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
