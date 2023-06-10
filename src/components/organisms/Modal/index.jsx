import { Fragment } from "react";
export const Modal = (props) => {
  return (
    <Fragment>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden flex justify-center items-center fixed z-50 p-4 w-full md:inset-0 h-modal md:h-full  backdrop-opacity-10 backdrop-invert bg-black/60 "
      >
        <div className="relative w-full h-[95vh] flex justify-center items-center">
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};
