import github from "../assets/social-icons/github.jpg";
import twitter from "../assets/social-icons/twitter.jpg";
import dev from "../assets/social-icons/dev.png";
import linkedin from "../assets/social-icons/linkedin.png";

import { MdArrowOutward } from "react-icons/md";

const Social = () => {
  return (
    <div>
      <div className="mx-auto h-auto w-[93.5%] sm:w-3xl border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-5">
          <a
            href="https://www.google.com"
            target="_blank"
            className="flex justify-between items-center border-y sm:border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-16 w-16 p-1 rounded-2xl"
              />
              <h1 className="">
                <span className="font-bold">LinkedIn</span> <br />
                soumyajit
              </h1>
            </div>
            <MdArrowOutward className="mr-2" />
          </a>

          <a
            href="https://github.com/thecodejit"
            target="_blank"
            className="flex justify-between items-center border-y sm:border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={github}
                alt="Github"
                className="h-16 w-16 p-1 rounded-2xl"
              />
              <h1>
                <span className="font-bold">Github</span>
                <br />
                thecodejit
              </h1>
            </div>
            <MdArrowOutward className="mr-2" />
          </a>

          <a
            href="https://github.com/thecodejit"
            target="_blank"
            className="flex justify-between items-center border-y sm:border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={twitter}
                alt="X (Previously twitter)"
                className="h-16 w-16 p-1 rounded-2xl"
              />
              <h1>
                <span className="font-bold">X</span>
                <br />
                thecodejit
              </h1>
            </div>
            <MdArrowOutward className="mr-2" />
          </a>

          <a
            href="https://github.com/thecodejit"
            target="_blank"
            className="flex justify-between items-center border-y sm:border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={dev}
                alt="dev.to"
                className="h-16 w-16 p-1 rounded-2xl"
              />
              <h1>
                <span className="font-bold">Dev.to</span>
                <br />
                thecodejit
              </h1>
            </div>
            <MdArrowOutward className="mr-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
