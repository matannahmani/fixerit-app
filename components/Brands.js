import React from 'react';
import Swiper from 'react-id-swiper';

const Brands = () => {

    const params = {
        slidesPerView : 5,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 5
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
    }

    return (
        <div className="brand-one">
            <div className="container">
                <div className="brand-one__carousel owl-carousel owl-theme">

                    <Swiper {...params}>
                        <div className="item">
                            <img src="/assets/images/partners/google.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/partners/windows.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/partners/apple.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/partners/qnap.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/partners/avast.png" alt="" />
                        </div>
                        <div className="item">
                            <img src="/assets/images/partners/linux.png" alt="" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Brands;