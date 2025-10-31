import logo from "../assets/images/logo.svg";
import profile from "../assets/images/profile.jpg";
import flag from "../assets/images/flag.jpg";
import badge from "../assets/images/verified.png";

import { IoCodeSlashOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { BsGenderMale } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-[93.5%] sm:w-3xl mx-auto border border-gray-200">
      <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[12px_12px]">
        <img src={logo} alt="" className="size-75 sm:size-95 mx-auto" />
      </div>

      <div className="flex items-center border-y border-gray-200">
        <div className="border-r border-gray-200 static">
          <img
            src={flag}
            alt="I'm From India"
            className="h-9 w-12 z-20 absolute"
          />
          <img
            src={profile}
            alt=""
            className="w-35 sm:size-45 p-1 rounded-full z-10 border border-gray-300"
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl text-zinc-950 ml-2 sm:ml-5 mt-4 font-medium">
            Soumyajit Dey{" "}
          </h1>
          <img src={badge} alt="" className=" mx-1.5 mt-5 sm:mt-6 h-4 w-4" />
        </div>
      </div>

      <div>
        <ul>
          <li className="flex m-2 sm:m-3 items-center">
            <IoCodeSlashOutline className="mx-2 sm:mx-3 my-1 size-6" />
            <span className="font-medium">Full Stack Developer</span>
          </li>
          <li className="flex m-2 sm:m-3 items-center">
            <IoLocationOutline className="mx-2 sm:mx-3 my-1 size-6" />

            <span className="font-medium">
              Chinsurah-Hooghly, West Bengal, India
            </span>
          </li>
          <li className="flex m-2 sm:m-3 items-center">
            <IoMailOutline className="mx-2 sm:mx-3 mt-1 size-6" />
            <a href="mailto:soumyajitdey19@gmail.com" className="font-medium">
              soumyajitdey19@gmail.com
            </a>
          </li>
          <li className="flex m-2 sm:m-3 items-center">
            <CiGlobe className="mx-2 sm:mx-3 my-1 size-6" />
            <a
              href="http://soumyajit.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              soumyajit.dev
            </a>
          </li>
          <li className="flex m-2 sm:m-3 items-center">
            <BsGenderMale className="mx-2 sm:mx-3 my-1 size-6" />
            <span className="font-medium">he/him</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
