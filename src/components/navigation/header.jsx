import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Button from "../ui/button";
import Search from "../ui/search";

const navLinks = [
  {
    id: 1,
    label: "Trending",
  },
  {
    id: 2,
    label: "Collaborate",
  },
  {
    id: 3,
    label: "Buy",
  },
  {
    id: 4,
    label: "List",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-900 py-5 px-20 text-white">
      {/* logo  */}
      <div className="flex items-center gap-4">
        <Image src={logo} alt="logo" height={30} width={25} />
        <h3 className="text-lg">Bandiya</h3>
      </div>

      {/* navLinks  */}
      <div className="flex gap-14">
        <div className="flex gap-14">
          {navLinks.map((item) => (
            <li key={item.id} className="list-none font-light">
              {item.label.toUpperCase()}
            </li>
          ))}
        </div>

        <Button text="Upgrade" customClass="bg-yellow-400" />
      </div>

      {/* searchbar  */}
      <Search />
    </div>
  );
};

export default Header;
