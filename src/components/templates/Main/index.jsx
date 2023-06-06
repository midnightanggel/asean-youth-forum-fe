import { Navbar, Footer } from "@/components";
export const Main = (props) => {
  const { className, children } = props;
  return (
    <main className="flex flex-col w-full h-full bg-[#F0F2F5]">
      <Navbar />
      <section className={`${className} w-full min-h-screen pt-[8vh] flex `}>
        {children}
      </section>
      <Footer />
    </main>
  );
};
