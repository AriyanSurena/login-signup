import clsx from "clsx";

interface SubmitInputProps {
  value: string;
  active: boolean;
  variant?: number;
}

export default function SubmitInput({
  value,
  active,
  variant,
}: SubmitInputProps) {
  return (
    <input
      type="submit"
      disabled={active}
      className={clsx(
        `opacity-90 hover:opacity-1 my-4 disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:text-slate-50 hover:text-white w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center`,
        {
          "bg-[#10B981] hover:bg-[#047857] dark:bg-[#059669] dark:hover:bg-[#065F46]":
            variant === 1,
          "bg-[#1D4ED8] hover:bg-[#173cb3] transition duration-150 dark:bg-[#4F46E5] dark:hover:bg-[#0026a1]":
            variant === 2,
        }
      )}
      value={value}
    />
  );
}
