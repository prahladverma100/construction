import React from 'react'
import building1 from '../assets/image/webp/building1.webp'
import building2 from '../assets/image/webp/building2.webp'
import building3 from '../assets/image/webp/building3.webp'
import home from '../assets/image/webp/home.webp'
import building4 from '../assets/image/webp/building4.webp'
import glasses from '../assets/image/webp/glasses.webp'

const Bulding = () => {
    return (
        <div className=' lg:pt-20 pt-7  lg:pb-24 pb-7 bg-[#025066]'>
            <div className=' container mx-auto px-2 !max-w-[1320px]'>
                <div className='flex lg:flex-row flex-wrap justify-between '>
                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={building1} alt="" />
                    </div>
                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={glasses} alt="" />
                    </div>
                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={building2} alt="" />
                    </div>
                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={home} alt="" />
                    </div>

                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={building3} alt="" />
                    </div>
                    <div className=' w-full md:w-1/2 flex justify-center pt-5 lg:w-4/12 px-[9px]' data-aos="flip-down">
                        <img className=' max-w-[428px] w-full' src={building4} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bulding