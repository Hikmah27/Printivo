import React from 'react'

const Shop = () => {
    return (
        <div>
            {/* PINK DIV */}
            <div id="carouselExampleInterval" className="carousel slide text-light p-5 pb-5" data-bs-ride="carousel" style={{ backgroundColor: "rgb(243,177,205)" }}>
                <div className="carousel-inner">
                    <div className="carousel-item active text-center text-black fw-bold" data-bs-interval="1000">
                        Stickers Promo
                        <span className='text-decoration-underline text-dark fw-lighter ms-2'><a href="#" className='text-dark'>Shop Now</a></span>
                    </div>
                    <div className="carousel-item text-center text-black fw-bold" data-bs-interval="1500">
                        10% Off Brochure & Flyer
                        <span className='text-decoration-underline text-dark fw-lighter ms-2'><a href="#" className='text-dark'>Shop Now</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop