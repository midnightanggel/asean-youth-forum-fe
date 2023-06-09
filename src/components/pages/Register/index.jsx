import { Auth, FormField, Button } from "@/components";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Register = () => {
  const [showPassword, setShowPassword] = useState("password");
  return (
    <Auth direction="reverse">
      <section className="h-full w-3/5 flex items-center justify-center ">
        <form className="h-full w-[350px] flex items-center justify-center flex-col gap-7">
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
            />
            <FormField
              padding="2"
              placeholder="Age"
              width="full"
              type="number"
            />
            <FormField
              padding="2"
              placeholder="Country"
              width="full"
              type="text"
            />
            <FormField
              padding="2"
              placeholder="Email"
              width="full"
              type="email"
            />
            <FormField
              padding="2"
              placeholder="Password"
              width="full"
              type={showPassword}
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
              type={showPassword}
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
          >
            Register
          </Button>
          <h1 className="font-normal text-sm ">
            Have an account ?{" "}
            <Link to="/login" className="text-[#1DBC40]">
              Login
            </Link>
          </h1>
        </form>
      </section>
      <section className="h-full w-2/5">
        <img
          className="w-full h-full object-cover object-center"
          src="/img/register.png"
          alt=""
        />
      </section>
    </Auth>
  );
};
