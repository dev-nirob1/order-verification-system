import CounterSection from "../components/front/CounterSection";
import FaqSection from "../components/front/FaqSection";
import Features from "../components/front/Features";
import Hero from "../components/front/HeroSection";
import Specification from "../components/front/Specification";
import Testimonials from "../components/front/Testimonials";
import Gallery from "../components/front/Gallery";
import Craftsmanship from "../components/front/Craftmanship";
import Sidebar from "../components/checkout/CheckoutSidebar";
import CtaSection from "../components/front/CtaSection";
import OrdersForm from "../components/front/OrdersForm";

const LandingPage = () => {
    return (
        <div>
            <OrdersForm />
            <Hero />
            {/* <OrderForm /> */}
            <CounterSection />
            <Features />
            <Gallery />
            <Specification />
            <FaqSection />
            <Craftsmanship />
            <Testimonials />
            {/* <CtaSection/> */}
            <Sidebar />
            {/* <OrderForm/>
            <CtaSection/> */}
        </div>
    );
};

export default LandingPage;