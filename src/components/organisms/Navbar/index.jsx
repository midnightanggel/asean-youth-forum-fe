import { Button } from "@/components";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="flex flex-row bg-[#F0F2F5] gap-5 w-full h-[13vh] text-base px-[15vh] items-center drop-shadow-md fixed ">
      <figure className="w-[90px]">
        <img src="/logo/asyf-logo.png" alt="" />
      </figure>
      <nav className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row gap-5 font-semibold ">
          <NavLink exact to="/" className="cursor-pointer ">
            Home
          </NavLink>
          <NavLink to="/about" className="cursor-pointer ">
            About
          </NavLink>
          <NavLink to="/articles" className="cursor-pointer">
            Articles
          </NavLink>
          <NavLink to="/forums" className="cursor-pointer">
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
