import { MainLayout, ContentLayout, FormField } from "@/components";
import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { get } from "@/services";
import { formatDateFull } from "@/utils";
import { io } from "socket.io-client";

export const ForumDetail = () => {
  const user = useSelector((state) => state.user.user);
  const [route, setRoute] = useState("forum");
  const [message, setMessage] = useState("");
  const [forum, setForum] = useState({});
  const [socket, setSocket] = useState(null);
  const { id } = useParams();
  const getForum = async () => {
    const res = await get(`/forums/${id}`);
    setForum(res);
  };

  const submitMessage = async () => {
    const raw = JSON.stringify({
      forum_id: id,
      user_id: user.id,
      message,
    });
    socket.emit("sendToForum", raw);
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("broadcastToFrontend", (msgRaw) => {
        const msg = JSON.parse(msgRaw);
        if (msg.forum_id == id) {
          getForum();
        }
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
        {forum.status == "success" && (
          <div className="h-[40vh] w-full relative">
            <img
              src={forum.data.image.replace("/upload/", "/upload/q_50/")}
              className="h-full w-full object-cover"
              alt=""
            />

            <div className="flex flex-col gap-2 justify-center h-[130px] absolute bottom-0 left-0 text-white bg-gradient-to-t from-black to-transparent w-full px-[15vh]">
              <p className="text-justify text-2xl font-semibold line-clamp-2 capitalize">
                {forum.data.title}
              </p>
              <div className="text-[#cacaca] flex items-center text-base font-normal gap-2">
                <MdOutlineDateRange />
                <h1>{formatDateFull(forum.data.publish_date)}</h1>
                <h1> | </h1>
                <BiUserCircle />
                <h1 className="capitalize">{forum.data.author.name}</h1>
                <h1> | </h1>
                <BsChatLeftText />
                <h1>{forum.data.chats.length}</h1>
              </div>
            </div>
          </div>
        )}

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
                {forum.status == "success" &&
                  forum.data.chats.map((el, i) => (
                    <div
                      key={i}
                      className={`max-w-2xl w-full flex gap-2 ${
                        user &&
                        user.id == el.user._id &&
                        "flex-row-reverse ml-auto  right-0"
                      } `}
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black "></div>
                      <div
                        className={`gap-2 p-3 flex flex-col ${
                          user && user.id == el.user._id
                            ? "bg-[#1DBC40] text-[#F0F2F5] rounded-l-lg rounded-br-lg"
                            : "bg-[#F0F2F5] text-black  rounded-r-lg rounded-bl-lg"
                        }`}
                      >
                        <h1 className="font-bold text-base capitalize">
                          {el.user.name}
                        </h1>
                        <p className="text-base text-justify">
                          {el.message}
                          <span
                            className={`pt-1 items-end justify-end flex text-sm font-normal gap-1 ${
                              user && user.id == el.user._id
                                ? "text-[#616161]"
                                : "text-[#5c5c5c]"
                            }`}
                          >
                            {formatDateFull(el.sendAt)}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {user?.name != "" ? (
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
              ) : (
                <h1 className="font-medium w-full flex justify-center gap-1">
                  <Link
                    className="text-[#1dbc40]"
                    to={`/login?redirect=/forums/${id}`}
                  >
                    Log in{` `}
                  </Link>
                  to your account to participate
                </h1>
              )}
            </div>
          )}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
