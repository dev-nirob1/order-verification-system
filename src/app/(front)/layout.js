import Footer from "../components/front/Footer";
import Navbar from "../components/front/Navbar";
import { CheckoutProvider } from "../contextProvider/CheckoutContext";

export default function FrontLayout({ children }) {
    return (
        <div>
            <CheckoutProvider>
                <Navbar />
                {children}
                <Footer />
            </CheckoutProvider>
        </div>
    );
}