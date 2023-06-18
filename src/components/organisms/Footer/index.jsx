export const Footer = () => {
  return (
    <footer className="w-full gap-5 flex flex-col md:px-[15vh] px-9 md:py-[8vh] py-8 bg-[#1E2025] text-white md:text-base text-sm items-center justify-between h-full md:h-[65vh] ">
      <section className="w-full flex flex-col h-full md:flex-row justify-between md:gap-x-[100px] gap-x-0 md:gap-y-0 gap-y-6  ">
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
          <div className="flex md:flex-col flex-row gap-2">
            <figure className="md:w-[120px] w-[100px]">
              <img src="/logo/asyf-logo.png" alt="" />
            </figure>
            <figure className="md:w-[120px] w-[100px]">
              <img src="/logo/skilvul-logo.png" alt="" />
            </figure>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center border-t-2 border-white md:pt-5 pt-3">
        <h1 className="md:text-xs text-[11px]">
          Copyright 2023 by FE 38 & BE 20
        </h1>
      </section>
    </footer>
  );
};
