import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const Accordion = ({ title, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex border-y border-gray-200">
        <img
          src={image}
          alt=""
          className="h-15 w-15 border-x border-gray-200 "
        />

        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center w-full pl-2"
        >
          {title}
        </button>

        <a
          href="http://github.com/thecodejit"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 my-5"
        >
          <IoIosLink />
        </a>
        {open ? (
          <MdOutlineKeyboardDoubleArrowUp className="mx-2 my-4 size-6" />
        ) : (
          <MdOutlineKeyboardDoubleArrowDown className="mx-2 my-4 size-6" />
        )}
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-800 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden mx-8 my-4">
          <span className="font-semibold">Features</span>
          <ul className="list-inside list-disc">
            <li className="text-gray-300">
              <span className="text-black">This is some description.</span>
            </li>
            <li className="text-gray-300">
              <span className="text-black">This is React.</span>
            </li>
            <li className="text-gray-300">
              <span className="text-black">Modern & Sleek.</span>
            </li>
            <li className="text-gray-300">
              <span className="text-black">Niche Design.</span>
            </li>
            <li className="text-gray-300">
              <span className="text-black">Fully Responsive.</span>
            </li>
          </ul>

          <a
            href="http://github.com/thecodejit/codefolio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Source Code
          </a>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 my-4 ">
            <div className="border rounded-lg w-auto bg-gray-100 text-gray-400 text-sm flex justify-center items-center">
              <span>Javascript</span>
            </div>
            <div className="border rounded-lg w-auto bg-gray-100 text-gray-400 text-sm flex justify-center">
              <span>React</span>
            </div>
            <div className="border rounded-lg w-auto bg-gray-100 text-gray-400 text-sm flex justify-center">
              <span>Tailwind</span>
            </div>
            <div className="border rounded-lg w-auto bg-gray-100 text-gray-400 text-sm flex justify-center">
              <span>Motion</span>
            </div>
            <div className="border rounded-lg w-auto bg-gray-100 text-gray-400 text-sm flex justify-center">
              <span>NodeJS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
