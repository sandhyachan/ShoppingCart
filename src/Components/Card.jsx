import 'bootstrap/dist/css/bootstrap.min.css';
import products from './CardData';
import './Card.css'

export default function ProductCard() {
  return ( <div className='d-flex flex-wrap justify-content-center'>
    {products.map((product, index)=> (
    <div className="card p-2 m-3" key={index} style={{width: '16rem'}}>
    <img 
    src={product.image} className="card-img-top" alt={product.title}/>
    <div className="card-body">
    <h5 className="card-price">₹{product.price}</h5>
    <h5 className="card-title">{product.title}</h5>
      <a href="#" className="btn btn-light btn-addtocart">
                  Add to Cart
              </a>
    </div>
  </div>
  
  ))}
  </div>);
}

