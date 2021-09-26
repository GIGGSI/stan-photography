import { useState } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import GLobalStyle from './utils/GlobalStyles';
import ScrollToTheTop from './utils/ScrollToTheTop'
import HomePage from './pages/HomePage/HomePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import PricingPage from './pages/PricingPage/PricingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import CarouselPage from "./pages/CarouselPage/CarouselPage";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return <>
    <GLobalStyle />
    <ScrollToTheTop />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/carousel/:id" component={CarouselPage} />
      {/* <Route path="/contact" component={ContactPage} /> */}
    </Switch>
    <Footer />
  </>
}

export default App;
