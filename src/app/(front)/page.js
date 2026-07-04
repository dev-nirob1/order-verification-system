import CounterSection from "../components/landing/CounterSection";
import Features from "../components/landing/Features";
import Hero from "../components/landing/Hero";

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <CounterSection />
            <Features/>
        </div>
    );
};

export default LandingPage;