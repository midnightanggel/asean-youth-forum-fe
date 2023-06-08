import { Main, Content, Button, Forum } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
export const Forums = () => {
  return (
    <Main>
      <Content className="flex-col gap-5 ">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-bold text-3xl">Forums</h1>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row w-auto bg-white items-center justify-between border-2 border-[#D9D9D9] rounded-lg">
              <input
                placeholder="Search"
                type="text"
                className=" focus:outline-none rounded-l-lg p-3"
              />
              <div className="text-[#747474] flex items-center text-2xl font-normal p-2">
                <BiSearchAlt2 />
              </div>
            </div>
            <Button
              weight="light"
              padding="2"
              width="150"
              font="base"
              variant="primary"
            >
              Add Forum
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-5">
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
        </div>
      </Content>
    </Main>
  );
};
