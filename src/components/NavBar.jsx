import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const links = [
    {
      name: "register",
      href: "/register",
    },
    {
      name: "login",
      href: "/login",
    },
  ];

  return (
    <nav>
      {links.map((link) => (
        <Link to={link.href}>{link.name}</Link>
      ))}
    </nav>
  );
};
