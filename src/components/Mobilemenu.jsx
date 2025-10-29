import React from "react";

const Mobilemenu = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className="fixed right-3 border border-gray-300 h-vh sm:hidden w-[94%] top-12 z-20 bg-white">
          <div className="">
            <ul className="flex flex-col gap-5 m-5 justify-around items-center font-bold">
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
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Mobilemenu;
