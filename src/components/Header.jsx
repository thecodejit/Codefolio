import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="w-[93.5%] sm:w-3xl mx-auto flex border border-gray-200">
      <div className="">
        <img
          src={logo}
          alt=""
          className="inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[12px_12px] "
        />
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit, voluptates distinctio temporibus eveniet, earum eum
          libero cumque quo dignissimos, incidunt dolores. Unde animi quos natus
          adipisci repellendus, deserunt consequuntur iste dolor veniam,
          blanditiis commodi. Odit, ad vitae. Natus harum, ea minima similique
          quod, eligendi in sed voluptatibus repellat magnam unde,
          exercitationem at! Animi quam itaque ipsa quasi enim unde at
          recusandae! Inventore voluptates voluptas officiis fugit expedita
          explicabo maxime, dolorem quis at exercitationem. Earum odit molestiae
          accusamus cumque iure. Earum magnam aliquam suscipit voluptatem
          accusantium, corrupti aspernatur dolor repellendus adipisci, accusamus
          voluptatum! Beatae, quam accusantium consequuntur nesciunt libero
          dignissimos consectetur.
        </p>
        <h6 className="p-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non sit
          tenetur nesciunt quam a praesentium sequi dolore tempore blanditiis,
          unde ipsum assumenda exercitationem fugiat illum, expedita beatae
          eaque perspiciatis atque pariatur. Quam, doloremque quasi! Facere non,
          incidunt deserunt ipsum unde quasi velit aspernatur voluptate, neque
          accusantium a numquam, exercitationem nulla modi iure consectetur
          animi. Ipsum eveniet iusto sunt nihil labore esse distinctio autem
          temporibus numquam, dignissimos doloribus consequuntur possimus porro
          neque error culpa, voluptas sint voluptatem molestiae saepe.
          Perspiciatis vero neque, veniam nam aut id, ipsum, quisquam sint quae
          in saepe modi maiores dolor provident voluptatibus eligendi assumenda
          culpa cum!
        </h6>
        <img
          src={logo}
          alt=""
          className="inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[12px_12px] "
        />
      </div>
    </div>
  );
};

export default Header;
