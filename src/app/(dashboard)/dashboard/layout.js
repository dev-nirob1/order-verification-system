import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";

export default function Layout({ children }) {
  return (<div className="min-h-sceen">
    <Sidebar />
    {/* <div className="flex flex-col flex-1"> */}
    {/* <Topbar /> */}

    <div className="flex flex-col flex-1 lg:pl-65">
      <Topbar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  </div>);
}
