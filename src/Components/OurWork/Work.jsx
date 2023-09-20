import React from 'react'
import first from "../../../Images/first.svg";
import second from "../../../Images/second.svg";
import third from "../../../Images/third.png";
import fourth from "../../../Images/fourth.svg";
import fifth from "../../../Images/fifth.svg";


const Work = () => {
    return (
        <div>
            <main className="p-4 pb-5" style={{ backgroundColor: "rgb(247,246,244)" }}>
                <div className="text-secondary mt-5" style={{ marginLeft: "85px" }}>
                    <h2 className='pt-4'>Our amazing work got noticed by:</h2>
                    <div className="row">
                        <div className='col-lg-2 col-sm-12 col-md-2 col-xl-2 col-xxl-2'>
                            <img src= {first} alt="" className='mb-2 mt-4' />
                            <br />
                            <a href="#" className='text-secondary ms-2 fw-bolder'>Read the article here</a>
                        </div>
                        <div className='col-lg-2 col-sm-12 col-md-2 col-xl-2 col-xxl-2 ms-5 '>
                            <img src= {second} alt="" className='mb-2 mt-4' />
                            <br />
                            <a href="#" className='text-secondary ms-2 fw-bolder'>Read the article here</a>
                        </div>
                        <div className='col-lg-2 col-sm-12 col-md-2 col-xl-2 col-xxl-2 ms-5'>
                            <img src= {third} alt="" className='mb-2 mt-4' />
                            <br />
                            <a href="#" className='text-secondary ms-2 fw-bolder'>Read the article here</a>
                        </div>
                        <div className='col-lg-2 col-sm-12 col-md-2 col-xl-2 col-xxl-2 ms-5'>
                            <img src= {fourth} alt="" className='mb-2 mt-4' />
                            <br />
                            <a href="#" className='text-secondary ms-2 fw-bolder'>Read the article here</a>
                        </div>
                        <div className='col-lg-2 col-sm-12 col-md-2 col-xl-2 col-xxl-2 ms-5'>
                            <img src= {fifth} alt="" className='mb-2 mt-4' />
                            <br />
                            <a href="#" className='text-secondary ms-2 fw-bolder'>Read the article here</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Work