import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from "./Components/Navigation";
import Home from "./Paths/Home"
import About from "./Paths/About";
import Contact from "./Paths/Contact";
import Products from "./Components/Products/Products"
import Cart from "./Components/Cart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
