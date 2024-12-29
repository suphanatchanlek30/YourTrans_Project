import React from 'react'
import About1 from "../assets/about/about.svg";

const About = () => {
  return (
    <div id='about' className="relative w-full min-h-screen z-30">
        {/* Main */}
        <div className='relative w-full flex flex-row items-center z-20 px-[20px] sm:px-6 lg:px-8 pt-16 sm:pt-0 md:pt-28 lg:pt-40'>
            <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-[54px]">
                {/* Left */}
                <div className='w-full flex flex-col md:w-1/2 max-w-[700px] space-y-4 md:space-y-6 sm:gap-[39px] gap-[18px] text-center sm:text-left'>
                    {/* Background Text */}
                    <h2 className="absolute font-body3 font-semibold text-[44px] sm:text-[96px] opacity-50 text-[#E5E5E5] sm:leading-[144px]z-0 top-[61px] sm:top-[237px] left-[70px] sm:left-[92px]">
                        Who we are
                    </h2>

                    {/* Foreground Text */}
                    <h2 className='relative font-body3 font-semibold text-[32px] text-[#262626] sm:text-[64px] sm:leading-[96px] leading-[36px] z-10'>
                        Who we are
                    </h2>

                    <p className='font-body3 font-normal text-[#5D5F61] text-[12px] sm:text-[18px]'>Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam vivamus ultricies semper sed gravida dictumst nunc. Ut ac luctus facilisis ipsum mauris volutpat elementum ut. Volutpat nullam tellus egestas scelerisque tellus. <br /> <br />Id pellentesque eget sollicitudin quis morbi arcu. Id etiam sed dui tellus purus morbi aenean. Quis non non massa ut amet. Nec id sed ullamcorper tincidunt egestas sit. Ac elementum in justo feugiat netus suspendisse molestie. Tortor eget mattis aliquet at nunc elementum ornare aliquet placerat. </p>
                    {/* Button */}
                    <div>
                        <a className='sm:py-[12px] sm:px-[36px] sm:text-[16px] py-[8px] px-[19px] text-[10px] bg-[#1341EC] font-body3 font-medium text-white sm:rounded-[5px] rounded-[3px] '>Know More</a>
                    </div>
                </div>
                {/* Right */}
                <div className='w-full md:w-1/2 sm:max-w-[680px] max-w-[340px] space-y-4 md:space-y-6'>
                    <div className='py-[32px] sm:py-[1px]'>
                        <img src={About1} alt="About" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About