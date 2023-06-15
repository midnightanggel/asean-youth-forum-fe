import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { Button } from "@/components";
import { formatDate } from "@/utils";

export const Forum = (props) => {
  const { title, description, date, author, id, image, chats } = props;
  const nameLimit = 15;
  return (
    <div className="bg-white w-[565px] h-[227px] shadow-lg flex flex-row rounded-lg">
      <figure className="w-2/5 h-full">
        <img
          className="aspect-square object-cover rounded-l-lg "
          src={image && image.replace("/upload/", "/upload/q_20/")}
          alt=""
        />
      </figure>
      <div className="p-4 flex flex-col justify-between w-3/5 h-full ">
        <div className=" flex flex-col gap-2">
          <h1 className="font-semibold capitalize ">{title}</h1>
          <div className="text-[#747474] flex items-center text-sm font-normal gap-1 w-full">
            <MdOutlineDateRange />
            <h1>{formatDate(date)}</h1>
            <h1> | </h1>
            <BiUserCircle />
            <h1 className="capitalize">
              {author && author.split("").length > nameLimit
                ? author.slice(0, nameLimit)
                : author}
            </h1>
            <h1> | </h1>
            <BsChatLeftText />
            <h1>{chats}</h1>
          </div>
          <p className="font-normal normal-case text-sm  text-[#1f1e1e] text-justify pb-1 line-clamp-3">
            {description}
          </p>
        </div>
        <Button
          weight="normal"
          padding="3"
          width="100"
          font="sm"
          variant="primary"
          to={`/forums/${id}`}
        >
          Join
          <TbCircleArrowRightFilled className="text-[20px]" />
        </Button>
      </div>
    </div>
  );
};
