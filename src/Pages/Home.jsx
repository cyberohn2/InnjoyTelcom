import Cta from "../Components/Cta";
import Hero from "../Components/Hero";
import Pricing from "../Components/Pricing";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Home = () =>{
    return(
        <div >
            <Hero />
            <Services />
            <Testimonials />
            <Pricing />
            <Cta />
        </div>
    )
}

export default Home;