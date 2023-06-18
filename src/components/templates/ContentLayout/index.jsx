import clsx from "clsx";
export const ContentLayout = (props) => {
  const { children, className, padding } = props;

  const contentPadding = clsx(
    `${className} flex w-full min-h-screen md:text-base text-sm `,
    {
      "md:px-[15vh] px-9  py-[8vh] ": padding === true,
    }
  );

  return <section className={contentPadding}>{children}</section>;
};
