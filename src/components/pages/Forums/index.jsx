import {
  MainLayout,
  ContentLayout,
  Button,
  Forum,
  FormField,
  Modal,
  Form,
} from "@/components";
import { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { get } from "@/services";
export const Forums = () => {
  const [showModal, setShowModal] = useState(false);
  const [forums, setForums] = useState([]);
  const [search, setSearch] = useState("");
  const getForums = async () => {
    const res = await get("/forums");
    setForums(res.data);
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      const res = await get("/forums", {
        search: search,
      });
      setForums(res.data);
    }
  };

  useEffect(() => {
    getForums();
  }, []);
  return (
    <MainLayout>
      {showModal && (
        <Modal>
          <section className="bg-[#F0F2F5] w-[500px] h-[500px] rounded-lg flex justify-center items-center relative ">
            <CgCloseO
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-red-500 text-2xl font-semibold cursor-pointer"
            />

            <Form className="gap-7">
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
                />
                <FormField
                  padding="2"
                  placeholder="About"
                  width="full"
                  type="text"
                />

                <FormField
                  padding="2"
                  placeholder="Background"
                  width="full"
                  type="file"
                  accept="image/*"
                />
              </div>
              <Button
                weight="light"
                padding="2"
                width="full"
                font="base"
                variant="primary"
              >
                Add Forum
              </Button>
            </Form>
          </section>
        </Modal>
      )}
      <ContentLayout padding={true} className="flex-col gap-8 pt-[10vh]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="font-bold text-3xl">Forums</h1>
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
              <BiSearchAlt2 />
            </FormField>
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
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-5">
          {forums.length != 0 &&
            forums.map((el, i) => (
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
