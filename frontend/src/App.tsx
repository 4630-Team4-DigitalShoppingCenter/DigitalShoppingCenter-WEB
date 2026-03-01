import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Digital Shopping Center</Link>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
          </div>
        </header>

        <main className="main">
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
              x
            </button>
          </aside>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/:id" element={<OrderDetail />} />
          
            </Routes>
          </div>
        </main>

        <footer className="footer">
          All rights reserved. &copy; 2022 Digital Shopping Center
        </footer>
      </div>
    </Router>
  );
}

export default App;