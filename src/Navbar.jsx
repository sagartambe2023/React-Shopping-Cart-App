import React from "react"

function Navbar({ cartCount, setCart }) {
    // navbar componant created to render navigation
    return (
        // Navigation bar 
        <nav className="navbar navbar-expand-lg bg-light container px-4 px-lg-5 navbar-light">
            <a className="brandname" href="#!">ShopOnline.com</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    {/* Men section link */}
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current='page' href="#!">MEN</a>
                    </li>
                    {/* Women section link link */}
                    <li className="nav-item">
                        <a className="nav-link" href="#!">WOMEN</a>
                    </li>
                    {/* Kids section link link */}
                    <li className="nav-item">
                        <a className="nav-link" href="#!">KIDS</a>
                    </li>
                    {/* Home and Living menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            HOME & LIVING
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#!">All Products</a>
                            </li>
                            <hr className="dropdown-divider" />
                            <li>
                                <a className="dropdown-item" href="#!">Trending</a>
                            </li>
                            <a className="dropdown-item" href="#!">Discount On</a>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="button" onClick={() => setCart([])}>
                        <i className="bi-cart-fill.me-1 bi bi-cart" /> Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
                    </button>
                </form>

            </div>
        </nav>
    )
}
export default Navbar;