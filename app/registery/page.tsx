"use client";
import Link from "next/link";
import Header from "../_components/header";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function RegistrationPage() {
  const Styles = {
    labelStyle_1: "flex flex-col gap-2",
    inputStyle_1: "p-2 text-black rounded",
    labelHeadStyle_1: "select-none cursor-pointer",
  };

  interface Person {
    userFirstName: string;
    userLastName: string;
    userEmailAddress: string;
    userPassword: string;
    userPassConfirm: string;
    userAcceptedRules: boolean;
  }

  const [person, setPersonInfo] = useState<Person>({
    userFirstName: "",
    userLastName: "",
    userEmailAddress: "",
    userPassword: "",
    userPassConfirm: "",
    userAcceptedRules: false,
  });

  function handleInputs(value: string | boolean, key: string): void {
    let errorBox;
    switch (key) {
      case "firstNameField":
        {
          errorBox = document.getElementsByClassName("error_message")[0];
          if ((value as string).length < 3) {
            errorBox.innerHTML = "نام باید بیشتر از 3 حرف باشد.";
          } else if ((value as string).length > 30) {
            errorBox.innerHTML = "نام باید کمتر از 30 حرف باشد.";
          } else {
            errorBox.innerHTML = "";
            setPersonInfo((prevInfo) => ({
              ...prevInfo,
              userFirstName: value as string,
            }));
          }
        }
        break;
      case "lastNameField":
        {
          errorBox = document.getElementsByClassName("error_message")[1];
          if ((value as string).length < 3) {
            errorBox.innerHTML = "نام خانوادگی باید بیشتر از 3 حرف باشد.";
          } else if ((value as string).length > 30) {
            errorBox.innerHTML = "نام خانوادگی باید کمتر از 30 حرف باشد.";
          } else {
            errorBox.innerHTML = "";
            setPersonInfo((prevInfo) => ({
              ...prevInfo,
              userLastName: value as string,
            }));
          }
        }
        break;
      case "EmailAddressField":
        {
          errorBox = document.getElementsByClassName("error_message")[2];
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (emailPattern.test(value as string)) {
            errorBox.innerHTML = "";
            setPersonInfo((prevInfo) => ({
              ...prevInfo,
              userEmailAddress: value as string,
            }));
          } else {
            errorBox.innerHTML = "ایمیل نامعتبر است.";
          }
        }
        break;

      case "passwordField":
        {
          errorBox = document.getElementsByClassName("error_message")[3];
          const passwordPattern = {
            lowercase: /[a-z]/,
            uppercase: /[A-Z]/,
            digit: /\d/,
            special: /[!@#$%^&*(),.?":{}|<>]/,
            length: /^.{8,16}$/,
          };

          const errorMessages = [];

          const checkCondition = (pattern: RegExp, message: string) => {
            if (pattern.test(value as string)) {
              return `<span class="text-green-500">${message}</span>`;
            } else {
              return `<span class="text-red-500">${message}</span>`;
            }
          };

          errorMessages.push(
            checkCondition(passwordPattern.lowercase, "یک حرف کوچک")
          );
          errorMessages.push(
            checkCondition(passwordPattern.uppercase, "یک حرف بزرگ")
          );
          errorMessages.push(checkCondition(passwordPattern.digit, "یک عدد"));
          errorMessages.push(
            checkCondition(passwordPattern.special, "یک نماد")
          );
          errorMessages.push(
            checkCondition(passwordPattern.length, "بین 8 تا 16 کاراکتر")
          );

          if (errorMessages.every((msg) => msg.includes("text-green-500"))) {
            errorBox.innerHTML = "";
            setPersonInfo((prevInfo) => ({
              ...prevInfo,
              userPassword: value as string,
            }));
          } else {
            errorBox.innerHTML = `پسورد باید شامل حداقل:<br> ${errorMessages.join(
              "<br>"
            )}`;
          }
        }
        break;

      case "passConfirmField":
        {
          errorBox = document.getElementsByClassName("error_message")[4];
          const passwordValue = person.userPassword;
          console.log("1" + " : " + value + " = " + person.userPassword);
          if (passwordValue === value) {
            console.log("2" + " : " + value + " === " + person.userPassword);
            errorBox.innerHTML = `<span class="text-green-500">رمز مشابه است</span>`;
            setPersonInfo((prevInfo) => ({
              ...prevInfo,
              userPassConfirm: value as string,
            }));
          } else {
            console.log("3" + " : " + value + " !!! " + person.userPassword);
            errorBox.innerHTML = `<span class="text-red-500">رمز مشابه نیست</span>`;
          }
        }
        break;

      case "rulesCheckBox":
        {
          setPersonInfo((prevInfo) => ({
            ...prevInfo,
            userAcceptedRules: value as boolean,
          }));
        }
        break;

      default:
        break;
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const userInfo = `
      First Name: ${person.userFirstName}
      Last Name: ${person.userLastName}
      Email Address: ${person.userEmailAddress}
      Password: ${person.userPassword}
      Confirm Password: ${person.userPassConfirm}
      Accepted Rules: ${person.userAcceptedRules ? "Yes" : "No"}
    `;
    alert(userInfo);
  };

  const passwordMatch = person.userPassword === person.userPassConfirm;
  const isSubmitable = !person.userAcceptedRules || !passwordMatch;

  return (
    <form
      id="form"
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Header text={"فرم ثبت نام"} path={usePathname()} />

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>نام :</span>
        <input
          type="text"
          name="userFirstName"
          id="userFirstName"
          className={Styles.inputStyle_1}
          placeholder="لطفا نام را وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "firstNameField");
          }}
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>نام خانوادگی :</span>
        <input
          type="text"
          name="userLastName"
          id="userLastName"
          className={Styles.inputStyle_1}
          placeholder="لطفا نام خانوادگی را وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "lastNameField");
          }}
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>حساب کاربری :</span>
        <input
          type="email"
          name="userEmailAddress"
          id="userEmailAddress"
          className={`${Styles.inputStyle_1} text-left placeholder:text-right`}
          dir="ltr"
          placeholder="لطفا آدرس ایمیل را وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "EmailAddressField");
          }}
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>رمز حساب :</span>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className={`${Styles.inputStyle_1} text-left placeholder:text-right`}
          dir="ltr"
          placeholder="لطفا رمز حساب کاربری را وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "passwordField");
          }}
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>تکرار پسورد :</span>
        <input
          type="password"
          name="userPassConfirm"
          id="userPassConfirm"
          className={`${Styles.inputStyle_1} text-left placeholder:text-right`}
          dir="ltr"
          placeholder="رمز حساب کاربری را دوباره وارد کنید"
          required
          onChange={(event) => {
            handleInputs(event.target.value, "passConfirmField");
          }}
        />
        <span className="error_message"></span>
      </label>

      <label className={`flex gap-2 flex-row`}>
        <input
          type="checkbox"
          name="rulesCheckBox"
          id="rulesCheckBox"
          className={`w-[3rem] cursor-pointer`}
          required
          onChange={(event) => {
            handleInputs(event.target.value, "rulesCheckBox");
          }}
        />
        <span className={Styles.labelHeadStyle_1}>قوانین را قبول دارم.</span>
      </label>

      <input
        type="submit"
        id="submit"
        disabled={isSubmitable}
        className={`${Styles.inputStyle_1} disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:text-slate-50 bg-[#10B981] hover:bg-[#047857] transition duration-150 dark:bg-[#059669] dark:hover:bg-[#065F46] opacity-90 w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center hover:text-white hover:opacity-1`}
        value="ثبت نام"
      />
      <Link
        href={"./../login/"}
        className="text-blue-500 hover:text-teal-500 dark:hover:text-teal-500"
      >
        از قبل حساب دارید؟ وارد شوید.
      </Link>
    </form>
  );
}
