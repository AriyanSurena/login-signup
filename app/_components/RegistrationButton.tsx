import Link from "next/link";
interface RegistrationPageProps {
  url: string;
}

export default function RegistrationButton({ url }: RegistrationPageProps) {
  return (
    <Link
      href={`${url}`}
      aria-label="Registration button on the site"
      className="bg-[#10B981] opacity-90 hover:bg-[#047857] hover:opacity-1 hover:text-white transition duration-150 dark:bg-[#059669] dark:hover:bg-[#065F46] w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center"
    >
      ثبت نام
    </Link>
  );
}
