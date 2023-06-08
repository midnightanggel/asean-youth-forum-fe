import { Main, Content, FormField, Article } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
export const Articles = () => {
  return (
    <Main>
      <Content className="flex-col gap-8 pt-[10vh]">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-bold text-3xl">Articles</h1>
          <FormField padding="3" placeholder="Search" width="auto" type="text">
            <BiSearchAlt2 />
          </FormField>
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div className="flex flex-wrap w-full gap-5">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </Content>
    </Main>
  );
};
