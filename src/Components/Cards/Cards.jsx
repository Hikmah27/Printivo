import React from 'react'
import { businessCards } from "../../../Images/businessCards.jpg";
import { flyer } from "../../../Images/flyer.jpg";

const Cards = () => {
    return (
        <div>
            <div className='p-5 mx-5'>
                <div className='row mb-3'>
                    <h3 className='col-lg-6 col-md-6 col-sm-6 text-secondary'>Popular Products</h3>
                    <a href="#" className='col-lg-6 col-md-6 col-sm-6 text-end text-decoration-none text-danger fs-5 fw-bold'>See All Products</a>
                </div>
                <div>
                    <div className="row mb-4">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-1 border border-1" style={{ height: "100%" }}>
                                <img src={businessCards} className="card-img-top" alt="business cards" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Two-sided Business Cards</h5>
                                    <p className="card-text fw-bold mt-2">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦9,700
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-1 w-100">
                                        <span>Browse Two-sided BU...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src={flyer} className="card-img-top" alt="flyer" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">A5 flyers (Single Sided)</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦16,500
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse A5 flyers (S ...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-1 border border-1" style={{ height: "100%" }}>
                                <img src="images/roundStickers.jpg" className="card-img-top" alt="Round Stickers" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Round Stickers (3.5" Diameter)</h5>
                                    <p className="card-text fw-bold mt-2">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦10,900
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-1 w-100">
                                        <span>Browse Round Sticke...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/simpleMugs.jpg" className="card-img-top" alt="Simple mugs" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Simple Mugs</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦3,000
                                        <span className='ms-2'>per 1</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse Simple Mugs</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECOND CARDS CONTAINER */}
                    <div className="row mb-4">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/postcards.jpg" className="card-img-top" alt="post cards" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Postcards (A6)</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦14,200
                                        <span className='ms-2'>per 50</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse Postcards (A...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-1 border border-1" style={{ height: "100%" }}>
                                <img src="images/rollupBanner.jpg" className="card-img-top" alt="banner" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Roll Up Banners (Big Base)</h5>
                                    <p className="card-text fw-bold mt-2">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦35,200
                                        <span className='ms-2'>per 1</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-1 w-100">
                                        <span>Browse Roll Up Bann...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/posters.jpg" className="card-img-top" alt="Posters" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">A2 Posters</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦45,500
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse A2 Posters</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/brochure.jpg" className="card-img-top" alt="Trifold Brochure" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Trifold Brochures</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦30,400
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse Trifold Broc...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THIRD CARDS CONTAINER */}
                    <div className="row mb-1">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/landscapeId.jpg" className="card-img-top" alt="business cards" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Landscape ID Cards</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦2,000
                                        <span className='ms-2'>per 1</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse Landscape ID...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/tShirt.jpg" className="card-img-top" alt="flyer" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">Off White T-shirts</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦3,800
                                        <span className='ms-2'>per 1</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse Off T-...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/aFour.jpg" className="card-img-top" alt="Round Stickers" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">A4 Branded Paper Bags</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦67,000
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse A4 Branded P...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                            <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                                <img src="images/courier.jpg" className="card-img-top" alt="Simple mugs" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title fs-5">A4 Courier Bags</h5>
                                    <p className="card-text fw-bold mt-3">STARTING AT</p>
                                    <h3 className="card-text fs-5">₦17,600
                                        <span className='ms-2'>per 100</span>
                                    </h3>
                                    <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                        <span>Browse A4 Courier B...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MINI CARDS CONTAINER */}
            <div className='p-5 mx-5'>
                <div className='row mb-2'>
                    <h3 className='col-lg-6 col-md-6 col-sm-6 text-secondary'>Popular Categories</h3>
                    <a href="#" className='col-lg-6 col-md-6 col-sm-6 text-end text-decoration-none text-danger fs-5 fw-bold'>See All Categories</a>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                        <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                            <img src="images/greetingCards.jpg" className="card-img-top" alt="greeting cards" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title fs-5">Greeting Cards</h5>
                                <p className="card-text fw-bold mt-3">STARTING AT</p>
                                <h3 className="card-text fs-5">₦19,000
                                    <span className='ms-2'>per 50</span>
                                </h3>
                                <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                    <span>Browse Greeting Car...</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" style={{height: "27rem"}}>
                        <div className="card text-secondary pb-3 border border-1" style={{ height: "100%" }}>
                            <img src="images/stickers.jpg" className="card-img-top" alt="flyer" style={{ width: "100%", height: "14rem", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title fs-5">Stickers</h5>
                                <p className="card-text fw-bold mt-3">STARTING AT</p>
                                <h3 className="card-text fs-5">₦5,400
                                    <span className='ms-2'>per 75</span>
                                </h3>
                                <a href="#" className="btn btn-danger pe-2 mt-2 w-100">
                                    <span>Browse Stickers</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards