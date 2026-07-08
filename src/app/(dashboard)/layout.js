import Sidebar from "@/app/components/dashboard/Sidebar";
import Topbar from "@/app/components/dashboard/Topbar";
import { SidebarProvider } from "@/app/contextProvider/SidebarContext";
import { DrawerProvider } from "../contextProvider/DrawerContext";
import Drawer from "../components/drawers/Drawer";

export default function Layout({ children }) {
  return (<div className="min-h-screen">
    {/* sidebar context  */}
    <SidebarProvider>
      <DrawerProvider>

        <Sidebar />
        <div className="flex flex-col flex-1 lg:pl-65">
          <Topbar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      <Drawer/>
      </DrawerProvider>
    </SidebarProvider>
  </div>);
}
