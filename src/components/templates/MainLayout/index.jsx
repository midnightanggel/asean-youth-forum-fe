import { Footer, Navbar } from "@/components";
export const MainLayout = (props) => {
  const { children, className } = props;
  return (
    <main className="flex flex-col w-full h-full bg-[#F0F2F5] ">
      <Navbar />
      <section
        className={`w-full min-h-screen flex items-center justify-center flex-col ${className} `}
      >
        {children}
      </section>
      <Footer />
    </main>
  );
};
