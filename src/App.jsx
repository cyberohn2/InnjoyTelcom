import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SignUp from "./Pages/SignUp"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Reviews from "./Pages/Reviews"
import ScrollToTop from "./Components/ScrollToTop"

function App() {

  return (
    <div className="bg-[#dce3f1] font-veitnam">
      <Router >
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/our-reviews" element={<Reviews />}></Route>
          {/* other routes */}
        </Routes>
        <Footer />
        {/* non changing component */}
      </Router>
    </div>
  )
}

export default App
