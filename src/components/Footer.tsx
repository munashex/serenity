import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 bg-[#f8f3ec] text-[#5c453a]">
      <div className="px-6 lg:px-20 py-14 flex flex-col lg:flex-row justify-between gap-12 border-b border-[#e6ddd3]">
        {/* Brand Section */}
        <div className="max-w-md space-y-4">
          <img
            src="/Log.svg"
            alt="Serenity Logo"
            className="w-48 object-contain"
          />
          <p className="text-[#937061] leading-relaxed lg:text-lg">
            Your space to heal, grow, and feel understood. We offer compassionate, 
            personalized mental health support to help you navigate life’s challenges.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">Quick Links</h2>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="text-[#5c453a] hover:text-[#8d6959] transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-[#8d6959] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-black">Get in Touch</h2>
          <ul className="space-y-3">
            <li>
              <span className="font-medium text-black">Email</span>
              <br />
              <a
                href="mailto:munashemugondaa@gmail.com"
                className="text-[#937061] hover:text-[#7a5a4a] transition-colors"
              >
                munashemugondaa@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium text-black">Phone</span>
              <br />
              <a
                href="tel:+27689526513"
                className="text-[#937061] hover:text-[#7a5a4a] transition-colors"
              >
                +27 689 52 6513
              </a>
            </li>
            <li>
              <span className="font-medium text-black">Office Hours</span>
              <br />
              <p className="text-[#937061]">Mon–Sat, 9 AM – 7 PM</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-6 text-sm text-[#7a5a4a]">
        <p>© {new Date().getFullYear()} Serenity. All rights reserved.</p>
        <div className="flex items-center gap-5 mt-3 lg:mt-0">
          <a
            href="https://www.linkedin.com/in/munashe-mugonda-99676a210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8d6959] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/munashe-mugonda-99676a210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8d6959] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/munashe-mugonda-99676a210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8d6959] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
