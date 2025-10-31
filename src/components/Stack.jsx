import clang from "../assets/dev-icons/c++.svg";
import docker from "../assets/dev-icons/docker.svg";
import git from "../assets/dev-icons/git.svg";
import jest from "../assets/dev-icons/jest.svg";
import java from "../assets/dev-icons/java.svg";
import javascript from "../assets/dev-icons/javascript.svg";
import json from "../assets/dev-icons/json.svg";
import mysql from "../assets/dev-icons/mysql.svg";
import mongodb from "../assets/dev-icons/mongodb.svg";
import nextjs from "../assets/dev-icons/nextjs.svg";
import nodejs from "../assets/dev-icons/nodejs.svg";
import npm from "../assets/dev-icons/npm.svg";
import postgresql from "../assets/dev-icons/postgresql.svg";
import reactjs from "../assets/dev-icons/react.svg";
import redux from "../assets/dev-icons/redux.svg";
import router from "../assets/dev-icons/react-router.svg";
import tailwind from "../assets/dev-icons/tailwind.svg";
import typescript from "../assets/dev-icons/typescript.svg";
import python from "../assets/dev-icons/python.svg";

const Stack = () => {
  return (
    <div>
      <div className="mx-auto w-[93.5%] sm:w-3xl border border-gray-200">
        <h1 className="font-bold text-3xl p-4 border-b border-gray-200">
          Stack
        </h1>

        <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 sm:gap-4 m-2">
          <img src={clang} alt="" className="size-15" />

          <img src={javascript} alt="" className="size-15" />

          <img src={typescript} alt="" className="size-15" />

          <img src={python} alt="" className="size-15" />

          <img src={java} alt="" className="size-15" />

          <img src={nodejs} alt="" className="size-15" />

          <img src={reactjs} alt="" className="size-15" />

          <img src={redux} alt="" className="size-15" />

          <img src={nextjs} alt="" className="size-15" />

          <img src={npm} alt="" className="size-15" />

          <img src={router} alt="" className="size-15" />

          <img src={tailwind} alt="" className="size-15" />

          <img src={jest} alt="" className="size-15" />

          <img src={json} alt="" className="size-15" />

          <img src={git} alt="" className="size-15" />

          <img src={docker} alt="" className="size-15" />

          <img src={mysql} alt="" className="size-15" />

          <img src={postgresql} alt="" className="size-15" />

          <img src={mongodb} alt="" className="size-15" />
        </div>
      </div>
    </div>
  );
};

export default Stack;
