import { Carousel } from "flowbite-react/lib/esm/components"
import './Caraousel.css'
import Image from '../db.json'
import { useEffect, useState } from "react"
const CaraoselSlide = () => {

  useEffect(() => {
    console.log(window.innerWidth)
  })
    return (
    //   </div>     
   <div className="cara-main w-auto mx-3">
      <div className='crs-main w-3/5 h-56 sm:h-80 xl:h-80 2xl:h-96 md:w-1/2 xl:w-1/3'>
      <Carousel>
        {Image && Image.map(image => {
        return (
          <div className="crs-img flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" key={image.id}>
          <img src={image.img} alt="" className="w-full h-full"/>
        </div>
        )
        })}
      </Carousel>
      </div>
   </div>

    )
}

export default CaraoselSlide