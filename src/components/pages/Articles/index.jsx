import { MainLayout, ContentLayout, FormField, Article } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Carousel } from "@/components";
export const Articles = () => {
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-col gap-5 pt-[10vh]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="font-bold text-3xl">Articles</h1>
          <FormField padding="3" placeholder="Search" width="auto" type="text">
            <BiSearchAlt2 />
          </FormField>
        </div>
        <Carousel />
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
      </ContentLayout>
    </MainLayout>
  );
};
