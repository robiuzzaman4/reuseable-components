import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navlinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Dashboard", url: "/dashboard" },
  ];
  return (
    <div className="bg-white shadow-sm">
      <div className="w-full max-w-screen-lg mx-auto p-4 flex items-center gap-12">
        <Link to={"/"} className="text-xl font-bold">
          Navbar
        </Link>
        <div className="flex items-center gap-4">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              to={link.url}
              className={`Ftext-sm text-slate-600 font-medium`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
