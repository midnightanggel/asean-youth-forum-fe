export const Footer = () => {
  return (
    <footer className="w-full flex flex-col px-[15vh] py-[8vh] bg-[#1E2025] text-white text-base items-center justify-between h-[65vh] ">
      <section className="w-full flex flex-row justify-between gap-x-[100px] ">
        <div className="w-full flex flex-col gap-2  ">
          <h1 className="font-semibold">ASEAN Youth Forum (AYF) Secretariat</h1>
          <h1 className="font-light text-sm leading-8">
            Jalan Kalibata Utara 1 No. 32, Jakarta Selatan Jakarta, Indonesia
            12740
          </h1>
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <h1 className="font-semibold">Follow Our Social Media</h1>
          <figure className="w-full flex items-center gap-2">
            <img className="w-[30px]" src="/icon/instagram-icon.svg" alt="" />
            <figcaption>
              <h1 className="font-light text-sm ">asean.youth.forum</h1>
            </figcaption>
          </figure>
          <figure className="w-full flex items-center gap-2">
            <img className="w-[30px]" src="/icon/twitter-icon.svg" alt="" />
            <figcaption>
              <h1 className="font-light text-sm ">AYF_ASEAN</h1>
            </figcaption>
          </figure>
          <figure className="w-full flex items-center gap-2">
            <img className="w-[30px]" src="/icon/facebook-icon.svg" alt="" />
            <figcaption>
              <h1 className="font-light text-sm ">ASEANYouthForum</h1>
            </figcaption>
          </figure>
        </div>
        <div className="w-auto flex flex-col gap-2 ">
          <h1 className="font-semibold">Supported by</h1>
          <figure className="w-[120px]">
            <img src="/asyf-logo.png" alt="" />
          </figure>
          <figure className="w-[120px]">
            <img src="/skilvul-logo.png" alt="" />
          </figure>
        </div>
      </section>
      <section className="w-full flex items-center justify-center border-t-2 border-white pt-5">
        <h1 className="text-xs">Copyright 2023 by FE 38 & BE 20</h1>
      </section>
    </footer>
  );
};
