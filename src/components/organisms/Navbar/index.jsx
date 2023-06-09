import { Button } from "@/components";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navActive = ({ isActive }) =>
    isActive
      ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
      : "text-black";
  return (
    <header className="z-10 flex flex-row bg-[#F0F2F5] gap-5 w-full h-[13vh] text-base px-[15vh] items-center drop-shadow-md fixed ">
      <figure className="w-[90px]">
        <img src="/logo/asyf-logo.png" alt="" />
      </figure>
      <nav className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row gap-5 font-semibold ">
          <NavLink to="/" className={navActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={navActive}>
            About
          </NavLink>
          <NavLink to="/articles" className={navActive}>
            Articles
          </NavLink>
          <NavLink to="/forums" className={navActive}>
            Forums
          </NavLink>
        </div>
        <div className="flex flex-row gap-5">
          <Button
            weight="normal"
            padding="1"
            width="100"
            font="base"
            variant="primary"
            to="/register"
          >
            Register
          </Button>
          <Button
            weight="normal"
            padding="1"
            width="100"
            font="base"
            variant="primary-outline"
            to="/login"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};
