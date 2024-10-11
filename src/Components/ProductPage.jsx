
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './CardData';
import './Card.css';
import Artshopbanner from './Banner';
import { useState } from 'react';

export default function ProductCard() {
  const [cartItem, setCartItem] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleAddToCart = (price) => {
    setCartItem((items) => items + 1)
    setTotalPrice((totalprice) => totalprice + price)
  }

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">HC Art Shop</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <h6 className='mt-3 mr-1'>Total: ₹{totalPrice}</h6>
            <button className="btn btn-lg btn-light" type="button">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-light text-black ms-1 rounded-pill">{cartItem}</span>
            </button>
          </form>
        </div>
      </nav>
      <Artshopbanner />
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product, index) => (
          <div className="card p-2 m-3" key={index} style={{ width: '16rem' }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-price">₹{product.price}</h5>
              <h5 className="card-title">{product.title}</h5>
              <button className="btn btn-light btn-addtocart" onClick={()=>handleAddToCart(product.price)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}