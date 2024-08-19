import Cta from "../Components/Cta";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import { useEffect } from "react"


const Home = () =>{
    useEffect(() => {
        document.title = "Innjoy Telcom | Reliable Telecommunication Solutions"; 
      }, []);

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