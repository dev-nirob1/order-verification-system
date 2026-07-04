import CounterSection from "../components/landing/CounterSection";
import CtaSection from "../components/landing/CtaSection";
import FaqSection from "../components/landing/FaqSection";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <CounterSection />
            <Features/>
            <FaqSection/>
            <CtaSection/>
        </div>
    );
};

export default LandingPage;