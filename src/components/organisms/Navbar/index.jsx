import { Button } from "@/components";
import { logout } from "@/store";
import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { name, image } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navActive = ({ isActive }) =>
    isActive
      ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
      : "text-black";
  const mobileNavAcrtive = ({ isActive }) =>
    isActive
      ? "text-[#1dbc40] underline underline-offset-8 decoration-4 text-base font-medium w-full  hover:bg-gray-300 px-3 py-1 mt-1"
      : "text-black text-base font-medium w-full  hover:bg-gray-300 px-3 py-1 mt-1";
  const handleLogout = () => {
    dispatch(logout());
    setShowMenu(false);
  };

  return (
    <header className="z-10 flex flex-row md:text-base text-sm bg-[#F0F2F5] gap-5 w-full md:h-20 h-14  md:px-[15vh] px-9 items-center drop-shadow-md fixed ">
      <figure className="md:w-[90px] w-[70px]">
        <img src="/logo/asyf-logo.png" alt="" />
      </figure>
      <nav className="flex flex-row items-center md:justify-between justify-end w-full relative">
        <div className="md:flex hidden flex-row gap-5 font-semibold ">
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
        <div className="md:flex hidden flex-row gap-5 ">
          {name != `` ? (
            <figure
              onClick={() => setShowMenu(!showMenu)}
              className={`flex flex-row  gap-3 items-center hover:bg-gray-300 cursor-pointer p-2 rounded-lg ${
                showMenu && "bg-gray-300"
              } `}
            >
              <img
                className="w-[40px] rounded-full aspect-square object-cover"
                src={image}
                alt=""
              />
              <figcaption className="capitalize text-base font-medium ">
                {name}
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
        </div>
        {showMenu ? (
          <GrClose
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-[27px]"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-[27px]"
          />
        )}

        {showMenu && (
          <div className="text-xs flex flex-col absolute bg-[#F0F2F5] md:top-14 top-8 right-0 w-auto  py-2 rounded-lg ">
            {name != "" ? (
              <Fragment>
                <div className="flex flex-row items-center gap-3 border-b-2 border-gray-400 h-[60px] px-3 ">
                  <img
                    className="w-[45px] rounded-full aspect-square object-cover"
                    src={image}
                    alt=""
                  />
                  <h1 className="capitalize text-base font-semibold ">
                    {name}
                  </h1>
                </div>
                <NavLink to="/" className={mobileNavAcrtive}>
                  Home
                </NavLink>
                <NavLink to="/about" className={mobileNavAcrtive}>
                  About
                </NavLink>
                <NavLink to="/articles" className={mobileNavAcrtive}>
                  Articles
                </NavLink>
                <NavLink to="/forums" className={mobileNavAcrtive}>
                  Forums
                </NavLink>
                <NavLink to="/profile" className={mobileNavAcrtive}>
                  Profile
                </NavLink>
                <h1
                  onClick={handleLogout}
                  className="text-base font-medium cursor-pointer text-red-500 w-full hover:bg-gray-300 px-3 py-1 "
                >
                  Logout
                </h1>
              </Fragment>
            ) : (
              <Fragment className="">
                <NavLink to="/" className={mobileNavAcrtive}>
                  Home
                </NavLink>
                <NavLink to="/about" className={mobileNavAcrtive}>
                  About
                </NavLink>
                <NavLink to="/articles" className={mobileNavAcrtive}>
                  Articles
                </NavLink>
                <NavLink to="/forums" className={mobileNavAcrtive}>
                  Forums
                </NavLink>

                <Link
                  to="/login"
                  className="text-base font-medium w-full  hover:bg-gray-300 px-3 py-1 mt-1"
                >
                  Login
                </Link>
              </Fragment>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
