import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava06 from '../../assets/images/ava-6.jpg'

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
            "The noise and electronic failure mitigation system is a game-changer for flight operations. Reducing disruptions will definitely enhance overall safety and efficiency. Great work!"
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'> Ridhi Arora</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "The integration of advanced technologies in these services shows a forward-thinking approach. It's reassuring to see such dedication to improving flight safety and efficiency."
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-10 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Alena Kaur</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            "Impressive work on all fronts! These advancements are exactly what the aviation industry needs to stay ahead in safety and technology."
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Ayush Jain</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "I appreciate the comprehensive approach to tackling multiple aspects of flight safety and efficiency. Each feature complements the others well. Kudos to the team!"
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Ishita</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            "It's great to see innovative solutions to common aviation challenges. These services will undoubtedly make flights safer and more reliable."
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava06} className='w-25 h-35 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Archit</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

    </Slider>

}

export default Testmonial