import React from "react";

const About = () => {
  return (
    <div className="border-y border-gray-200">
      <div className="mx-auto w-[93.5%] sm:w-3xl border-x border-gray-200">
        <h1 className="font-bold text-3xl p-4 border-b border-gray-200">
          About
        </h1>

        <p className="p-4">
          Hello, World! I am Soumyajit Dey — a Full Stack Developer passionate
          about creating high-performance, user-centric software solutions with
          intuitive and engaging designs.
        </p>

        <p className="p-4 text-wrap">
          I specialize in building high-quality web applications using Next.js,
          React, TypeScript, and modern front-end technologies. I love exploring
          new technologies and turning ideas into reality through personal
          projects.
        </p>
      </div>
    </div>
  );
};

export default About;
