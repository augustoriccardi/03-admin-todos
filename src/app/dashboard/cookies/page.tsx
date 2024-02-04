import { cookies } from "next/headers";
import { TabBar } from "@/components";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = Number(cookieStore.get("selectedTab")?.value ?? "1");

  const allCookies = cookieStore.getAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 dark:text-gray-300">
      <div className="flex flex-col">
        <span className="text-3xl dark:text-gray-300">Tabs</span>
        <TabBar currentTab={cookieTab} />
        <br />
        {JSON.stringify(allCookies)}
      </div>
    </div>
  );
}
