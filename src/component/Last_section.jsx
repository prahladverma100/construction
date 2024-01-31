import React from 'react'
import { Facebook, Insta } from './Icon'
import footer_logo from '../assets/image/webp/footer_logo.webp'

const Last_section = () => {
    return (
        <div className=' pb'>
            <div className='bg_img bg-cover bg-[58%] sm:bg-[57%] lg:bg-[center] bg-no-repeat'>
                <div className='container relative !max-w-[1320px] mx-auto px-4'>
                    <div className=' flex lg:flex-row flex-col pb-6'>
                        <div className='w-full lg:w-1/2 ' data-aos="fade-right">
                            <div className='pt-[60px] mx-auto'>
                                
                                <input type="text" className='py-[14px] ps-4 mx-auto flex justify-center lg:justify-start lg:mx-0 border-[1px] border-[#025066] my-[14px] outline-none rounded-[6px] w-full max-w-[594px] text-sm ff_roboto font-medium' placeholder='Phone Number' />
                                <input type="text" className='py-[14px] ps-4 mx-auto flex justify-center lg:justify-start lg:mx-0 border-[1px] border-[#025066] my-[14px] outline-none rounded-[6px] w-full max-w-[594px] text-sm ff_roboto font-medium' placeholder='E-Mail' />
                                <textarea type="text" className='mx-auto flex justify-center lg:justify-start lg:mx-0 pt-[14px] pb-[92px] resize-none ps-4 border-[1px] border-[#025066] outline-none rounded-[6px] w-full max-w-[594px] text-sm ff_roboto font-medium' placeholder='Message'></textarea>
                            </div>
                            <button className='flex justify-center mx-auto border-[1px] border-[#025066] lg:mx-0 hover:text-[#025066] text-white  hover:bg-[#FFFF] bg-[#025066] duration-300 ease-in-out text-xl font-medium ff_roboto lg:mb-20 mb-4  mt-7 py-[12px] px-[20px] lg:px-[33px] lg:py-[18px] rounded-[10px]'>CONTACT NOW</button>
                        </div>
                        <div className='w-full lg:w-1/2 lg:pt-9 pt-5' data-aos="fade-down">
                            <div className=' flex justify-end lgtext-center text-center lg:text-end'>
                                <h4 className=' ff_roboto  lg:text-[61px] text-[40px] sm:text-[50px] leading-[50px] lg:leading-[64px] font-normal lg:max-w-[348px] w-full text-white'>How we can help you?</h4>
                            </div>
                            <div>
                                <div className=' flex lg:justify-end justify-center pt-4 lg:pt-8'>
                                    <p className=' text-white ff_roboto font-normal text-base max-w-[331px] lg:text-end text-center'>Quisque vel nisl blandit sem tempor dignissim. Sed maximus efficitur neque</p>
                                </div>
                                <p className=' lg:text-end text-center lg:pt-9 pt-4 text-white ff_roboto font-normal text-base'>Phone Number:+1235265652</p>
                                <p className=' lg:text-end text-center text-white ff_roboto font-normal text-base'>Address:Nam convallis feugiat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-16 bg-[#025066]'>
                <div className='container relative !max-w-[1320px] mx-auto px-4 '>
                    <div className='pt-2 flex lg:flex-row items-center pb-16  flex-col justify-between'>
                        <div className='w-full lg:w-1/2 ' data-aos="fade-right">
                            <img className=' cursor-pointer mx-auto lg:mx-0' src={footer_logo} alt="" />
                            <p className=' text-white max-w-[433px] text-center lg:text-start mx-auto lg:mx-0 pt-8 pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                            <div className='flex gap-[15px] justify-center lg:justify-start'>
                                <a href="https://www.instagram.com/" target="_blank" className='cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Insta /></a>
                                <a href="https://www.facebook.com/" target='_blank' className='cursor-pointer hover:translate-y-[-5px] duration-300 ease-in-out'><Facebook /></a>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2 flex lg:justify-end justify-center flex-wrap sm:gap-16 pt-4 gap-5' data-aos="fade-up"
                            data-aos-duration="1500">

                            <ul>
                                <li><a href="" className=' font-normal ff_roboto text-base text-white'>Renovation</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 e'>Carpentry</a></li>
                                <li className='sm:pt-[21px] pt-4'><a href="" className=' font-normal ff_roboto text-base after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Tiling</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base text- after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Ceiling</a></li>
                            </ul>


                            <ul>
                                <li><a href="" className=' font-normal ff_roboto text-base text-white'>Renovation</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Carpentry</a></li>
                                <li className='sm:pt-[21px] pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Tiling</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Ceiling</a></li>
                            </ul>


                            <ul>
                                <li><a href="" className=' font-normal ff_roboto text-base text-white'>Renovation</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Carpentry</a></li>
                                <li className='sm:pt-[21px] pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Tiling</a></li>
                                <li className='pt-4'><a href="" className=' font-normal ff_roboto text-base  after:right-0 footerline text-white after:w-0 after:h-[2px] after:bg-white after:left-0 after:absolute relative  after:bottom-[-3px] after:hover:w-full after:hover:left-0  after:duration-300 '>Ceiling</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#033A49] w-full py-5 justify-center flex text-base font-normal ff_roboto text-white'>Copyright@IS Company2021 </div>
            </div>
        </div>
    )
}

export default Last_section