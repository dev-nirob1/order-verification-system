import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";

export default function FrontLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}