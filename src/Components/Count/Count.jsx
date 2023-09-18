import React from 'react'

const Count = () => {
    return (
        <div>
            <section className="bg-white p-4 pb-5">
                <div className="text-secondary mt-5 pb-5" style={{ marginLeft: "80px" }}>
                    <h2>You can count on us for:</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="d-flex">
                                <div>
                                    <img src="images/topFirst.svg" alt="" />
                                </div>
                                <div className='ms-2'>
                                    <h5 className='fw-bolder'>Fast Turnaround Within Days</h5>
                                    <p className='fw-5'>Your order gets to you within 3- <br /> 7 working days via DHL or our <br /> very own Printivo Direct.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex">
                                <div>
                                    <img src="images/topSecond.svg" alt="" />
                                </div>
                                <div className='ms-2'>
                                    <h5 className='fw-bolder'>100% Top Quality</h5>
                                    <p className='fw-5'>Only the finest materials, <br />
                                        machines and people will be <br /> involved in fulfilling your order.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-flex">
                                <div>
                                    <img src="images/topThird.svg" alt="" />
                                </div>
                                <div className='ms-2'>
                                    <h5 className='fw-bolder'>Affordable Services</h5>
                                    <p className='fw-5'>All products are adequately <br /> priced to ensure you get value <br /> for your money at all times.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Count