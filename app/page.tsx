"use client";
import LinkButton from "@/app/_components/LinkButton";
import FormHeader from "@/app/_components/FormHeader";
import { usePathname } from "next/navigation";

export default function Home() {
  const thisPath = usePathname();
  const styles: {
    Public_Styles: string;
    Registery_Styles: string;
    Login_Styles: string;
  } = {
    Public_Styles:
      "w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center opacity-90 hover:opacity-1 hover:text-white",
    Registery_Styles:
      "bg-[#10B981] hover:bg-[#047857] dark:bg-[#059669] dark:hover:bg-[#065F46]",
    Login_Styles:
      "bg-[#1D4ED8] hover:bg-[#173cb3] dark:bg-[#4F46E5] dark:hover:bg-[#0026a1]",
  };
  return (
    <section>
      <FormHeader text={"ثبت نام یا ورود"} path={thisPath} />
      <div className="flex flex-col">
        <LinkButton
          url={"./registery"}
          value="ثبت نام"
          styles={`${styles.Public_Styles}, ${styles.Registery_Styles}`}
          label="Registery Page"
        />
        <LinkButton
          url={"./login/"}
          value="ورود"
          styles={`${styles.Public_Styles}, ${styles.Login_Styles}`}
          label="Login Page"
        />
      </div>
    </section>
  );
}
