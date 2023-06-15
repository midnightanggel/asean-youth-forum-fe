import { Button } from "@/components";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "@/store";
import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user.user.name);
  const image = useSelector((state) => state.user.user.image);

  const dispatch = useDispatch();
  const navActive = ({ isActive }) =>
    isActive
      ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
      : "text-black";
  const handleLogout = () => {
    dispatch(logout());
    setShowMenu(false);
  };

  return (
    <header className="z-10 flex flex-row bg-[#F0F2F5] gap-5 w-full h-[13vh] text-base px-[15vh] items-center drop-shadow-md fixed ">
      <figure className="w-[90px]">
        <img src="/logo/asyf-logo.png" alt="" />
      </figure>
      <nav className="flex flex-row items-center justify-between w-full relative">
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
        <div className="flex flex-row gap-5 ">
          {user != `` ? (
            <figure
              onClick={() => setShowMenu(!showMenu)}
              className={`flex flex-row  gap-3 items-center hover:bg-gray-300 cursor-pointer p-2 rounded-lg ${
                showMenu && "bg-gray-300"
              } `}
            >
              <img
                className="w-[40px] rounded-full aspect-square"
                src={image}
                alt=""
              />
              <figcaption className="capitalize text-base font-medium ">
                {user}
              </figcaption>
            </figure>
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
          {showMenu && (
            <div className=" flex flex-col absolute bg-[#F0F2F5] top-14 right-0 w-auto  py-2 px-3 rounded-lg gap-y-2">
              <div className="flex flex-row items-center gap-3 border-b-2 border-gray-400 h-[60px] ">
                <img
                  className="w-[45px] rounded-full aspect-square"
                  src={image}
                  alt=""
                />
                <h1 className="capitalize text-base font-semibold ">{user}</h1>
              </div>
              <h1
                onClick={handleLogout}
                className="text-base font-medium cursor-pointer text-red-500"
              >
                Logout
              </h1>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
