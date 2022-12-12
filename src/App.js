import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navi from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Popular from "./components/Popular/Popular";
import Recently from "./components/Recently/Recently";

function App() {
  return (
    <div className="App">
      <Navi />
      <Header />
      <About />
      <Popular />
      <Recently />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
