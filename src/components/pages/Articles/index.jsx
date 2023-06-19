import {
  Article,
  Carousel,
  ContentLayout,
  FormField,
  MainLayout,
} from "@/components";
import { get } from "@/services";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [showCarousel, setShowCarousel] = useState(true);

  const getArticles = async () => {
    const res = await get("/articles");
    setArticles(res);
  };

  const getSearchArticle = async () => {
    const res = await get("/articles", {
      search: search,
    });
    setArticles(res);
    setShowCarousel(false);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      getSearchArticle();
      setShowCarousel(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <MainLayout className="md:pt-20 pt-5">
      <ContentLayout padding={true} className="flex-col gap-5 pt-[10vh]">
        <div className="flex flex-row w-full justify-between gap-5 md:gap-0 items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Articles</h1>
          <FormField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            padding="3"
            placeholder="Search"
            width="auto"
            type="text"
          >
            <BiSearchAlt2 onClick={getSearchArticle} />
          </FormField>
        </div>
        {showCarousel && articles?.status == "success" && (
          <Carousel data={articles.data.slice(0, 5)} />
        )}
        <div className="flex flex-wrap w-full gap-5">
          {articles?.status == "success" &&
            articles.data.map((el, i) => (
              <Article
                key={i}
                title={el.title}
                content={el.content}
                image={el.image}
                date={el.date}
                id={el._id}
                comment={el.comments.length}
              />
            ))}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
