import { Main, Content, Button, Forum, FormField } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
export const Forums = () => {
  return (
    <Main>
      <Content className="flex-col gap-8 pt-[10vh]">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-bold text-3xl">Forums</h1>
          <div className="flex flex-row gap-2">
            <FormField
              padding="3"
              placeholder="Search"
              width="auto"
              type="text"
            >
              <BiSearchAlt2 />
            </FormField>
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
