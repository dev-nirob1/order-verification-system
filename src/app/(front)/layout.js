import Footer from "../components/front/Footer";
import Navbar from "../components/front/Navbar";
import { SidebarProvider } from "../context/SidebarContext";
import Sidebar from "../components/front/Sidebar";

export default function FrontLayout({ children }) {
    return (
        <SidebarProvider>
            <div>
                <Navbar />
                {children}
                {/* <Sidebar /> */}
                {/* <Footer /> */}
            </div>
        </SidebarProvider>
    );
}