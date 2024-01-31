import React from 'react'
// import exclusive_logo from '../../assets/image/png/exclusive_logo.png'

function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("over_hidden");
    }, 3000);

    return (
        <div>
            <div id="none" className="h-screen w-full bg-[#000] fixed top-0 start-0  z-40">
                <div class="flex items-center justify-center h-screen">
                    <div className=' relative'>
                        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader