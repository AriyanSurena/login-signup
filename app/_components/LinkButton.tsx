import Link from "next/link";
interface RegistrationPageProps {
  url: string;
  value: string;
  styles: string;
  label:string;
}

export default function LinkButton({ url, value, styles, label }: RegistrationPageProps) {
  return (
    <Link
      href={`${url}`}
      aria-label={label}
      className={styles}
    >
      {value}
    </Link>
  );
}
