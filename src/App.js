import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Header from "./Header"
import ProductCard from "./ProductCard"
import Footer from "./Footer"
function App() {
  // State for cart and count
  const [cart, setCart] = useState([]);// State for cart items
  const [cartCount, setCartCount] = useState(0); // State for cart item count
  // Dummy product data
  const data = [
    // Product objects
    {
      id: 1,
      name: "Fancy Product",
      rating: null,
      price: ["$40.00 - $80.00"],
      sale: null,
      buttonvalue: "View options"
    },
    {
      id: 2,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 3,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 4,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 5,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 6,
      name: "Fancy Product",
      rating: null,
      price: ["$120.00 - $280.00"],
      sale: null,
      buttonvalue: "View Options"
    },
    {
      id: 7,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 8,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
  ];
  // Function for adding and remving items from cart
  const handleCart = (productId) => {
    
    const item = data.find(product => product.id === productId);
    

    const isItemInCart = cart.some(item => item.id === productId);
    
    if (isItemInCart) {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
      setCartCount(prevCount => prevCount - 1);
    } else {
      setCart([...cart, item]);
      setCartCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      <Navbar cartCount={cartCount} setCart={setCart} />

      <Header />

      <section className="py-5">
        <div className="container mt-5 px-4 px-lg-5">
          <div className="row  row-cols-xl-4 row-cols-xxl-4 justify-content-center gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-4">

            {data.map(product => (
              <ProductCard key={product.id} product={product} handleCart={handleCart} cart={cart} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default App;