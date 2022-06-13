import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import Products from "./pages/Products";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/create-product" element={<CreateProduct />} />
          <Route exact path="/product/:id" element={<Details />} />
          {/* <Route exact path="/my-pokemon" element={<MyPokemon />} />  */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
