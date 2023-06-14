import { MainLayout, ContentLayout, FormField, Button } from "@/components";
import { useParams, Link } from "react-router-dom";
import { get } from "@/services";
import { formatDate } from "@/utils";
import { useState, useEffect, Fragment } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

export const ArticleDetail = () => {
  const user = useSelector((state) => state.user.user.name);
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const getArticle = async () => {
    const res = await get(`/articles/${id}`);
    setArticle(res);
  };

  useEffect(() => {
    getArticle();
  }, []);
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-row  pt-[10vh]">
        <section className=" w-3/4 flex flex-col gap-2">
          <h1 className="font-bold text-3xl">
            {article?.status == "success" && article.data.title}
          </h1>
          <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
            <MdOutlineDateRange />
            <h1>
              {formatDate(article?.status == "success" && article.data.date)}
            </h1>
          </div>
          {article?.status == "success" && (
            <img
              className="rounded-xl"
              src={article.data.image.replace("/upload/", "/upload/q_90/")}
              alt=""
            />
          )}
          <div className="flex flex-col gap-4 text-justify py-2">
            {article?.status == "success" &&
              article.data.content.split(". ").map((el, i) => (
                <p key={i} className="text-justify">
                  {el}.
                </p>
              ))}
          </div>
          <div className="flex gap-2 ">
            {user ? (
              <Fragment>
                <img
                  className="w-[40px] rounded-full aspect-square"
                  src="/img/ava.jpg"
                  alt=""
                />
                <FormField
                  padding="2"
                  placeholder="Write comment here ...."
                  width="full"
                  type="text"
                  name="comment"
                />
                <Button
                  weight="light"
                  padding="2"
                  width="100"
                  font="base"
                  variant="primary"
                >
                  Send
                </Button>
              </Fragment>
            ) : (
              <h1 className="font-medium">
                <Link
                  className="text-[#1dbc40]"
                  to={`/login?redirect=/articles/${id}`}
                >
                  Log in
                </Link>{" "}
                to your account to be able to add comments
              </h1>
            )}
          </div>
          <h1 className="text-lg font-semibold">Comments </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full aspect-square"
                src="/img/ava.jpg"
                alt=""
              />
              <div>
                <h1 className="text-base font-semibold flex gap-2">
                  Fahmis
                  <span className="text-[#747474] flex items-center text-xs font-normal ">
                    13 June, 2023 at 13:13
                  </span>
                </h1>
                <p className="text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full aspect-square"
                src="/img/ava.jpg"
                alt=""
              />
              <div>
                <h1 className="text-base font-semibold flex gap-2">
                  Fahmis
                  <span className="text-[#747474] flex items-center text-xs font-normal ">
                    13 June, 2023 at 13:13
                  </span>
                </h1>
                <p className="text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full aspect-square"
                src="/img/ava.jpg"
                alt=""
              />
              <div>
                <h1 className="text-base font-semibold flex gap-2">
                  Fahmis
                  <span className="text-[#747474] flex items-center text-xs font-normal ">
                    13 June, 2023 at 13:13
                  </span>
                </h1>
                <p className="text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  optio sunt, enim provident blanditiis minus? Quis laborum
                  accusamus incidunt reprehenderit quam facilis mollitia
                  voluptatibus inventore. Odit porro distinctio cum eum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="  w-1/4">
          <h1>test</h1>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};
