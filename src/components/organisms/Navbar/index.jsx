import { Button } from "@/components";

export const Navbar = () => {
  return (
    <header className="flex flex-row bg-[#F0F2F5] gap-5 w-full h-[13vh] text-base px-[15vh] items-center drop-shadow-md fixed ">
      <figure className="w-[90px]">
        <img src="/logo/asyf-logo.png" alt="" />
      </figure>
      <nav className="flex flex-row items-center justify-between w-full ">
        <div className="flex flex-row gap-5 font-semibold ">
          <h1 className="cursor-pointer text-[#1DBC40] underline underline-offset-8 decoration-4  ">
            Home
          </h1>
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Articles</h1>
          <h1 className="cursor-pointer">Forums</h1>
        </div>
        <div className="flex flex-row gap-5">
          <Button
            weight="normal"
            padding="1"
            width="100"
            font="base"
            variant="primary"
          >
            Register
          </Button>
          <Button
            weight="normal"
            padding="1"
            width="100"
            font="base"
            variant="primary-outline"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};
