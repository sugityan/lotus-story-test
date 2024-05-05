import { MenuTable } from "./components/table/table";
import { EmailForm } from "./components/email/email";
import { AboutUs } from "./components/aboutUs/about-us";

export default function Home() {
  return (
    <main className="flex flex-col bg-white px-10 py-10 w-full justify-center items-center">
      <MenuTable />
      <div className="my-5"></div>
      <AboutUs />
      <div className="mb-5"></div>
      <EmailForm orders={[]} isConfirm={false} />
    </main>
  );
}
