import CounterSection from "../components/landing/CounterSection";
import CtaSection from "../components/landing/CtaSection";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <CounterSection />
            <Features/>
            <CtaSection/>
        </div>
    );
};

export default LandingPage;