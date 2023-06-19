import { AuthLayout, Button, Form, FormField } from "@/components";
import { post } from "@/services";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
export const Register = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    name: "",
    age: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handRegister = async (e) => {
    e.preventDefault();
    const res = await post("/auth/register", users);
    res.status === "success" &&
      setUsers({
        name: "",
        age: "",
        country: "",
        email: "",
        password: "",
        confirmPassword: "",
      }),
      navigate("/login");
  };
  return (
    <AuthLayout direction="reverse">
      <section className="h-full md:w-3/5 w-full flex items-center justify-center ">
        <Form
          onSubmit={handRegister}
          className="gap-7 items-center justify-center md:w-[350px] w-[300px]"
        >
          <div className="flex flex-col gap-1 items-center">
            <h1 className="font-bold text-3xl text-center">
              Get Started With AYF
            </h1>
            <h1 className="font-normal text-base ">Let's join us</h1>
          </div>
          <div className="w-full flex flex-col gap-7">
            <FormField
              padding="2"
              placeholder="Fullname"
              width="full"
              type="text"
              value={users.name}
              onChange={handleChange}
              name="name"
            />
            <FormField
              padding="2"
              placeholder="Age"
              width="full"
              type="number"
              value={users.age}
              onChange={handleChange}
              name="age"
            />
            <FormField
              padding="2"
              placeholder="Country"
              width="full"
              type="text"
              value={users.country}
              onChange={handleChange}
              name="country"
            />
            <FormField
              padding="2"
              placeholder="Email"
              width="full"
              type="email"
              value={users.email}
              onChange={handleChange}
              name="email"
            />
            <FormField
              padding="2"
              placeholder="Password"
              width="full"
              type={showPassword}
              value={users.password}
              onChange={handleChange}
              name="password"
            >
              {showPassword === "password" ? (
                <BsFillEyeSlashFill onClick={() => setShowPassword("text")} />
              ) : (
                <BsFillEyeFill onClick={() => setShowPassword("password")} />
              )}
            </FormField>
            <FormField
              padding="2"
              placeholder="Confirm Password"
              width="full"
              type={showConfirmPassword}
              value={users.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
            >
              {showConfirmPassword === "password" ? (
                <BsFillEyeSlashFill
                  onClick={() => setShowConfirmPassword("text")}
                />
              ) : (
                <BsFillEyeFill
                  onClick={() => setShowConfirmPassword("password")}
                />
              )}
            </FormField>
          </div>
          <Button
            weight="light"
            padding="2"
            width="full"
            font="base"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
          <h1 className="font-normal text-sm ">
            Have an account ?{" "}
            <Link to="/login" className="text-[#1DBC40]">
              Login
            </Link>
          </h1>
        </Form>
      </section>
      <section className="h-full md:w-2/5 w-0">
        <img
          className="w-full h-full object-cover object-center"
          src="/img/register.png"
          alt=""
        />
      </section>
    </AuthLayout>
  );
};
