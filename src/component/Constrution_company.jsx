import React from 'react'
import worker from '../assets/image/webp/worker.webp'

const Constrution_company = () => {
    return (
        <div className=' xl:pt-20 pt-7'>
            <div className='container !max-w-[1320px] mx-auto px-4'>
                <div className=' lg:flex-row flex flex-col items-center'>
                    <div className=' w-full lg:w-6/12' data-aos="fade-right">
                        <p className=' ff_roboto font-medium text-xl pb-6 text-center lg:text-start'>OTHER SERVICES</p>
                        <h3 className=' font-bold ff_roboto xl:text-5xl sm:text-4xl text-[30px] w-full lg:max-w-[420px] mx-auto lg:mx-0 lg:text-start text-[#025066] text-center lg:justify-start xl:pb-11 pb-5'>Gates Construction Company</h3>
                        <p className=' text-[25px] text-[#025066] font-normal text-center lg:text-start mx-auto lg:mx-0 ff_roboto xl:pt-8 pt-4'>Best Builing Material</p>
                        <p className=' text-base text_rgba font-normal ff_roboto text-center lg:text-start mx-auto lg:mx-0 xl:pt-4 pt-2 max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        <p className=' text-[25px] text-[#025066] text-center lg:text-start mx-auto lg:mx-0 font-normal ff_roboto xl:pt-8 pt-4'>Experience Workers </p>
                        <p className=' text-base text_rgba font-normal ff_roboto text-center lg:text-start mx-auto lg:mx-0  xl:pt-4 pt-2 max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                        <p className=' text-[25px] text-[#025066] font-normal text-center lg:text-start mx-auto lg:mx-0 ff_roboto xl:pt-8 pt-4'>Modern Technologies</p>
                        <p className=' text-base text_rgba font-normal ff_roboto text-center lg:text-start mx-auto lg:mx-0  xl:pt-4 pt-2 max-w-[469px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. s</p>
                    </div>
                    <div className='w-full lg:w-6/12 flex lg:justify-end justify-center' data-aos="fade-left">
                        <img className=' w-full max-w-[620px]' src={worker} alt="" />
                    </div>
                </div>
            </div>
            <div className='container !max-w-[1320px] mx-auto px-4 xl:pt-20 pt-7'>
                <div className=' flex xl:flex-row flex-col items-end'>
                    <div className='w-full xl:w-3/12 flex  justify-center xl:justify-start mb-[17px]' data-aos="fade-right">
                        <div className=' border-[#025066] xl:w-[141px] sm:w-[500px] w-full border-[1px]'>
                            <div className='xl:pt-7 pt-0 px-4 xl:px-0  flex xl:block items-center'>
                                <p className='text-colum  text-center xl:mx-auto mx-0 flex justify-center font-bold text-base text-[#025066] ff_roboto'>GALLERY WORKS</p>
                                <div className='xl:w-[1px]  w-[100px] flex justify-center mx-auto xl:h-[168px] h-[1px] mb-7  mt-6 bg-[#025066]'></div>
                                <h3 className=' ff_roboto text-[#025066] text-[51px] font-medium xl:ps-11 xl:pe-9'>03</h3>

                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-8/12 pb-7 lg:pb-14' data-aos="fade-left">
                        <div className=' flex xl:justify-end justify-center'>
                            <h4 className='xl:text-5xl sm:text-4xl text-[30px] text-[#025066] w-full  xl:max-w-[482px] font-bold pt-4 text-center xl:text-right'>Our Portfolio Gallery</h4>
                        </div>
                        <div className=' flex xl:justify-end justify-center'>
                            <p className='text_rgba xl:text-right text-center ff_roboto text-base leading-[22px] font-normal max-w-[656px] xl:pt-14 pt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna. Etiam mattis, felis eu interdum posuere, justo neque </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Constrution_company