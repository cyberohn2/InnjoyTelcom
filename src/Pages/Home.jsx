import Cta from "../Components/Cta";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

const Home = () =>{
    return(
        <div >
            <Hero />
            <Services />
            <Testimonials />
            <Cta />
        </div>
    )
}

export default Home;