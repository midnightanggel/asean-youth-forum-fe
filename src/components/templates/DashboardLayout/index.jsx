import { useState } from "react";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DashboardLayout = (props) => {
  const [open, setOpen] = useState(true);
  const { navigation, children } = props;
  return (
    <div className="w-full h-screen bg-[#F0F2F5] flex flex-row">
      <div
        className={`h-full bg-[#09644E] text-white px-7 py-10 relative duration-300 justify-between flex flex-col gap-16 text-lg font-medium ${
          open ? "w-80" : "w-12"
        }`}
      >
        <TbCircleArrowRightFilled
          onClick={() => setOpen(!open)}
          className={`text-4xl  absolute top-9 -right-3 bg-[#09644E] rounded-full  ${
            open ? "rotate-180" : "rotate-0"
          }
        `}
        />

        <img className="w-36 " src="/logo/asyf-logo.png" alt="" />
        <div className="w-full h-full  flex flex-col gap-y-4">
          {navigation &&
            navigation.map((el, i) => (
              <Link
                to={el.to}
                key={i}
                className="inline-flex items-center gap-2 w-full "
              >
                <div
                  className={` ${
                    !open ? "absolute left-3 duration-75 text-3xl" : "text-2xl"
                  }`}
                >
                  {el.icon}
                </div>
                <h1 className={`capitalize ${!open && "scale-0"}`}>
                  {el.text}
                </h1>
              </Link>
            ))}
        </div>
        <Link to="/" className="inline-flex items-center gap-2 w-full ">
          <div
            className={` ${
              !open ? "absolute left-3 duration-75 text-3xl" : "text-2xl"
            }`}
          >
            <FaHome />
          </div>
          <h1 className={`${!open && "scale-0"}`}>Home</h1>
        </Link>
      </div>
      <section className="w-full h-full p-5">
        <div className="bg-white w-full h-full rounded-2xl drop-shadow-xl px-7 py-5">
          {children}
        </div>
      </section>
    </div>
  );
};
