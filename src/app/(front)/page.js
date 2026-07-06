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

const LandingPage = () => (
    <div>
        <Hero />
        <CounterSection />
        <Features />
        <Gallery />
        <Specification />
        <FaqSection />
        <Craftsmanship />
        <Testimonials />
        <CtaSection />
        <Sidebar />
    </div>
);

export default LandingPage;