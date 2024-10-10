import 'bootstrap/dist/css/bootstrap.min.css';
import Artshopbanner from './Components/Banner';
import ProductCard from './Components/Card';

function App() {
  return (
  <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">HC Art Shop</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <button className="btn btn-lg btn-light" type="submit">
            <i className="bi-cart-fill me-1"></i>Cart <span className="badge bg-light text-black ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </nav>
      <Artshopbanner />
      <ProductCard />
    </div>
  );
}

export default App;
