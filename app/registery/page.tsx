import Link from "next/link";

export default function RegistrationPage() {
  const Styles = {
    labelStyle_1 : "flex flex-col gap-2",
    inputStyle_1 : "p-2 text-black rounded",
    labelHeadStyle_1 : "select-none cursor-pointer"
  }

  return (
    <form id="form" className="flex flex-col gap-6">
      <span className="flex justify-between items-center">
        <h1 id="registery_Page-title" className="form-page_h1">
          فرم ثبت نام
        </h1>
        <Link href={"./"} className="p-4" title="بازگشت">
          <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-500" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z"/></svg>
        </Link>
      </span>
      
      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>نام :</span>
        <input
          type="text"
          name="userFirstname"
          id="userFirstname"
          className={Styles.inputStyle_1}
          placeholder="لطفا نام را وارد کنید"
          required
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>نام خانوادگی :</span>
        <input
          type="text"
          name="userLastname"
          id="userLastname"
          className={Styles.inputStyle_1}
          placeholder="لطفا نام خانوادگی را وارد کنید"
          required
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>حساب کاربری :</span>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          className={Styles.inputStyle_1}
          placeholder="لطفا آدرس ایمیل را وارد کنید"
          required
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>رمز حساب :</span>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className={Styles.inputStyle_1}
          placeholder="لطفا رمز حساب کاربری را وارد کنید"
          required
        />
        <span className="error_message"></span>
      </label>

      <label className={Styles.labelStyle_1}>
        <span className={Styles.labelHeadStyle_1}>تکرار پسورد :</span>
        <input
          type="password"
          name="userPassConfirm"
          id="userPassConfirm"
          className={Styles.inputStyle_1}
          placeholder="رمز حساب کاربری را دوباره وارد کنید"
          required
        />
        <span className="error_message"></span>
      </label>

      <label className={`flex gap-2 flex-row`}>
        <input
          type="checkbox"
          name="checkbox-rules"
          id="checkbox-rules"
          className={`w-[3rem] cursor-pointer`}
          required
        />
        <span className={Styles.labelHeadStyle_1}>قوانین را قبول دارم.</span>
      </label>

      <input
        type="submit"
        id="submit"
        className={`${Styles.inputStyle_1} bg-[#10B981] hover:bg-[#047857] transition duration-150 ease-in-out dark:bg-[#059669] dark:hover:bg-[#065F46] opacity-90 w-[100%] p-4 m-4 mx-auto text-xl cursor-pointer select-none border-none rounded text-center hover:text-white hover:opacity-1`}
        value="ثبت نام"
      />
        <Link
            href={"./../login/"}
            className="text-blue-100 hover:text-blue-500">
                از قبل حساب دارید؟ وارد شوید.
        </Link>
    </form>
  );
}
