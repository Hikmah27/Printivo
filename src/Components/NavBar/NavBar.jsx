import React from 'react'
import whatsapp from "../../../Images/whatsapp.svg"
import flag from "../../../Images/flag.svg"


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ fontWeight: "500", color: "rgb(56, 74, 98)" }}>
              <li className="nav-item">
                <a className="nav-link active text-secondary" aria-current="page" href="#" style={{ marginLeft: "60px" }}>Cost Calculator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#">Discover Stores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-secondary" href="#">Track Orders</a>
              </li>
              <li className="nav-item active mt-2 text-secondary" style={{ marginLeft: "250px" }}>Need help? Call:<a href='' className='mx-1 text-primary'>+2348091084333</a>
              </li>
            </ul>
            <img src={whatsapp} className='mx-5' />
            <div className='rounded-5 mx-5' style={{ padding: "8px 10px", border: "1px solid #cbcac8" }}>
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