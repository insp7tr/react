import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Frameworks } from "./components/Frameworks";
import { Contact } from "./components/contact/Contact";
import { Development } from "./components/development/Development";
import Nav from "./layouts/nav/Nav";
import Services from "./components/services/Services";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Frameworks />
      <Development />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
