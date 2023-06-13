import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Button } from "@/components";
export const Article = (props) => {
  const { title, content, date, id, image } = props;
  return (
    <div className="bg-white w-[370px] h-[380px] shadow-lg flex flex-col rounded-lg">
      <figure className="w-full ">
        <img
          className="aspect-[20/8] object-cover rounded-t-lg "
          src={image}
          alt=""
        />
      </figure>
      <div className="px-5 py-3 flex flex-col gap-2  w-full h-full ">
        <h1 className="font-semibold line-clamp-2  h-12">{title}</h1>
        <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
          <MdOutlineDateRange />
          <h1>{date}</h1>
        </div>
        <p className="font-normal text-sm  text-[#1f1e1e] text-justify pb-1 line-clamp-3">
          {content}
        </p>
        <Button
          weight="normal"
          padding="3"
          width="150"
          font="sm"
          variant="primary"
          to={`/articles/${id}`}
        >
          Read More
          <TbCircleArrowRightFilled className="text-[20px]" />
        </Button>
      </div>
    </div>
  );
};
