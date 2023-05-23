// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='p-4 sm:p-6 lg:p-8 bg-[#1B1B1B] w-full rounded-xl  '>
//       <img src={props.img} className="h-12 lg:h-16" />
//       <div className='mt-4'>
//         <h3 className='font-semibold text-base lg:text-xl'>{props.title}</h3>
//         <p className='mt-1 lg:mt-2 text-[14px] text-[#C6C6C6] lg:text-base'>{props.paragraph}</p>
//       </div>
//     </div>
//   )
// }

// export default Card

import React from 'react'
import Card from '../components/Card'
import web from '../assets/web.svg'
import mobile from '../assets/mobile.svg'
import code from '../assets/code.svg'

const WhatCan = () => {
  return (
    <div className="mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <h2 className='font-semibold text-xl lg:text-[28px]'>What can i do</h2>
      <div className='mt-6 lg:mt-12 flex flex-col xl:flex-row gap-4 lg:gap-6 xl:gap-8'>
        <Card img={web} title="Website Design" paragraph="I design website pages for your business needs"/>
        <Card img={mobile} title="Mobile Design" paragraph="I design clean, beautiful, minimalist and easy to use mobile interfaces"/>
        <Card img={code} title="Slicing to Code" paragraph="I can convert your design into HTML, CSS and JavaScript (ReactJS)"/>
      </div>
    </div>
  )
}

export default WhatCan