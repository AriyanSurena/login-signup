import Link from "next/link"

export default function Home() {
    const Styles: {
        labelStyle_1: string,
        labelHeadStyle_1: string,
        inputStyle_1: string
    } = {
        labelStyle_1 : "flex flex-col select-none cursor-pointer gap-2",
        labelHeadStyle_1 : "flex flex-col select-none cursor-pointer gap-2",
        inputStyle_1 : "rounded p-2"
    }

  return (
    <form className="flex flex-col gap-6" action="#">
        <span className="flex justify-between items-center">
            <h1 id="registery_Page-title" className="form-page_h1">
            ورود به حساب کاربری
            </h1>
            <Link href={"./"} className="p-4" title="بازگشت">
                <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-500" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z"/></svg>
            </Link>
      </span>
        <label 
            className={Styles.labelStyle_1}>
                <span
                    className={Styles.labelHeadStyle_1}>
                        حساب کاربری :
                </span>
                <input 
                    type="email" 
                    name="userEmail" 
                    id="userEmail" 
                    className={Styles.inputStyle_1} 
                    placeholder="لطفا آدرس ایمیل را وارد کنید" 
                    required />

                <span 
                    className="error_message">

                </span>
        </label>
        <label
            className={Styles.labelStyle_1}>
                <span 
                    className={Styles.labelHeadStyle_1}>
                        رمز حساب :
                </span>
            <input 
                type="password" 
                name="userPass" 
                id="userPass" 
                className={Styles.inputStyle_1} 
                placeholder="لطفا رمز حساب کاربری را وارد کنید" 
                required/>

            <span 
                className="error_message">

            </span>
        </label>
        <input 
            type="submit" 
            className="opacity-90 w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center bg-[#1D4ED8] hover:bg-[#1E40AF] transition duration-150 ease-in-out dark:bg-[#4F46E5] dark:hover:bg-[#4338CA] hover:opacity-1 hover:text-white"
            value="ورود"/>

        <Link
            href={"./../registery/"}
            className="text-blue-100 hover:text-blue-500">
                حسابی ندارید؟ ثبت نام کنید.
        </Link>
    </form>
  )
}