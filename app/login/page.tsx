"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Header from "@/app/_components/Header";
import SubmitInput from "@/app/_components/SubmitInput";
import FormFooter from "../_components/FormFooter";

export default function LoginPage() {
  const Styles: {
    labelStyle_1: string;
    labelHeadStyle_1: string;
    inputStyle_1: string;
  } = {
    labelStyle_1: "flex flex-col select-none cursor-pointer gap-2",
    labelHeadStyle_1: "flex flex-col select-none cursor-pointer gap-2",
    inputStyle_1: "rounded p-2 text-black",
  };

  interface User {
    userEmailAddress: string;
    userPassword: string;
  }

  const [user, setUser] = useState<User>({
    userEmailAddress: "",
    userPassword: "",
  });

  const [isEmailTrue, setIsEmailTrue] = useState<boolean>(false);
  const [isLoginable, setIsLogiable] = useState<boolean>(true);
  function handleInputs(value: string, key: string) {
    switch (key) {
      case "userEmailAddress":
        {
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          const errorBox = document.getElementsByClassName("error_message")[0];
          if (emailPattern.test(value)) {
            errorBox.innerHTML = "";
            setUser((prevInfo) => ({
              ...prevInfo,
              userEmailAddress: value as string,
            }));
            setIsEmailTrue(true);
          } else {
            errorBox.innerHTML = "ایمیل نا معتبر است.";
            setIsEmailTrue(false);
          }
        }
        break;
      case "userPassword":
        {
          setUser((pervInfo) => ({
            ...pervInfo,
            userPassword: value as string,
          }));
        }
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (isEmailTrue && user.userPassword) setIsLogiable(false);
    else setIsLogiable(true);
  }, [isEmailTrue, user.userPassword]);

  function handleSubmit({
    event,
  }: {
    event: FormEvent<HTMLFormElement>;
  }): void {
    event?.preventDefault();
    const userInfo = `
                Email Address: ${user.userEmailAddress}
                Password: ${user.userPassword}
            `;
    alert(userInfo);
  }

  return (
    <form
      className="flex flex-col gap-6"
      action="#"
      onSubmit={(event) => {
        handleSubmit({ event });
      }}
    >
      <Header text={"ورود به حساب کاربری"} path={usePathname()} />
      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>حساب کاربری :</span>
        <input
          type="email"
          name="userEmailAddress"
          id="userEmailAddress"
          className={`${Styles.inputStyle_1} text-left placeholder:text-right`}
          placeholder="لطفا آدرس ایمیل را وارد کنید"
          dir="ltr"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "userEmailAddress");
          }}
        />

        <span className="error_message"></span>
      </label>
      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>رمز حساب :</span>
        <input
          type="password"
          name="userPass"
          id="userPass"
          className={`${Styles.inputStyle_1} text-left placeholder:text-right`}
          dir="ltr"
          placeholder="لطفا رمز حساب کاربری را وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "userPassword");
          }}
        />
        <span className="error_message"></span>
      </label>

      <SubmitInput value="ورود" active={isLoginable} variant={2}/>
      <FormFooter url="./../registery/" value="حسابی ندارید؟ ثبت نام کنید."/>
    </form>
  );
}