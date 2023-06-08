import { Navbar, Footer } from "@/components";
export const Main = (props) => {
  const { children } = props;
  return (
    <main className="flex flex-col w-full h-full bg-[#F0F2F5] ">
      <Navbar />
      <section className="w-full min-h-screen pt-[8vh]  flex items-center justify-center flex-col">
        {children}
      </section>
      <Footer />
    </main>
  );
};
