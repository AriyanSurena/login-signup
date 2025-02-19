import Link from "next/link";
interface LoginButtonProps {
    url: string;
}

export default function LoginButton({ url } : LoginButtonProps) {

    return(
        <Link
            href = {`${url}`}
            aria-label = "login to site"
            className="opacity-90 hover:opacity-1 hover:text-white w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center bg-[#1D4ED8] hover:bg-[#173cb3] transition duration-150 ease-in-out dark:bg-[#4F46E5] dark:hover:bg-[#0026a1]" 
        >
            ورود
        </Link>
    )
}