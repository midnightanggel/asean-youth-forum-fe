import { Footer, Navbar } from "@/components";
export const MainLayout = (props) => {
  const { children } = props;
  return (
    <main className="flex flex-col w-full h-full bg-[#F0F2F5] ">
      <Navbar />
      <section className="w-full min-h-screen md:pt-20 pt-14  flex items-center justify-center flex-col">
        {children}
      </section>
      <Footer />
    </main>
  );
};
