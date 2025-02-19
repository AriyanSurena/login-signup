"use client";
import Link from "next/link";
import {ModeToggle} from "./ModeChecker";
export default function Header({ text }: { text: string }) {

  return (
    <span className="flex justify-between items-center">
      <h1 id="registery_Page-title" className="form-page_h1">
        {text}
      </h1>
      <div className="flex items-center dark">
        <ModeToggle/>
        <Link href={"./"} className="p-4 cursor-pointer" title="بازگشت">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-blue-500 hover:fill-blue-950 dark:hover:fill-blue-100"
            width="40px"
            height="40px"
            viewBox="0 -960 960 960"
            fill="#"
          >
            <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z" />
          </svg>
        </Link>
      </div>
    </span>
  );
}
