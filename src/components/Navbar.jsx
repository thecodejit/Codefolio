import { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiMenu5Fill } from "react-icons/ri";
import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const toggler = () => {
    setOpen(!Open);
  };

  return (
    <>
      <div className="border border-gray-200 fixed z-50 w-full">
        <div className="w-[94%] sm:w-3xl mx-auto flex justify-between items-center border-x border-gray-200 bg-white">
          <div className="">
            <img src={logo} alt="Logo" className="m-3 w-9" />
          </div>

          <div className="flex gap-3 items-center">
            <ul className="hidden sm:flex gap-3 items-center">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Resources
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-gray-200">
                <a
                  href="https://github.com/thecodejit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="m-1.5 size-5" />
                </a>
              </button>

              <button className="rounded-full border border-gray-200 ">
                <MdOutlineLightMode className="m-1.5 size-5" />
              </button>

              <button
                className="rounded-full cursor-pointer border border-gray-200 mr-1"
                onClick={toggler}
              >
                {Open ? (
                  <RxCross1 className="m-1.5 size-5 visible sm:hidden" />
                ) : (
                  <RiMenu5Fill className="m-1.5 size-5 visible sm:hidden" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Mobilemenu visible={Open} />
    </>
  );
};

export default Navbar;
