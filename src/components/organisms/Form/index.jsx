export const Form = (props) => {
  const { children, className, onSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className={`${className} h-full w-[350px] flex items-center justify-center flex-col`}
    >
      {children}
    </form>
  );
};
