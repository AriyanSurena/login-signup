import RegistrationButton from "./_components/RegistrationButton";
import LoginButton from "./_components/LoginButton";

export default function Home() {
  return (
    <section>
      <h1 className="">ثبت نام یا ورود</h1>
      <div className="flex flex-col">
        <RegistrationButton url={"./registery"} />
        <LoginButton url={"./login/"} />
      </div>
    </section>
  );
}
