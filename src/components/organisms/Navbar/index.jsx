import { Button } from "@/components";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "@/store";

export const Navbar = () => {
  const user = useSelector((state) => state.user.user.name);

  const dispatch = useDispatch();
  const navActive = ({ isActive }) =>
    isActive
      ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
      : "text-black";
  const handleLogout = () => {
    dispatch(logout());
  };

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
          {user != `` ? (
            <Button
              weight="normal"
              padding="1"
              width="100"
              font="base"
              variant="primary"
              onClick={handleLogout}
            >
              logout
            </Button>
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};
