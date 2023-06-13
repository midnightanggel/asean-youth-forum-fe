import { AuthLayout, FormField, Button, Form } from "@/components";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { post } from "@/services";
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
    const { message } = res;
    message === "success" &&
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
      <section className="h-full w-3/5 flex items-center justify-center ">
        <Form onSubmit={handRegister} className="gap-7">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="font-bold text-3xl">Get Started With AYF</h1>
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
      <section className="h-full w-2/5">
        <img
          className="w-full h-full object-cover object-center"
          src="/img/register.png"
          alt=""
        />
      </section>
    </AuthLayout>
  );
};
