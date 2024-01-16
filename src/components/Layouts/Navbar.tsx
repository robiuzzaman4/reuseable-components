import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Navbar: React.FC = () => {
  const navlinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Modal", url: "/modal" },
    { label: "Form", url: "/form" },
    { label: "Dashboard", url: "/dashboard" },
  ];
  return (
    <div className="bg-white shadow-sm">
      <Container>
        <div className="w-full flex items-center gap-12 py-4">
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
      </Container>
    </div>
  );
};

export default Navbar;
