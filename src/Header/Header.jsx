import { Link } from 'react-router-dom';
import Image from '../image/headerImg.png'
import './Header.css'
const Header = () => {
    return (
            <div className='headers-main w-auto mx-3 py-5 pb-10'>
                <div className='headers-text lg:w-2/5 py-5'>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white ml-3">We Recycle Stuff From Second Hand </h1>
                    
                    <p className="mb-6 text-lg font-normal text-white lg:px-0 sm:px-0 xl:px-0 dark:text-gray-400 break-words p-2 ml-3">Perkenalkan, Ini Adalah Kelompok 4 PKWU Dari Kelas XI MIPA I. Terdiri Dari 4 Anggota, Kelompok Ini Berhasil Menciptakan Sebuah Produk Yang Berguna Sebagai Hiasan</p>
                    
                    <Link  to='/buy-product' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mt-10 ml-4">
                        Contribute Now 
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
                <div className='headers-image'>
                    <img src={Image} alt="headers-image"/>
                </div>
            </div>
    )
}
export default Header;