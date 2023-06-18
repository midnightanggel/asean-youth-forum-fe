import {
  Article,
  Button,
  ContentLayout,
  Forum,
  MainLayout,
} from "@/components";
import { get } from "@/services";
import { useEffect, useState } from "react";

export const Home = () => {
  const [mostCommented, setMostCommented] = useState({});
  const [mostChats, setMostChats] = useState({});

  const getAllData = async () => {
    const resArticles = await get(`/articles/most-commented`);
    const resForums = await get(`/forums/most-chats`);
    setMostCommented(resArticles);
    setMostChats(resForums);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <MainLayout>
      <ContentLayout
        padding={true}
        className="md:flex-row flex-col-reverse bg-[#09644E] text-white justify-between items-center gap-4 "
      >
        <div className="md:w-2/5 w-full flex flex-col gap-5">
          <h1 className="font-bold md:text-4xl text-3xl">
            Uniting ASEAN's Youth for a Better Tomorrow
          </h1>
          <p className="font-light text-justify ">
            The ASEAN Youth Forum (AYF) is a platform for young people across
            the ASEAN region to connect, engage, and collaborate towards a
            brighter future. Our mission is to empower the youth of ASEAN to
            take an active role in shaping their communities and countries, and
            to work together towards sustainable development, peace, and
            prosperity for all.
          </p>
          <Button
            weight="light"
            padding="2"
            width="200"
            font="base"
            variant="primary"
            to="/login"
          >
            Let's Contribute
          </Button>
        </div>
        <div className="md:w-2/5 w-full  flex items-end justify-end ">
          <figcaption className="w-[350px] ">
            <img
              className="rounded-lg aspect-square object-cover"
              src="/img/home.png"
              alt=""
            />
          </figcaption>
        </div>
      </ContentLayout>
      <ContentLayout padding={true} className="flex-col  gap-8 ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <h1 className="font-bold text-3xl">Articles</h1>
            <p className="font-medium text-lg  text-[#747474]">Popular</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {mostCommented?.status == "success" &&
              mostCommented.data
                .slice(0, 3)
                .map((el, i) => (
                  <Article
                    key={i}
                    title={el.title}
                    content={el.content}
                    image={el.image}
                    date={el.date}
                    id={el._id}
                    comment={el.commentCount}
                  />
                ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <h1 className="font-bold text-3xl">Forums</h1>
            <p className="font-medium text-lg  text-[#747474]">Popular</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {mostChats?.status == "success" &&
              mostChats?.data
                .slice(0, 4)
                .map((el, i) => (
                  <Forum
                    key={i}
                    title={el.title}
                    description={el.description}
                    image={el.image}
                    date={el.publish_date}
                    author={el.author}
                    chats={el.chatCount}
                    id={el._id}
                  />
                ))}
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
