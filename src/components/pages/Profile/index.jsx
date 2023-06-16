import {
  MainLayout,
  ContentLayout,
  FormField,
  Button,
  Form,
} from "@/components";
import { get, put } from "@/services";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNewData } from "@/store";

export const Profile = () => {
  const [newImage, setNewImage] = useState(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    age: "",
    country: "",
    email: "",
    image: null,
    status: "",
  });

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setNewImage(URL.createObjectURL(file));
    setUser({ ...user, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await put("/auth/me/update", user);
    res &&
      res.status == "success" &&
      dispatch(
        setNewData({
          user: res.data,
        })
      ),
      getUserProfile();
  };

  const getUserProfile = async () => {
    const res = await get("/auth/me");
    res &&
      res.status == "success" &&
      setUser({
        name: res.data.name,
        age: res.data.age,
        country: res.data.country,
        email: res.data.email,
        image: res.data.image,
        status: res.status,
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <MainLayout>
      <ContentLayout padding={true} className="flex-col gap-5 pt-[10vh]">
        <h1 className="font-bold text-3xl">Profile</h1>
        {user.status === "success" && (
          <div className="flex flex-row gap-5">
            <section className="w-1/3  rounded-xl shadow-lg bg-white py-6 px-7 flex flex-col items-center gap-2">
              {newImage ? (
                <img
                  className="aspect-square rounded-full"
                  src={newImage}
                  alt=""
                />
              ) : (
                <img
                  className="aspect-square rounded-full"
                  src={user.image}
                  alt=""
                />
              )}

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
                onChange={handleChangeImage}
              />
            </section>
            <section className="w-2/3 rounded-xl shadow-lg bg-white py-6 px-7 flex flex-col  gap-2">
              <Form onSubmit={handleSubmit} className="w-full gap-5 ">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg ">Full Name</p>
                  <FormField
                    padding="2"
                    placeholder="Name"
                    width="full"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                  <p className="font-medium text-lg ">Age</p>
                  <FormField
                    padding="2"
                    placeholder="Age"
                    width="full"
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                  />
                  <p className="font-medium text-lg ">Country</p>
                  <FormField
                    padding="2"
                    placeholder="Country"
                    width="full"
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                  />
                  <p className="font-medium text-lg ">Email</p>
                  <FormField
                    padding="2"
                    placeholder="Email"
                    width="full"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    variant="disabled"
                  />
                </div>
                <div className="w-full flex items-end justify-end">
                  <Button
                    weight="light"
                    padding="2"
                    width="100"
                    font="base"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </section>
          </div>
        )}
      </ContentLayout>
    </MainLayout>
  );
};
