export const Form = (props) => {
  const { children, className, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className={`${className} h-full flex  flex-col`}>
      {children}
    </form>
  );
};
