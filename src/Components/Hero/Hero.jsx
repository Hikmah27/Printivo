import React from 'react'
import {BsCart } from 'react-icons/bs';
import image from "../../../Images/navImage.svg"
import heroImage from "../../../Images/heroImg.webp"
import search from "../../../Images/search.svg"
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div>
            <section className='p-4 pb-5' style={{ backgroundColor: "rgb(236, 232, 217)" }}>
                <div className='d-flex'>
                    <div>
                        <img src={image} className='mt-2' style={{ marginLeft: "60px" }} />
                    </div>
                    <div className="">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav" style={{ fontWeight: "500" }}>
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary me-3" aria-current="page" href="#" style={{ marginLeft: "200px" }}>All Products</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link active text-secondary" href="#">Become a Reseller</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link active text-secondary" href="#">Merch Store</a>
                                        </li>
                                        <li className="nav-item me-4">
                                            <a className="nav-link active text-secondary" href="#">Marketplace</a>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link active text-danger" href="#">Sign in</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-secondary" href="#">Create Account</a>
                                        </li>
                                    </ul>
                                    <BsCart className='ms-5 fs-5' />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* HERO CONTAINER */}
                <div className={styles.hero}>
                    <div style={{ height: "60%", width: "80%" }}>
                        <h1 className={styles.quality}>Quality Prints</h1>
                        <h2 className={styles.doorstep}>Shipped to your doorstep</h2>
                        <h3 className={styles.print} >What would you like to print today?</h3>
                        <div>
                            <input type="text" placeholder='Search for Business cards, T-shirts, Mugs, etc' className={styles.input} />
                            <img src={search} alt="" className={styles.search} />
                        </div>
                    </div>
                    <div>
                        <img src={heroImage} className='mt-5' style={{ marginLeft: "230px", width: "65%" }} />
                    </div>
                </div>
            </section>
        </div> 
    )
}

export default Hero