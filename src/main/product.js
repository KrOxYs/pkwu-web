import './product.css'

const Product = ({productTitle}) => {
    return (
        <div className="main-card w-auto mx-3">
            <div className="card-utama mx-10 drop-shadow-md">
                <div className="card  m-10 bg-white mt-10">
                    <div className="image-product">
                    <img src="https://www.99.co/blog/indonesia/wp-content/uploads/2021/10/pemandangan-alam-matahari.jpg" alt="" className="image"/>
                    </div>
                    <p className="font-bold ml-3" >Rp. 30.000</p>
                    <p className="ml-3">Produk Kami</p>
                    <button type="button" className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-3 ">Buy Now</button>
                </div>
            </div>
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
