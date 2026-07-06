import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";

export default function Layout({ children }) {
  return (<div className="flex min-h-sceen">
    <Sidebar />
    {/* <div className="flex-col flex-1 lg:pl-65">
      <Topbar />
      {children}
    </div> */}
  </div>);
}
