import "./App.css";
import "./Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductList} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
