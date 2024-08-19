import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Reviews from "./Pages/Reviews"
import ScrollToTop from "./Components/ScrollToTop"
import SignIn from "./Pages/SignIn"
import Pricing from "./Pages/Pricing"
import SuccessPage from "./Pages/SuccessPage"
import HowToPay from "./Pages/HowToPay"
import SendReview from "./Pages/SendReview"
import DeleteReviewForm from "./Pages/DeleteReviewForm"

function App() {

  return (
    <div className="bg-[#dce3f1] font-veitnam scroll-smooth">
      <Router >
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/sign-in" element={<SignIn />}></Route>
          <Route exact path="/our-reviews" element={<Reviews />}></Route>
          <Route exact path="/select-plan" element={<Pricing />}></Route>
          <Route exact path="/success-page" element={<SuccessPage />}></Route>
          <Route exact path="/how-to-pay" element={<HowToPay />}></Route>
          <Route exact path="/send-review" element={<SendReview />}></Route>
          <Route exact path="/delete-review" element={<DeleteReviewForm />}></Route>
          {/* other routes */}
        </Routes>
        <Footer />
        {/* non changing component */}
      </Router>
    </div>
  )
}

export default App
