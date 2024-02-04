// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen">
        <TopMenu />
        <div className="px-6 pt-6 pb-5 dark:bg-gray-800 min-h-screen">
          {children}
        </div>
      </div>
    </>
  );
}
