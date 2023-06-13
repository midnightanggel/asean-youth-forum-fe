import clsx from "clsx";
export const ContentLayout = (props) => {
  const { children, className, padding } = props;

  const contentPadding = clsx(`${className} flex w-full min-h-screen `, {
    "px-[15vh] py-[8vh] ": padding === true,
  });

  return <section className={contentPadding}>{children}</section>;
};
