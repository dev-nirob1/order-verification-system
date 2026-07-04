import CounterSection from "../components/landing/CounterSection";
import CtaSection from "../components/landing/CtaSection";
import FaqSection from "../components/landing/FaqSection";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";
import Specification from "../components/landing/Specification";
import Testimonials from "../components/landing/Testimonials";
import Gallery from "../components/landing/Gallery";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <CounterSection />
            <Features/>
            <Gallery/>
            <Specification/>
            <FaqSection/>
            <Testimonials/>
            <CtaSection/>
        </div>
    );
};

export default LandingPage;