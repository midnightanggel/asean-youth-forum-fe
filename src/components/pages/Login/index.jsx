import { AuthLayout, FormField, Button, Form } from "@/components";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { post, saveToken, saveUserData } from "@/services";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const navigate = useNavigate();

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await post("/auth/login", users);
    const { status, token, user } = res;
    status === "success" &&
      setUsers({
        email: "",
        password: "",
      }),
      saveToken(token),
      saveUserData(user),
      navigate("/");
  };

  return (
    <AuthLayout direction="row">
      <section className="h-full w-3/5 flex items-center justify-center  ">
        <Form onSubmit={handleLogin} className="gap-8">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="font-bold text-3xl">Welcome Back</h1>
            <h1 className="font-normal text-base ">Login into your account</h1>
          </div>
          <div className="w-full flex flex-col gap-7">
            <FormField
              padding="2"
              placeholder="Email"
              width="full"
              type="email"
              value={users.email}
              name="email"
              onChange={handleChange}
            />
            <FormField
              padding="2"
              placeholder="Password"
              width="full"
              type={showPassword}
              value={users.password}
              name="password"
              onChange={handleChange}
            >
              {showPassword === "password" ? (
                <BsFillEyeSlashFill onClick={() => setShowPassword("text")} />
              ) : (
                <BsFillEyeFill onClick={() => setShowPassword("password")} />
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
            Login
          </Button>
          <h1 className="font-normal text-sm ">
            Don’t have an account ?{" "}
            <Link to="/register" className="text-[#1DBC40]">
              Register
            </Link>
          </h1>
        </Form>
      </section>
      <section className="h-full w-2/5">
        <img
          className="w-full h-full object-cover object-left"
          src="/img/login.jpg"
          alt=""
        />
      </section>
    </AuthLayout>
  );
};
