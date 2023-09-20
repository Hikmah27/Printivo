import React from 'react'
import { FiFacebook} from 'react-icons/fi'
import { FaInstagram } from "react-icons/fa";
import {RxTwitterLogo} from "react-icons/rx";
import {SlSocialLinkedin} from "react-icons/sl";
import styles  from "./Footer.module.css";
import payment from "../../../Images/payment.png";
import shipping from "../../../Images/shipping.png";

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className="row text-light p-5 pb-5">
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12" style={{ marginLeft: "50px" }}>
                        <ul>
                            <li>
                                <p className='fw-bolder'>Printivo</p>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Track Order</a>
                            </li>
                            <li>
                                <a href="">Printivo Promise</a>
                            </li>
                            <li>
                                <a href="">Printivo Blog</a>
                            </li>
                            <li>
                                <a href="">Career</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12" style={{ marginLeft: "80px" }}>
                        <ul>
                            <li>
                                <p className='fw-bolder'>Help and Information</p>
                            </li>
                            <li>
                                <a href="">Paper Quality</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="">Font Licenses</a>
                            </li>
                            <li>
                                <a href="">Shipping and Delivery</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12" style={{ marginLeft: "80px" }}>
                        <ul>
                            <li>
                                <p className='fw-bolder'>Make Money</p>
                            </li>
                            <li>
                                <a href="">Refer a friend & earn N1,000</a>
                            </li>
                            <li>
                                <a href="">Become a Reseller</a>
                            </li>
                            <li>
                                <a href="">Sell your Designs</a>
                            </li>
                            <li>
                                <a href="">Merch Store</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-xl-2 col-xxl-2 col-md-2 col-sm-12" style={{ marginLeft: "80px" }}>
                        <h5>Follow Us</h5>
                        <div className="d-flex mt-4">
                            <FiFacebook className='me-3' />
                            <RxTwitterLogo className='ms-2' />
                            <SlSocialLinkedin className='ms-4' />
                            <FaInstagram className='ms-4' />
                        </div>
                        <h5 className='mt-4 mb-3'>Accepted Payments</h5>
                        <img src={payment} alt="" style={{ width: "100%" }} />
                        <h5 className='mt-3'>Delivery</h5>
                        <img src={shipping} alt="" style={{ width: "90%" }} />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer