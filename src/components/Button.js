import { Link } from 'react-router-dom'

const ButtonComp = () => {
    return (
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp, 30.000</span>
            <Link to={'/buy-product'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
        </div>
    )
}
export default ButtonComp