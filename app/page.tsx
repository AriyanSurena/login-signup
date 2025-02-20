"use client";
import RegistrationButton from "./_components/RegistrationButton";
import LoginButton from "./_components/LoginButton";
import Header from "./_components/header";
import { usePathname } from "next/navigation";

export default function Home() {
  const thisPath = usePathname();
  return (
    <section>
      <Header text={"ثبت نام یا ورود"} path={thisPath} />
      <div className="flex flex-col">
        <RegistrationButton url={"./registery"} />
        <LoginButton url={"./login/"} />
      </div>
    </section>
  );
}
