import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";
import { SidebarProvider } from "../context/SidebarContext";
import Sidebar from "../components/landing/Sidebar";

export default function FrontLayout({ children }) {
    return (
        <SidebarProvider>
            <div>
                <Navbar />
                {children}
                <Sidebar />
                <Footer />
            </div>
        </SidebarProvider>
    );
}