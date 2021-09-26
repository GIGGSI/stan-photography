import { useState } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { HomePage, PortfolioPage, PricingPage, AboutPage, CarouselPage } from './pages'
import { Navbar, Dropdown, Footer, Chevron } from './components'
import { GLobalStyle, ScrollToTheTop } from './utils'

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
    </Switch>
    <Chevron />
    <Footer />
  </>
}

export default App;
