import React from "react";
import { useTheme } from "./ThemeContext"; // مسیر صحیح را وارد کنید
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const { isDarkMode } = useTheme();

  return (
    <main
      className={clsx(
        `w-full h-full min-h-screen transition duration-500 py-4`,
        {
          "bg-black text-white": isDarkMode, // Dark Mode
          "bg-white text-black": !isDarkMode, // Light Mode
        }
      )}
    >
      <section
        className={clsx(
          "flex flex-col p-4 mx-auto rounded transition duration-500 lg:shadow-[0_0px_100px_0px_rgb(169,169,169)] xl:shadow-[0_0px_100px_0px_rgb(169,169,169)] 2xl:shadow-[0_0px_100px_0px_rgb(169,169,169)] w-full sm:w-[100%] md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[40%]",
          {
            "bg-[#222222] text-white": isDarkMode, // Dark Mode
            "bg-[#e4f3ff] text-black": !isDarkMode, // Light Mode
          }
        )}
      >
        {children}
      </section>
    </main>
  );
}
