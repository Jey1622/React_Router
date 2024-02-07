import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contantus from "./pages/Contantus";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/contactus" Component={Contantus} />
          <Route path="/signup" Component={Signup} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
