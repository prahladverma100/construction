import React from 'react'
import { Play_btn } from './Icon'
import house from '../assets/image/webp/house.webp'

const Over_services = () => {
    return (
        <div className=' lg:pt-24 pt-5  pb-16'>
            <div className=' container !max-w-[1320px] pt-5 px-4 mx-auto'>
                <div className=' flex-row flex justify-between   flex-wrap'>
                    <div className='w-full xl:w-3/12 flex justify-center lg:justify-start ' data-aos="fade-right">
                        <div className=' border-[#025066] xl:w-[141px] sm:w-[500px] w-full border-[1px]'>
                            <div className='xl:pt-7 pt-0 px-4 xl:px-0  flex xl:block items-center'>
                                <p className='text-colum  text-center xl:mx-auto mx-0 flex justify-center font-bold text-base ff_roboto'>HERW WE DO</p>
                                <div className='xl:w-[1px]  w-[100px] flex justify-center mx-auto xl:h-[168px] h-[1px] mb-7  mt-6 bg-[#025066]'></div>
                                <h2 className=' ff_roboto text-[#025066] text-[51px] font-medium xl:ps-11 xl:pe-9'>01</h2>

                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 xl:w-4/12 pe-3' data-aos="fade-up"
                        data-aos-duration="1500">
                        <p className=' ff_roboto text-[#000000] text-center lg:text-start pt-4 xl:pt-0 font-medium text-xl '>OUR SERVICES</p>
                        <h3 className='xl:text-5xl sm:text-4xl text-[30px]  text-[#025066] font-bold text-center lg:text-start xl:pt-4 pt-1 xl:max-w-[280px] w-full'>Construction building.</h3>
                        <p className='text_rgba ff_roboto leading-[22px] text-center lg:text-start text-base font-normal xl:pt-9 pt-3 xl:max-w-[368px] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                        <div className='play flex pt-7 gap-2 justify-center lg:justify-start'>
                            <p className=' text-base cursor-pointer text-[#025066] ff_roboto font-bold'>VIEW PROJECTS</p>
                            <span className=' cursor-pointer'><Play_btn /></span>
                        </div>
                    </div>
                    <div className=' w-full lg:w-6/12 xl:w-5/12' data-aos="fade-left">
                        <img className=' w-full h-full mx-auto lg:mx-0 max-w-[503px] max-h-[572px]' src={house} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Over_services