import React from 'react'
import ellips from '../assets/image/webp/ellips.webp'
import arrow from '../assets/image/webp/Arrow.webp'
import arrow1 from '../assets/image/webp/Arrow1.webp'
import { Star } from './Icon'
import Slider from "react-slick";

const Testimonials = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 900,
                }
            }
        ]
    };
    return (
        <div className=' lg:pb-28 pb-6'>
            <div className=' container relative !max-w-[1320px] mx-auto px-4'>

                <div className='hidden sm:block absolute z-10 top-[43%] btn sm:left-[17%] left-[4%] cursor-pointer'><img onClick={(arrow) => slider?.current?.slickPrev()} src={arrow} alt="" /></div>
                <div className='hidden sm:block absolute top-[43%] sm:right-[17%] right-[4%] z-10'><img onClick={(arrow1) => slider?.current?.slickNext()} src={arrow1} alt="" /></div>
                <p className=' ff_roboto font-medium text-black text-xl text-center lg:pt-20 pt-6 mt-2'>TESTIMONIALS</p>
                <h3 className='text-[#025066] xl:text-5xl sm:text-4xl text-[30px] font-bold text-center lg:pt-5 pt-3'>What Clients say about us</h3>
                <div>
                    <Slider ref={slider} {...settings}>
                        <div className='lg:pt-12 pt-8'>
                            <div className=' flex justify-center'>
                                <img src={ellips} alt="" />
                            </div>
                            <p className=' text-center ff_roboto font-bold text-base text-[#025066] pt-5'>TREGSDKH</p>
                            <span className='text-center flex justify-center lg:pt-7 pt-3'><Star /></span>
                            <div className=' flex justify-center lg:pt-5 pt-3'>
                                <p className=' text-center max-w-[469px] text_rgba'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                        <div className='pt-12'>
                            <div className=' flex justify-center'>
                                <img src={ellips} alt="" />
                            </div>
                            <p className=' text-center ff_roboto font-bold text-base text-[#025066] pt-5'>TREGSDKH</p>
                            <span className='text-center flex justify-center lg:pt-7 pt-3'><Star /></span>
                            <div className=' flex justify-center lg:pt-5 pt-3 pb-3'>
                                <p className=' text-center max-w-[469px] text_rgba'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            </div>
                        </div>
                    </Slider>
                </div>


            </div>
        </div>
    )
}

export default Testimonials