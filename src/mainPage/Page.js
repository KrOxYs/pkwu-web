import Navbar from '../Navbar'
import Header from '../Header/Header'
import Product from '../main/product'
import CaraoselSlide from '../Caraousel/Caraosel'
import About from '../About/About'
const MainPage = () => {
    return (
        <div className="main-page">
            <Navbar/>
            <Header/>
            <Product/>
            <CaraoselSlide/>
            <About/>
        </div>
    )
}

export default MainPage