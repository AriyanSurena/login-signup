import Link from "next/link";

interface FormFooterProps {
    url: string,
    value: string
}

export default function FormFooter({url, value}: FormFooterProps) {
    return(
        <Link
        href={url}
        className="text-blue-500 hover:text-teal-500 dark:hover:text-teal-500"
      >
        {value}        
      </Link>
    )
}