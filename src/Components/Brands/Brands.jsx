import React from 'react'
import groupImg from "../../../Images/groupImg.png";
import styles from "./Brands.module.css";

const Brands = () => {
    return (
        <div>
            {/* IMAGES CONTAINER */}
            <div className='mb-3 pb-5' style={{ marginLeft: "90px" }}>
                <div className="text-secondary pb-3">
                    <h2 className='fw-bolder mt-5'>
                        Nigeria’s No. 1 online print shop
                        <span role='img'>👑</span>
                    </h2>
                    <h4 className='fw-bold mt-4'>Our print services and solutions are trusted by these brands and <br /> over 15,000 other businesses in Nigeria.</h4>
                    <div className={styles.images}>
                        <img src={groupImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands