import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="backgradient p-3">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}
export default App;
