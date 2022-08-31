
import './product.css'

import CardComp from '../components/Card';

const Product = ({productTitle}) => {
    // const [url,setUrl] = useState(false)
    // const handleClick = () => {
    //     setUrl(true)
    // }

    return (
        <div className="main-card w-auto mx-3">
            <CardComp rating={true} Showbutton={true} />
            <div className="info-product">
                <ul>
                    <li><h2 className='text-xl'>Deskripsi Produk</h2></li>
                    <li><div className='product-deks'>Produk Hiasan Lampu Dengan Stik Eskrim</div></li>
                </ul>
            </div>
        </div>
    )
}
export default Product;
