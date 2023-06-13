import { MainLayout, ContentLayout, FormField } from "@/components";
import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { useState } from "react";
export const ForumDetail = () => {
  const [route, setRoute] = useState("about");
  return (
    <MainLayout>
      <ContentLayout className="flex-col  pt-[5vh] ">
        <div className="h-[40vh] w-full relative">
          <img
            src="/img/forum.png"
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="flex flex-col gap-2 justify-center h-[130px] absolute bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent w-full px-[15vh]">
            <p className="text-justify text-2xl font-semibold">
              Solemn crowds watch as Lewis, who died earlier this month at the
              age of 80, is borne by caisson over Edmund Pettus Bridge Solemn
            </p>
            <div className="text-[#cacaca] flex items-center text-base font-normal gap-2">
              <MdOutlineDateRange />
              <h1>24 Oct,2021</h1>
              <h1> | </h1>
              <BiUserCircle />
              <h1>Fahmi Sugiarto</h1>
              <h1> | </h1>
              <BsChatLeftText />
              <h1>90</h1>
            </div>
          </div>
        </div>
        <div className="px-[15vh] flex flex-col gap-5 py-[5vh] w-full h-full">
          <div className="flex flex-row gap-5 text-base font-bold">
            <h1
              onClick={() => setRoute("about")}
              className={`cursor-pointer ${
                route == "about"
                  ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
                  : "text-balck"
              } `}
            >
              About
            </h1>
            <h1
              onClick={() => setRoute("forum")}
              className={`cursor-pointer ${
                route == "forum"
                  ? "text-[#1dbc40] underline underline-offset-8 decoration-4"
                  : "text-balck"
              } `}
            >
              Forum
            </h1>
          </div>
          {route == "about" ? (
            <p className="text-justify leading-7 font-medium ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          ) : (
            <div className="w-full gap-5 bg-white rounded-lg h-[75vh] shadow-lg py-[5vh] px-[15vh] flex flex-col justify-between ">
              <div className="w-full h-full flex-grow overflow-x-auto flex flex-col gap-5">
                <div className="max-w-2xl w-full flex flex-row-reverse ml-auto justify-end gap-2 ">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1DBC40] "></div>
                  <div className="bg-[#1DBC40] text-[#F0F2F5] p-3 rounded-l-lg rounded-br-lg flex flex-col gap-2">
                    <h1 className="font-bold text-base">Fahmi Sugiarto</h1>
                    <p className="text-base text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae cupiditate tempore saepe non magnam, minus eos
                      et! Perferendis eos nemo velit explicabo, eius sed fugiat
                      placeat, et deserunt esse odit!
                      <span className="text-[#616161] pt-1 items-end justify-end flex text-sm font-normal gap-1">
                        07:38 20 Oct,2021
                      </span>
                    </p>
                  </div>
                </div>
                <div className="max-w-2xl w-full flex flex-row  gap-2 ">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#F0F2F5] "></div>
                  <div className="bg-[#F0F2F5] text-black p-3 rounded-r-lg rounded-bl-lg flex flex-col gap-2">
                    <h1 className="font-bold text-base">Fahmi Sugiarto</h1>
                    <p className="text-base text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae cupiditate tempore saepe non magnam, minus eos
                      et! Perferendis eos nemo velit explicabo, eius sed fugiat
                      placeat, et deserunt esse odit!
                      <span className="text-[#5c5c5c] pt-1 items-end justify-end flex text-sm font-normal gap-1">
                        07:38 20 Oct,2021
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <FormField
                padding="2"
                placeholder="Write message here..."
                width=""
                type="text"
              >
                <MdSend className="text-[#1dbc40]" />
              </FormField>
            </div>
          )}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
