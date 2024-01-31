import React, { useState } from 'react'
import { Facebook, Insta, Rescarch, Tiwtter } from './Icon'
import Hamburger from 'hamburger-react'
import building from '../assets/image/webp/building.webp'

const Hero_section = () => {
    const [Show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    if (Show === true) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }


    return (
        <div>
            <div className='container !max-w-[1320] mx-auto  px-4'>
                <nav className=' flex justify-end   gap-[37px] lg:pt-11 pt-4  lg:pb-9 pb-3  items-center'>
                    <ul className={`flex lg:justify-end bg-white justify-center gap-[51px] ${Show ? 'left-0' : 'left-[-100%]'} h-full w-full  flex-col lg:flex-row top-0 text-center z-20   items-center duration-500 fixed lg:static`}>
                        <li><a href="" className=' ff_roboto font_midum  font-normal text-base text-[#025066]  duration-150 ease-out'>HOME</a></li>
                        <li><a href="" className=' ff_roboto font_midum font-normal text-base text-[#025066] transition-all duration-150 ease-out'>PORTFOLIO</a></li>
                        <li><a href="" className=' ff_roboto font_midum font-normal text-base text-[#025066]  duration-150 ease-out'>BLOG</a></li>
                        <li><a href="" className=' ff_roboto font_midum font-normal text-base text-[#025066]  duration-150 ease-out'>CONTACT</a></li>
                        <li><a href="" className=' ff_roboto font_midum font-normal text-base text-[#025066]  duration-150 ease-out'>SHOP</a></li>

                    </ul>
                    <span className=' z-20 cursor-pointer'> <Rescarch /></span>
                    <div className='z-30 lg:hidden' onClick={() => setShow(!Show)}>
                        <button className='{ show ?}'><Hamburger toggled={isOpen} toggle={setOpen} /></button>
                    </div>
                </nav>
            </div>
            <div className=' hero_img pb-[23px] lg:pt-[169px] pt-4  relative bg-no-repeat bg-cover bg-center'>
                <div className=' container !max-w-[1320px] mx-auto px-4'>
                    <div className=' lg:flex-row flex-col'>
                        <div className='w-full lg:w-1/2'>

                            <h1 className=' lg:text-7xl mx-auto lg:mx-0 text-center lg:text-start sm:text-6xl text-[43px] lg:leading-[89.775px] leading-[55px] sm:leading-[75px]   max-w-[498px] font-bold ff_roboto text-white' data-aos="fade-right">Morbi facilisis nulla purus, ac  </h1>

                            <p className=' text-lg font-normal mx-auto lg:mx-0 text-center lg:text-start text-white max-w-[539px] ff_roboto lg:pt-10 pt-3 lg:pb-[61px] pb-3' data-aos="fade-right">Mauris viverra justo et dictum mattis. Donec massa felis, tempus nec erat id, fermentum rhoncus justo. Donec viverra quam nulla, id faucibus metus ullamcorp</p>
                            <div className=' flex justify-center lg:justify-start' data-aos="fade-right">
                                <button className=' text-[#025066] hover:text-white border-[1px] border-[#fff] hover:bg-[#025066] duration-300 ease-in-out text-xl font-medium ff_roboto lg:mb-20 mb-0 bg-white mt-1 lg:px-[33px] lg:py-[18px] py-[12px] px-[20px]  rounded-[10px]'>CONTACT NOW</button></div>
                            <div className=' flex gap-[13px] items-center justify-center lg:justify-start mt-3 lg:pt-20 pt-5 mb-5' data-aos="fade-right">
                                <a href="https://www.facebook.com/" target='blank' className='cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Facebook /></a>
                                <a href="https://www.facebook.com/" target='blank' className='cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Tiwtter /></a>
                                <a href="https://www.instagram.com/" target='blank' className='cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Insta /></a>
                            </div>

                        </div>
                        <div className='w-full lg:w-1/2 lg:hidden' data-aos="fade-left">
                            <img className=' w-full max-w-[941px]' src={building} alt="" />
                        </div>
                    </div>
                </div>
                <div className=' w-1/2 right-0 top-[19%] hidden lg:block absolute' data-aos="fade-left">
                    <img className=' w-full max-w-[941px]' src={building} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero_section