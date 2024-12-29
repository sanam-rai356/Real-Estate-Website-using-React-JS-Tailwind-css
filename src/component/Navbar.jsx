import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="bg-[#F3F3F3] shadow-md main_padding py-5 w-full fixed top-0 left-0 z-50">
        <div className="w-full flex justify-between items-center">
          <img src={Logo} className="w-40" alt="logo" />

          <ul className="hidden lg:flex gap-6">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className="navbarLink"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="navbarLink"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="properties"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="navbarLink"
              >
                PROPERTIES
              </Link>
            </li>
            <li>
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="navbarLink"
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="navbarLink"
              >
                TESTIMONIAL
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
                className="navbarLink"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          {/* first ul */}

          {nav ? (
            <ul className="flex flex-col gap-6 bg-[#F3F3F3] main shadow-md absolute right-0 top-0 w-[350px] h-[100vh] pl-5 pt-20 ">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  className="navbarLink"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="navbarLink"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="properties"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="navbarLink"
                >
                  PROPERTIES
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="navbarLink"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="navbarLink"
                >
                  TESTIMONIAL
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="navbarLink"
                >
                  CONTACT
                </Link>
              </li>

              <ImCross
                onClick={() => setNav(false)}
                className="absolute top-10 right-7 size-8 cursor-pointer"
              />
            </ul>
          ) : (
            ""
          )}
          {/* second ul */}

          <FaBars
            onClick={() => setNav(true)}
            className="lg:hidden block size-8 cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
