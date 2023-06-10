import {
  MainLayout,
  ContentLayout,
  Button,
  Forum,
  FormField,
  Modal,
  Form,
} from "@/components";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
export const Forums = () => {
  const [showModal, setShowModal] = useState(false);
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
      <ContentLayout className="flex-col gap-8 pt-[10vh]">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="font-bold text-3xl">Forums</h1>
          <div className="flex flex-row gap-2">
            <FormField
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
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
          <Forum />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
