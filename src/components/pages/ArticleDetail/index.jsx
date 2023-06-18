import { Button, ContentLayout, FormField, MainLayout } from "@/components";
import { get, post } from "@/services";
import { formatDateFull } from "@/utils";
import { Fragment, useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const ArticleDetail = () => {
  const user = useSelector((state) => state.user.user.name);
  const [comment, setComment] = useState("");
  const [article, setArticle] = useState({});
  const [mostCommented, setMostCommented] = useState([]);

  const { id } = useParams();
  const getArticle = async () => {
    const res = await get(`/articles/${id}`);
    setArticle(res);
  };

  const getMostCommented = async () => {
    const res = await get(`/articles/most-commented`);
    setMostCommented(res);
  };

  const submitComment = async () => {
    const res = await post(`/articles/${id}/comment`, { comment });
    res.status === "success" && (getArticle(), setComment(""));
  };
  useEffect(() => {
    getArticle();
    getMostCommented();
  }, [id]);
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-row  pt-[10vh] gap-4">
        {article.status == "success" && (
          <section className=" md:w-2/3 w-full flex flex-col gap-2">
            <h1 className="font-bold md:text-3xl text-2xl">
              {article.data.title}
            </h1>
            <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
              <MdOutlineDateRange />
              <h1>{formatDateFull(article.data.date)}</h1>
            </div>
            <img
              className="rounded-xl"
              src={article.data.image.replace("/upload/", "/upload/q_90/")}
              alt=""
            />
            <div className="flex flex-col gap-4 text-justify py-2">
              {article.data.content.split(". ").map((el, i) => (
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
              {article.data.comments.map((el, i) => (
                <div key={i} className="flex flex-row gap-2">
                  <img
                    className="w-[40px] h-[40px] rounded-full aspect-square"
                    src={el.user.image}
                    alt=""
                  />
                  <div>
                    <h1 className="text-base font-semibold flex gap-2 capitalize">
                      {el.user.name}
                      <span className="text-[#747474] flex items-center text-xs font-normal ">
                        {formatDateFull(el.createdAt)}
                      </span>
                    </h1>
                    <p className="text-base text-justify">{el.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        <section className="md:flex hidden flex-col  w-1/3 gap-3 ">
          <h1 className="text-xl font-semibold">Most Popular </h1>
          <div className="flex flex-col gap-2">
            {mostCommented.status == "success" &&
              mostCommented.data.length != 0 &&
              mostCommented.data.map((el, i) => (
                <Link key={i} to={`/articles/${el._id}`}>
                  <div className="flex flex-row gap-2 cursor-pointer">
                    <div className=" w-2/5">
                      <img
                        src={el.image.replace("/upload/", "/upload/q_20/")}
                        className="rounded-lg w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className=" w-3/5 flex flex-col justify-between">
                      <h1 className="text-base font-medium line-clamp-3 leading-6">
                        {el.title}
                      </h1>
                      <div className="text-[#747474] flex items-center text-sm font-normal gap-1">
                        <MdOutlineDateRange />
                        <h1>{formatDateFull(el.date)}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};
