import Rate from '../Rating';
import { Card } from 'flowbite-react/lib/esm/components';
import './product.css'
import {  Link  } from 'react-router-dom'
import { useState } from 'react';
import CardComp from '../components/Card';

const Product = ({productTitle}) => {
    // const [url,setUrl] = useState(false)
    // const handleClick = () => {
    //     setUrl(true)
    // }

    return (
        <div className="main-card w-auto mx-3">
            <CardComp rating={true} Showbutton={true} showPrice={false}/>
            <div className="info-product">
                <ul>
                    <li><h2 className='text-xl'>{productTitle}</h2></li>
                    <li><div className='product-deks'>Produk Ini Dibuat Dengan SepenHatiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div></li>
                </ul>
            </div>
        </div>
    )
}
export default Product;
