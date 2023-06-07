import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { Button } from "@/components";

export const Forum = (props) => {
  const { title, desc, date, author, id, img, chats } = props;

  return (
    <div className="bg-white w-[565px] h-[226px] shadow-lg flex flex-row rounded-lg">
      <figure className="w-2/5">
        <img
          className="aspect-square object-cover rounded-l-lg "
          src="/img/home.png"
          alt=""
        />
      </figure>
      <div className="p-5 flex flex-col gap-2 w-3/5 h-full ">
        <h1 className="font-semibold  ">
          John Lewis, civil rights giant, crosses infamous Selma bridge one
        </h1>
        <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
          <MdOutlineDateRange />
          <h1>24 Oct,2021</h1>
          <h1> | </h1>
          <BiUserCircle />
          <h1>Fahmi Sugiarto</h1>
          <h1> | </h1>
          <BsChatLeftText />
          <h1>90</h1>
        </div>
        <p className="font-normal text-sm  text-[#1f1e1e] text-justify pb-1">
          Solemn crowds watch as Lewis, who died earlier this month at the age
          of 80 Solemn crowds watch as Lewis, who died
        </p>
        <Button
          weight="normal"
          padding="3"
          width="100"
          font="sm"
          variant="primary"
        >
          Join
          <TbCircleArrowRightFilled className="text-[20px]" />
        </Button>
      </div>
    </div>
  );
};
