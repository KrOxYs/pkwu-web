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
        <img className="p-8 rounded-t-lg " src="https://mail.google.com/mail/u/0?ui=2&ik=7562209790&attid=0.4&permmsgid=msg-a:r-3565955250793260601&th=182d0bea158b0ae9&view=att&disp=safe&realattid=f_l77uk74p3" alt="product image"/>
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