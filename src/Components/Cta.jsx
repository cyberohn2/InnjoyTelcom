import { useEffect, useState, useRef } from "react";
import PryCtaBtn from "./PryCtaBtn";

const Cta = () => {
    const [happyCustomers, setHappyCustomers] = useState(0);
    const [peopleSubscribed, setPeopleSubscribed] = useState(0);
    const ctaSectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ctaSectionRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (ctaSectionRef.current) {
            observer.observe(ctaSectionRef.current);
        }

        return () => {
            if (ctaSectionRef.current) {
                observer.unobserve(ctaSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const incrementNumber = (target, setFunction, duration = 2000) => {
                let start = 0;
                const increment = target / (duration / 16);
                const interval = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        start = target;
                        clearInterval(interval);
                    }
                    setFunction(Math.floor(start));
                }, 16);
            };

            incrementNumber(5200, setHappyCustomers);
            incrementNumber(225, setPeopleSubscribed);
        }
    }, [isVisible]);

    return (
        <section ref={ctaSectionRef} className="py-20 text-center bg-white max-w-[1440px] mx-auto">
            <h2 className="font-semibold sm:font-bold text-[2rem] leading-tight mb-12 max-w-[80%] mx-auto">
            Contact us today to learn more about our services and take your remote work to the next level!
            </h2>
            <div className="grid grid-cols-3 mb-6">
                <div>
                    <p className="text-lg sm:text-5xl">+{happyCustomers}</p>
                    <p>Happy Customers</p>
                </div>
                <div className="border-r border-l">
                    <p className="text-lg sm:text-5xl">100%</p>
                    <p>Work Quality</p>
                </div>
                <div>
                    <p className="text-lg sm:text-5xl">+{peopleSubscribed}</p>
                    <p>People Subscribed</p>
                </div>
            </div>
            <div className="visme_d" data-title="Untitled Project" data-url="017v4ok0-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="87263"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
            <PryCtaBtn link="/sign-up" text="Sign Up Now" />
        </section>
    );
};

export default Cta;
