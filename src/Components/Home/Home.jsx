import React from 'react'
import Apk from '../../assets/Home/Apk.jpg'
import cellphones from '../../assets/Home/cellphones.jpg'
import iphone13 from '../../assets/Home/Iphone-13Promax.jpg'
import samsungGalaxy from '../../assets/Home/SamsungGalaxy-s10.jpg'
import Product from '../Product/Product'


const Home = () => {
    return(
        <>
            <div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >

                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />

                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />

                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />

                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={3}
                        aria-label="Slide 4"
                    />

                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cellphones} alt="phones"  className="d-block w-100" height="504px"/>
                    </div>

                    <div className="carousel-item">
                        <img src={samsungGalaxy} alt="apk"  className="d-block w-100" height="504px"/>
                    </div>

                    <div className="carousel-item">
                        <img src={iphone13} alt="apk"  className="d-block w-100" height="504px"/>
                    </div>

                    <div className="carousel-item">
                        <img src={Apk} alt="apk"  className="d-block w-100" height="504px"/>
                    </div>
                </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    > 
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Product />
            </div>

        </>
    )
}

export default Home