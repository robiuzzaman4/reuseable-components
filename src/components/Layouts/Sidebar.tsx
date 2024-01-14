import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navlinks = [
    { label: "Overview", url: "/dashboard" },
    { label: "Content", url: "/dashboard/content" },
    { label: "Home", url: "/" },
  ];
  return (
    <div className="w-full max-w-96 bg-slate-100 border-r border-slate-300 min-h-screen p-4 flex flex-col gap-12">
      <h1 className="text-3xl text-purple-500 font-bold">Sidebar</h1>
      <div className="flex flex-col items-start gap-4">
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
  );
};

export default Sidebar;
