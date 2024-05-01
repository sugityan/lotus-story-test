import { MenuTable } from "./components/table/table";
import { EmailForm } from "./components/email/email";
import { AboutUs } from "./components/aboutUs/about-us";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between bg-white mx-40">
      <MenuTable />
      <AboutUs />
      <EmailForm orders={[]} isConfirm={false} />
    </main>
  );
}
