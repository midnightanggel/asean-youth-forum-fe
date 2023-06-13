import { MainLayout, ContentLayout, FormField, Article } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Carousel } from "@/components";
import { useEffect } from "react";
import { get } from "@/services";
import { useState } from "react";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const res = await get("/articles");
    setArticles(res.data);
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-col gap-5 pt-[10vh]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="font-bold text-3xl">Articles</h1>
          <FormField padding="3" placeholder="Search" width="auto" type="text">
            <BiSearchAlt2 />
          </FormField>
        </div>
        {articles.length != 0 && <Carousel data={articles.slice(0, 5)} />}
        <div className="flex flex-wrap w-full gap-5">
          {articles &&
            articles.map((el, i) => (
              <Article
                key={i}
                title={el.title}
                content={el.content}
                image={el.image}
                date={el.date}
                id={el._id}
              />
            ))}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
