import React from 'react'
import house1 from '../assets/image/webp/house1.webp'
import { Play, Play_btn } from './Icon'

const Make_unique = () => {
    return (
        <div className='xl:pt-24 pt-4'>
            <div className=' container !max-w-[1320px] mx-auto px-4'>
                <div className=' lg:flex-row flex flex-col  items-end'>
                    <div className='w-full lg:w-7/12 flex justify-center lg:justify-start' data-aos="fade-right">
                        <div className=' relative'>
                            <img className=' w-full h-full' src={house1} alt="" />
                            <span className=' cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><Play /></span>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12'>

                        <p className=' ff_roboto text-[#000000] font-medium flex lg:justify-end pt-4 lg:pt-2 justify-center' data-aos="fade-left">OUR SERVICES</p>
                        <div className=' flex lg:justify-end lg:text-end text-center justify-start'>
                            <h3 className='xl:text-5xl sm:text-4xl text-[29px]  text-[#025066] font-bold pt-0 xl:pt-4 lg:max-w-[400px] w-full' data-aos="fade-left">Solutions interior design</h3>
                        </div>
                        <div className='flex lg:text-end text-center lg:justify-end justify-center'>
                            <p className='text_rgba ff_roboto text-base font-normal leading-[22px] flex justify-end xl:pt-6 pt-3   lg:max-w-[368px] w-full' data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                        </div>
                        <div className='flex xl:pt-7 pt-2 gap-2 lg:justify-end justify-center' data-aos="fade-left">
                            <p className='text-base text-[#025066] cursor-pointer ff_roboto font-bold'>VIEW PROJECTS</p>
                            <span className=' cursor-pointer'><Play_btn /></span>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Make_unique