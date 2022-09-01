import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonComp from './Button'
import StarComp from './Star'

const CardComp = ({rating,Showbutton,showPrice}) => {
    const [rate,showRate] = useState(true)
    const [btn,showBtn] = useState(true)
    const [price,setPrice] = useState(false)

    useEffect(() => {
        showRate(rating)
        showBtn(Showbutton)
        setPrice(showPrice)
    })

    return (
        <div className="w-auto max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg " src="https://i.pinimg.com/736x/98/9b/dc/989bdc4e884d91aa35ff879cec48233c.jpg" alt="product image"/>
    </a>
    <div className="px-5 pb-5 ">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Lamput</h5>
        </a>
        
       {price &&<div className='product-price mt-10'>  <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp, 30.000</span>
        </div>}
        {rate && <StarComp/>}
        {btn && <ButtonComp/>}
    </div>
</div>
    )
}

export default CardComp