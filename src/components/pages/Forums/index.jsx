import {
  Button,
  ContentLayout,
  Form,
  FormField,
  Forum,
  MainLayout,
  Modal,
} from "@/components";
import { get, post } from "@/services";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { useSelector } from "react-redux";
export const Forums = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.user.user.name);
  const [forums, setForums] = useState([]);
  const [search, setSearch] = useState("");
  const [newForum, setNewForum] = useState({
    title: "",
    description: "",
    image: null,
  });

  const createForum = async (e) => {
    e.preventDefault();
    const res = await post("/forums", newForum);
    res?.status == "success" && (setShowModal(false), getForums());
  };

  const handleChange = (e) => {
    setNewForum((prev) =>
      e.target.name === "image"
        ? { ...prev, image: e.target.files[0] }
        : { ...prev, [e.target.name]: e.target.value }
    );
  };

  const getForums = async () => {
    const res = await get("/forums");
    setForums(res);
  };

  const getSearchForum = async () => {
    const res = await get("/forums", {
      search: search,
    });
    setForums(res);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      getSearchForum();
    }
  };

  useEffect(() => {
    getForums();
  }, []);
  return (
    <MainLayout className="md:pt-20 pt-5">
      {showModal && (
        <Modal>
          <section className="bg-[#F0F2F5] w-[500px] h-[500px] rounded-lg flex justify-center items-center relative ">
            <CgCloseO
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-red-500 text-2xl font-semibold cursor-pointer"
            />

            <Form
              onSubmit={createForum}
              className="gap-7 items-center justify-center w-[350px]"
            >
              <div className="flex flex-col gap-1 items-center">
                <h1 className="font-bold text-3xl">Add Forum</h1>
                <h1 className="font-normal text-base ">Let's contribute</h1>
              </div>
              <div className="w-full flex flex-col gap-7">
                <FormField
                  padding="2"
                  placeholder="Title"
                  width="full"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={newForum.title}
                />
                <FormField
                  padding="2"
                  placeholder="Description"
                  width="full"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={newForum.description}
                />

                <FormField
                  padding="2"
                  placeholder="Background"
                  width="full"
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleChange}
                />
              </div>
              <Button
                weight="light"
                padding="2"
                width="full"
                font="base"
                variant="primary"
                type="submit"
              >
                Create Forum
              </Button>
            </Form>
          </section>
        </Modal>
      )}
      <ContentLayout padding={true} className="flex-col gap-8 pt-[10vh]">
        <div className="flex flex-row w-full justify-between gap-5 md:gap-0 items-center">
          <h1 className="md:flex hidden  font-bold md:text-3xl text-2xl">
            Forums
          </h1>
          {!user && (
            <h1 className="flex md:hidden  font-bold md:text-3xl text-2xl">
              Forums
            </h1>
          )}
          <div className="flex flex-row gap-2">
            <FormField
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              padding="3"
              placeholder="Search"
              width="auto"
              type="text"
            >
              <BiSearchAlt2 onClick={getSearchForum} />
            </FormField>
            {user && (
              <Button
                weight="light"
                padding="2"
                width="150"
                font="base"
                variant="primary"
                onClick={() => setShowModal(true)}
              >
                Add Forum
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-5">
          {forums?.status == "success" &&
            forums.data.map((el, i) => (
              <Forum
                key={i}
                title={el.title}
                description={el.description}
                image={el.image}
                date={el.publish_date}
                author={el.author.name}
                chats={el.chats.length}
                id={el._id}
              />
            ))}
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
