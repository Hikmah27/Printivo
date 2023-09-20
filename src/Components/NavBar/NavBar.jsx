import React from 'react'
import whatsapp from "../../../Images/whatsapp.svg"
import flag from "../../../Images/flag.svg"
import styles  from "./NavBar.module.css";


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className={styles.toplink}>
              <ul className="navbar-nav" style={{ fontWeight: "500", color: "rgb(56, 74, 98)" }}>
                <li className="nav-item">
                  <a className="cost nav-link active text-secondary" aria-current="page" href="#" style={{ marginLeft: "60px", display: "block" }}>Cost Calculator</a>
                </li>
                <li className="nav-item">
                  <a className="discover nav-link active text-secondary" href="#" style={{ display: "block" }}>Discover Stores</a>
                </li>
                <li className="nav-item">
                  <a className="track nav-link active text-secondary" href="#" style={{ display: "block" }}>Track Orders</a>
                </li>
                <li className="help nav-item active mt-2 text-secondary" style={{ marginLeft: "250px", display: "block" }}>Need help? Call:<a href='' className='numbers mx-1 text-primary' style={{ display: "block" }}>+2348091084333</a>
                </li>
              </ul>
            </div>
            <img src={whatsapp} className='whatsapp mx-5'  style={{ display: "block" }} />
            <div className='Nigeria rounded-5 mx-5' style={{ padding: "8px 10px", border: "1px solid #cbcac8", display: "block" }}>
              <img src={flag} className='mx-2' />
              <span className='text-secondary' style={{ fontWeight: "500" }}>Nigeria</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar