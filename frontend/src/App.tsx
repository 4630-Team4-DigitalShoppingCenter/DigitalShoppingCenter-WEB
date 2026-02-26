import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  return (
     <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Digital Shopping Center</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <main className="main">
        <aside className = "sidebar">
          <h3>Shopping Categories</h3>
          <button className = "sidebar-close-button" onClick={closeMenu}>x</button>
        </aside>
        
        <div className = "content">
          <ul className = "products">
            <li>
              <div className = "product">
                <img className = "product-image" src="/images/d1.jpg" alt = "product" />
                <div className = "product-name">
                  <a href = "product.html">Slim Shirt</a>
                </div>
                <div className = "product-brand"> Nike</div>
                <div className = "product-price"> $60</div>
                <div className = "product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className = "product-image" src="/images/d1.jpg" alt = "product" />
                <div className = "product-name">
                  <a href = "product.html">Slim Shirt</a>
                </div>
                <div className = "product-brand"> Nike</div>
                <div className = "product-price"> $60</div>
                <div className = "product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className = "product-image" src="/images/d1.jpg" alt = "product" />
                <div className = "product-name">
                  <a href = "product.html">Slim Shirt</a>
                </div>
                <div className = "product-brand"> Nike</div>
                <div className = "product-price"> $60</div>
                <div className = "product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className = "product-image" src="/images/d1.jpg" alt = "product" />
                <div className = "product-name">
                  <a href = "product.html">Slim Shirt</a>
                </div>
                <div className = "product-brand"> Nike</div>
                <div className = "product-price"> $60</div>
                <div className = "product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className = "product">
                <img className = "product-image" src="/images/d1.jpg" alt = "product" />
                <div className = "product-name">
                  <a href = "product.html">Slim Shirt</a>
                </div>
                <div className = "product-brand"> Nike</div>
                <div className = "product-price"> $60</div>
                <div className = "product-rating">4.5 Stars (10 Reviews)</div>
               </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        All rights reserved. &copy; 2022 Digital Shopping Center
      </footer>
    </div>
  );
}

export default App;
