import React from "react"

function ProductCard({ product, handleCart, cart }) {

  return (
    <div key={product.id} className="col mb-5">
      <div className="card h-100">
        {product.sale && (
          <div className="text-white position-absolute badge bg-dark " style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
        )}
        <img src="./image.jpg" className="card-img-top" alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>

            {product.rating && (
              <div className="small text-warning mb-2 d-flex justify-content-center">
                <p>{product.rating}</p>
              </div>
            )}
            <p className="card-text">

              {product.price.map((price, index) => (
                <span key={index} className={index === 0 && [2, 3, 5, 7].includes(product.id) ? 'price-line-through' : ""}>{price}</span>
              ))}
            </p>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">

          {product.buttonvalue === "View Options" ? (
            <button className="btn btn-outline-dark ">View Options</button>
          ) : (
            <button className="btn btn-outline-dark " onClick={() => handleCart(product.id)}>

              {cart.some(item => item.id === product.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductCard