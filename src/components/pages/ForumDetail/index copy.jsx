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
            <div className="w-full gap-5 bg-white rounded-lg h-[70vh] shadow-lg py-[5vh] px-[15vh] flex flex-col justify-between ">
              <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                <div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
                  <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    <div>
                      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod.
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    <div>
                      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs">
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    <div>
                      <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                        <p class="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                  </div>
                  <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                    <div>
                      <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                        <p class="text-sm">Lorem ipsum dolor sit.</p>
                      </div>
                      <span class="text-xs text-gray-500 leading-none">
                        2 min ago
                      </span>
                    </div>
                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
              {/* <FormField
                padding="2"
                placeholder="Write message here..."
                width=""
                type="text"
              >
                <MdSend className="text-[#1dbc40]" />
              </FormField> */}
            </div>
          )}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
