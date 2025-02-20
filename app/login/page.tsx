"use client";
import Link from "next/link";
import Header from "../_components/header";
import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
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
          } else {
            errorBox.innerHTML = "ایمیل نا معتبر است.";
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

  function handleSubmit({ event }: { event: FormEvent<HTMLFormElement> }) {
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
      <input
        type="submit"
        className="opacity-90 hover:opacity-1 hover:text-white w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center bg-[#1D4ED8] hover:bg-[#173cb3] transition duration-150 ease-in-out dark:bg-[#4F46E5] dark:hover:bg-[#0026a1]"
        value="ورود"
      />

      <Link
        href={"./../registery/"}
        className="text-blue-500 hover:text-blue-950 dark:hover:text-blue-100"
      >
        حسابی ندارید؟ ثبت نام کنید.
      </Link>
    </form>
  );
}
