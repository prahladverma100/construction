import React from 'react'
import { Play_btn } from './Icon'
import white_hom from '../assets/image/webp/white_hom.webp'

const Construction = () => {
    return (
        <div className=' lg:pt-20 pt-7'>
            <div className=' mt-6 container !max-w-[1320px] mx-auto px-4'>
                <div className=' lg:flex-row flex flex-col-reverse items-end'>

                    <div className='w-full lg:w-6/12' data-aos="fade-right">

                        <p className=' ff_roboto text-[#000000] font-medium pt-3 xl:pt-0 text-center lg:text-start'>OUR SERVICES</p>
                        <h3 className='xl:text-5xl sm:text-4xl text-[29px] text-[#025066] font-bold pt-0 xl:pt-4 xl:max-w-[400px] w-full text-center lg:text-start'>Construction building.</h3>
                        <p className='text_rgba ff_roboto text-base leading-[22px] font-normal text-center lg:text-start flex justify-end pt-2 xl:pt-8 xl:max-w-[446px] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque dictum sapien, eu luctus neque nulla non ante. Quisque pharetra facilisis mauris a hendrerit. Donec rutrum maximus turpis id luctus. In gravida pulvinar elit, a auctor mauris scele risque ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla facilis</p>
                        <div className=' flex pt-2 xl:pt-7  gap-2 justify-center lg:justify-start'>
                            <p className=' text-base text-[#025066] cursor-pointer ff_roboto font-bold'>VIEW PROJECTS</p>
                            <span className=' cursor-pointer'><Play_btn /></span>
                        </div>


                    </div>
                    <div className='w-full lg:w-6/12 flex justify-center' data-aos="fade-left">
                        <img className=' w-full max-w-[689px] ' src={white_hom} alt="" />
                    </div>
                </div>

            </div>
            <div className='container !max-w-[1320px] xl:pt-28 pt-7 mt-3 mx-auto px-4'>
                <div className=' flex lg:flex-row flex-wrap items-end'>
                    <div className='w-full xl:w-3/12 flex justify-center lg:justify-start ' data-aos="fade-up-right">
                        <div className=' border-[#025066] xl:w-[141px] sm:w-[500px] w-full border-[1px]'>
                            <div className='xl:pt-7 pt-0 px-4 xl:px-0  flex xl:block items-center'>
                                <p className='text-colum  text-center xl:mx-auto mx-0 flex justify-center font-bold text-base ff_roboto'>OUR WORK</p>
                                <div className='xl:w-[1px]  w-[100px] flex justify-center mx-auto xl:h-[168px] h-[1px] mb-7  mt-6 bg-[#025066]'></div>
                                <h4 className=' ff_roboto text-[#025066] text-[51px] font-medium xl:ps-11 xl:pe-9'>02</h4>

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-9/12' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <div className=' flex xl:justify-end justify-center'>
                            <h4 className='xl:text-5xl sm:text-4xl text-[30px] text-[#025066] max-w-[482px] font-bold pt-4 text-center xl:text-right'>Mauris viverra justo et dictum mattis. </h4>
                        </div>
                        <div className=' flex xl:justify-end justify-center pb-7'>
                            <p className='text_rgba xl:text-right text-center ff_roboto text-base leading-[22px] font-normal max-w-[656px] xl:pt-14 pt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Construction