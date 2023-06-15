import { MainLayout, ContentLayout, FormField } from "@/components";
import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { get } from "@/services";
import { formatDate } from "@/utils";
import { io } from "socket.io-client";

export const ForumDetail = () => {
  const [route, setRoute] = useState("about");
  const [message, setMessage] = useState("");
  const [forum, setForum] = useState({});
  const [socket, setSocket] = useState(null);
  const user = useSelector((state) => state.user.user.name);
  const { id } = useParams();
  const getForum = async () => {
    const res = await get(`/forums/${id}`);
    setForum(res);
  };

  const submitMessage = async () => {
    const raw = JSON.stringify({
      message,
    });
    socket.emit("sendToForum", raw);
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("broadcastToFrontend", (msgRaw) => {
        const msg = JSON.parse(msgRaw);
        console.log(msg);
      });
    }
  }, [socket]);

  useEffect(() => {
    getForum();
    const socketInstance = io(import.meta.env.VITE_API_URL);
    setSocket(socketInstance);
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <ContentLayout className="flex-col  pt-[5vh] ">
        <div className="h-[40vh] w-full relative">
          {forum.status == "success" && (
            <img
              src={forum.data.image.replace("/upload/", "/upload/q_50/")}
              className="h-full w-full object-cover"
              alt=""
            />
          )}

          <div className="flex flex-col gap-2 justify-center h-[130px] absolute bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent w-full px-[15vh]">
            <p className="text-justify text-2xl font-semibold line-clamp-2 capitalize">
              {forum.status == "success" && forum.data.title}
            </p>
            <div className="text-[#cacaca] flex items-center text-base font-normal gap-2">
              <MdOutlineDateRange />
              <h1>
                {formatDate(
                  forum.status == "success" && forum.data.publish_date
                )}
              </h1>
              <h1> | </h1>
              <BiUserCircle />
              <h1 className="capitalize">
                {forum.status == "success" && forum.data.author.name}
              </h1>
              <h1> | </h1>
              <BsChatLeftText />
              <h1>{forum.status == "success" && forum.data.chats.length}</h1>
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
              {forum.status == "success" && forum.data.description}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                <MdSend onClick={submitMessage} className="text-[#1dbc40]" />
              </FormField>
            </div>
          )}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
