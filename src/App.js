import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Coin from "./components/Coin";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coin />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coin/:id' element={<CoinDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
