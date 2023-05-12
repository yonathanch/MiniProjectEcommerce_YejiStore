import React from 'react'
import { Link } from 'react-router-dom'
import us from '../../../public/assets/About/us.jpg'

const About = () => {
    
    return (
        <>
            <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-secondary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        We are an online store that focuses on selling mobile phones at affordable prices with the best quality. With over 6 years of experience in this industry, we are 
                        committed to providing the best service to our customers by ensuring they get the right and satisfactory products. We also 
                        offer a variety of mobile phone choices from various well-known brands with diverse specifications, as well as fast and secure 
                        delivery services to all regions in Indonesia. We take pride in being your trusted partner in fulfilling your mobile phone 
                        needs
                        </p>
                        <Link to="/contact" className="btn btn-dark px-3">Contact Us</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={us} alt="us"  className="d-block w-100" height="500px" width="500px"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default About