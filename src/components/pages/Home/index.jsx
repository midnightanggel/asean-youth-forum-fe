import { MainTemplate, Button } from "@/components";

export const Home = () => {
  return (
    <MainTemplate className="items-center justify-center  flex-col ">
      <section className="flex flex-row w-full min-h-screen bg-[#09644E] text-white justify-between items-center px-[15vh] mt-[10vh] ">
        <div className="w-2/5 flex flex-col gap-5">
          <h1 className="font-bold text-4xl">
            Uniting ASEAN's Youth for a Better Tomorrow
          </h1>
          <p className="font-light text-justify">
            The ASEAN Youth Forum (AYF) is a platform for young people across
            the ASEAN region to connect, engage, and collaborate towards a
            brighter future. Our mission is to empower the youth of ASEAN to
            take an active role in shaping their communities and countries, and
            to work together towards sustainable development, peace, and
            prosperity for all.
          </p>
          <Button
            weight="light"
            padding="2"
            width="200"
            font="base"
            variant="primary"
          >
            Let's Contribute
          </Button>
        </div>
        <div className="w-2/5  flex items-end justify-end ">
          <figcaption className="w-[350px] ">
            <img
              className="rounded-lg aspect-square object-cover"
              src="/img/home.png"
              alt=""
            />
          </figcaption>
        </div>
      </section>
    </MainTemplate>
  );
};
