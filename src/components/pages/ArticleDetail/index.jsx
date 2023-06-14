import { MainLayout, ContentLayout, FormField, Button } from "@/components";
import { useParams, Link } from "react-router-dom";
import { get, post } from "@/services";
import { formatDate } from "@/utils";
import { useState, useEffect, Fragment } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

export const ArticleDetail = () => {
  const user = useSelector((state) => state.user.user.name);
  const [comment, setComment] = useState("");
  const [article, setArticle] = useState({});
  const { id } = useParams();
  const getArticle = async () => {
    const res = await get(`/articles/${id}`);
    setArticle(res);
  };

  const submitComment = async () => {
    const res = await post(`/articles/${id}/comment`, { comment });
    res.status === "success" && (getArticle(), setComment(""));
  };
  useEffect(() => {
    getArticle();
  }, []);
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-row  pt-[10vh] gap-4">
        <section className=" w-2/3 flex flex-col gap-2">
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
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  weight="light"
                  padding="2"
                  width="100"
                  font="base"
                  variant="primary"
                  onClick={submitComment}
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
            {article?.status == "success" &&
              article.data.comments.map((el, i) => (
                <div key={i} className="flex flex-row gap-2">
                  <img
                    className="w-[40px] h-[40px] rounded-full aspect-square"
                    src="/img/ava.jpg"
                    alt=""
                  />
                  <div>
                    <h1 className="text-base font-semibold flex gap-2 capitalize">
                      {el.user.name}
                      <span className="text-[#747474] flex items-center text-xs font-normal ">
                        {formatDate(el.createdAt)}
                      </span>
                    </h1>
                    <p className="text-base text-justify">{el.comment}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
        <section className="flex flex-col  w-1/3 gap-3 ">
          <h1 className="text-xl font-semibold">Most Popular </h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 cursor-pointer">
              <div className=" w-2/5">
                <img
                  src="/img/home.png"
                  className="rounded-lg w-full h-full"
                  alt=""
                />
              </div>
              <div className=" w-3/5 flex flex-col justify-between">
                <h1 className="text-lg font-medium line-clamp-3 leading-6">
                  Hasil Singapore Open 2023: Penuh Drama, Ginting Lolos ke 16
                  Besar
                </h1>
                <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
                  <MdOutlineDateRange />
                  <h1>
                    {formatDate(
                      article?.status == "success" && article.data.date
                    )}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <div className=" w-2/5">
                <img
                  src="/img/home.png"
                  className="rounded-lg w-full h-full"
                  alt=""
                />
              </div>
              <div className=" w-3/5 flex flex-col justify-between">
                <h1 className="text-lg font-medium line-clamp-3 leading-6">
                  Hasil Singapore Open 2023: Penuh Drama, Ginting Lolos ke 16
                  Besar
                </h1>
                <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
                  <MdOutlineDateRange />
                  <h1>
                    {formatDate(
                      article?.status == "success" && article.data.date
                    )}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <div className=" w-2/5">
                <img
                  src="/img/home.png"
                  className="rounded-lg w-full h-full"
                  alt=""
                />
              </div>
              <div className=" w-3/5 flex flex-col justify-between">
                <h1 className="text-lg font-medium line-clamp-3 leading-6">
                  Hasil Singapore Open 2023: Penuh Drama, Ginting Lolos ke 16
                  Besar
                </h1>
                <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
                  <MdOutlineDateRange />
                  <h1>
                    {formatDate(
                      article?.status == "success" && article.data.date
                    )}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
              <div className=" w-2/5">
                <img
                  src="/img/home.png"
                  className="rounded-lg w-full h-full"
                  alt=""
                />
              </div>
              <div className=" w-3/5 flex flex-col justify-between">
                <h1 className="text-lg font-medium line-clamp-3 leading-6">
                  Hasil Singapore Open 2023: Penuh Drama, Ginting Lolos ke 16
                  Besar
                </h1>
                <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
                  <MdOutlineDateRange />
                  <h1>
                    {formatDate(
                      article?.status == "success" && article.data.date
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};
