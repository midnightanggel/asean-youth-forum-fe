import { MainLayout, ContentLayout, FormField, Article } from "@/components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Form } from "@/components";
import { useEffect } from "react";
import { get } from "@/services";
import { useState } from "react";

export const Profile = () => {
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
    <MainLayout>
      <ContentLayout padding={true} className="flex-col gap-5 pt-[10vh]">
        <h1 className="font-bold text-3xl">Profile</h1>
        <div className="flex flex-row gap-5">
          <section className="w-1/3  rounded-xl shadow-lg bg-white py-6 px-7 flex flex-col items-center gap-2">
            <img
              className="aspect-square rounded-full"
              src="/img/ava.jpg"
              alt=""
            />
            <p className="font-medium text-base text-[#747474]">
              Change Foto Profile
            </p>
            <FormField
              padding="2"
              placeholder="Background"
              width="full"
              type="file"
              accept="image/*"
              name="image"
            />
          </section>
          <section className="w-2/3 rounded-xl shadow-lg bg-white py-6 px-7 flex flex-col  gap-2">
            <Form className="w-full gap-2">
              <p className="font-medium text-lg ">Full Name</p>
              <FormField
                padding="2"
                placeholder="Name"
                width="full"
                type="text"
                name="name"
                value="Fahmi Sugiarto"
              />
              <p className="font-medium text-lg ">Age</p>
              <FormField
                padding="2"
                placeholder="Age"
                width="full"
                type="number"
                name="age"
                value="21"
              />
              <p className="font-medium text-lg ">Country</p>
              <FormField
                padding="2"
                placeholder="Country"
                width="full"
                type="text"
                name="country"
                value="Indonesia"
              />
              <p className="font-medium text-lg ">Email</p>
              <FormField
                padding="2"
                placeholder="Email"
                width="full"
                type="text"
                name="email"
                value="sugiartofahmi@gmail.com"
                variant="disabled"
              />
            </Form>
          </section>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
