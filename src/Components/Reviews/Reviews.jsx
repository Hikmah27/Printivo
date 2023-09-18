import React from 'react'

const Reviews = () => {
    return (
        <div>
            <div className="p-5" style={{ backgroundColor: "rgb(237,246,253)" }}>
                <div className='text-secondary' style={{ marginLeft: "50px" }}>
                    <h2>What Customers Say About Us
                        <span role='img'>🙌🏾</span>
                    </h2>
                    <div className="row mt-4 ms-1 pb-5">
                        <div className="card col-lg-4 col-sm-12 col-md-4 me-4" style={{ width: "24rem" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                    <img src="images/twitter.svg" alt="" className='rounded-circle p-2 border border-1 bg-light' />
                                    <h5 className="card-title ms-3 col-7">Amina Ebele
                                        <span><a href="#" className='mx-1'>@DeliciousAmina</a></span>
                                    </h5>
                                </div>
                                <p className="card-text ms-5">I am now the unofficial
                                    <span><a href="#" className='fw-bold'> @Printivo</a></span>  <br />
                                    ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-12 col-md-4 me-4" style={{ width: "24rem" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                    <img src="images/twitter.svg" alt="" className='rounded-circle p-2 border border-1 bg-light' />
                                    <h5 className="card-title ms-3 col-7">Oluwatosin
                                        <span><a href="#" className='mx-1'>@tosingirlfx</a></span>
                                    </h5>
                                </div>
                                <p className="card-text ms-5">
                                    <span><a href="#" className='fw-bold me-1'>@Printivo</a></span>
                                    delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
                            </div>
                        </div>
                        <div className="card col-lg-4 col-sm-12 col-md-4" style={{ width: "24rem" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                    <img src="images/twitter.svg" alt="" className='rounded-circle p-2 border border-1 bg-light' />
                                    <h5 className="card-title ms-3 col-7">Oluwatosin
                                        <span><a href="#" className='mx-1'>@olgablark</a></span>
                                    </h5>
                                </div>
                                <p className="card-text ms-5">These guys
                                    <span><a href="#" className='fw-bold me-1'> @Printivo</a></span>
                                    are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews