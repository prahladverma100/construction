import React from 'react'
import construction from '../assets/image/webp/construction.webp'
import construction_work from '../assets/image/webp/construction_work.webp'
import company from '../assets/image/webp/company.webp'
import { Play_btn } from './Icon'

const Constrution_worker = () => {
    return (
        <div className='bg-[#025066] lg:pt-16 pt-5 lg:pb-20 pb-7'>
            <div className=' container mx-auto px-4 !max-w-[1320px]'>
                <div className=' flex lg:flex-row flex-wrap justify-between '>
                    <div className=' w-full pt-4  lg:w-[31%]' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className=' bg-white  w-full max-w-[411px] px-[15px] pt-4 pb-[29px] box_shadow mx-auto rounded-[5px]'>
                            <img className=' w-full' src={construction} alt="" />
                            <p className=' ff_roboto text-[25px] leading-[34px] font-bold text-[#025066] pt-5'>Lorem ipsum dolo </p>
                            <p className='  text-base text_rgba font-normal ff_roboto pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper </p>
                                <div className='flex pt-6 gap-2'>
                                    <p className=' text-base ff_roboto cursor-pointer text-[#025066] font-bold'>VIEW PROJECTS</p>
                                    <span className=' cursor-pointer' ><Play_btn /></span>
                                </div>
                        </div>
                    </div>
                    <div className=' w-full pt-4 lg:w-[31%]' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className=' bg-white w-full mx-auto max-w-[411px] px-[15px] pt-4 pb-[29px] box_shadow rounded-[5px]'>
                            <img className=' w-full' src={construction_work} alt="" />
                            <p className=' ff_roboto text-[25px] leading-[34px] font-bold text-[#025066] pt-5'>Lorem ipsum dolo </p>
                            <p className='  text-base text_rgba font-normal ff_roboto pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper </p>
                            <div className=' flex pt-6 gap-2'>
                                <p className=' text-base ff_roboto cursor-pointer text-[#025066] font-bold'>VIEW PROJECTS</p>
                                <span className=' cursor-pointer'><Play_btn /></span>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full pt-4 lg:w-[31%]' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className=' bg-white w-full mx-auto max-w-[411px] px-[15px] pt-4 pb-[29px] box_shadow rounded-[5px]'>
                            <img className=' w-full' src={company} alt="" />
                            <p className=' ff_roboto text-[25px] leading-[34px] font-bold text-[#025066] pt-5'>Lorem ipsum dolo </p>
                            <p className='  text-base text_rgba font-normal ff_roboto pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper </p>
                            <div className=' flex pt-6 gap-2'>
                                <p className=' text-base ff_roboto cursor-pointer text-[#025066] font-bold'>VIEW PROJECTS</p>
                                <span className=' cursor-pointer'><Play_btn /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Constrution_worker