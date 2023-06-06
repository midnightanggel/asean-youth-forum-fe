import { MdOutlineDateRange } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Button } from "@/components";
export const CardArticle = () => {
  return (
    <div className="bg-white w-[370px] h-[400px] shadow-lg flex flex-col rounded-lg">
      <figure className="w-full ">
        <img
          className="aspect-[20/8] object-cover rounded-t-lg "
          src="/img/home.png"
          alt=""
        />
      </figure>
      <div className="px-5 py-3 flex flex-col gap-3 ">
        <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
          <MdOutlineDateRange />
          <h1>24 Oct,2021</h1>
          <h1> | </h1>
          <BiUserCircle />
          <h1>Fahmi Sugiarto</h1>
        </div>
        <h1 className="font-semibold  ">
          John Lewis, civil rights giant, crosses infamous Selma bridge one
        </h1>
        <p className="font-normal text-sm  text-[#747474] text-justify pb-1">
          Solemn crowds watch as Lewis, who died earlier this month at the age
          of 80, is borne by caisson over Edmund Pettus Bridge
        </p>
        <Button
          weight="normal"
          padding="3"
          width="150"
          font="sm"
          variant="primary"
        >
          Read More
          <TbCircleArrowRightFilled className="text-[20px]" />
        </Button>
      </div>
    </div>
  );
};
