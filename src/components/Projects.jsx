import Accordion from "./Accordion";

import github from "../assets/social-icons/github.jpg";
import logo from "../assets/images/logo.svg";

const Projects = () => {
  return (
    <div className="border-y border-gray-200">
      <div className="mx-auto w-[93.5%] sm:w-3xl border-x border-gray-200">
        <div className="font-bold text-3xl p-4">Projects</div>
        <Accordion image={logo} title="Portfolio" />
        <Accordion image={github} title="Ecommerce" />
        <Accordion image={github} title="Browser Extension" />
      </div>
    </div>
  );
};

export default Projects;
