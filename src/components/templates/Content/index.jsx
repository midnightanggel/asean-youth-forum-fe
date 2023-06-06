export const Content = (props) => {
  const { children, className } = props;
  return (
    <section
      className={`${className} flex w-full min-h-screen  px-[15vh] py-[5vh]`}
    >
      {children}
    </section>
  );
};
