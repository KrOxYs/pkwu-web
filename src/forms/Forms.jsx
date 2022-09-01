import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import CardComp from "../components/Card"
import FormsItemsComp from "../components/FormsItems"
import FinalStep from "../Bukti Pembelian/Bukti"
import App from "../App"
import SuccessAlertComp from "../components/SuccesAlert"
// import App from "../App"
// import { Redirect } from 'react-router-dom'
const Forms = () => {

  const [navTo,setNavTo] = useState(false)
  const [route,setRoute] = useState(false)
  const [showAlert,setAlert] = useState(false)
  const [showLoading,setShowLoading] = useState(false)

  // const routes = useRoutes
  const handleSubmit = (e) =>{

    // const update = {name}
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwv0TjTrKT_zSbf9D0dZ6dRbZbHbWYjE94f1Kh9bR16n0hft-G35y5Y3M_Z9dTYC_2y/exec'
    const form = document.forms['submit-to-google-sheet']
    
    setShowLoading(true)
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response)
          if(response.status == 200) 
          {
            setRoute(true)
            setAlert(true)
            setTimeout(() => {
              setNavTo(true)
            }, 3000);
          }
        })
        .catch(error => console.error('Error!', error.message))
    e.preventDefault()

    // setTimeout(() => {
    //   setAlert(true)
    // }, 3000);

  }
  //  useEffect(() => {
  //   console.log(href)
  //  })

    return (
       // <!-- component -->
       <div>
        {/* <SuccessAlertComp/> */}
        {showAlert && <SuccessAlertComp message='Pembelian Berhasil' messageInfo='Terimakasih Sudah Membeli'/>}

        {/* <Router>
          <Route path="buy-product/final-step" element={<FinalStep/>}></Route>
        </Router> */}

        {navTo && <Navigate to={'/'} replace={true} />}
       <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600 mb-5">Form Pembelian</h2>
              {/* <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p> */}

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-black-600 xl:w-auto lg:w-auto md:w-auto sm:w-auto ">
                    <CardComp rating={false} Showbutton={false} showPrice={true} />
                  </div>

                  <FormsItemsComp  showButtonSubmit={setShowLoading}/>
                  {showLoading &&  <div className="md:col-span-5 text-right mb-10">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"><svg role="status" class="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>Loading
                            </button>
                  </div>}

                  {!showLoading &&  <div className="md:col-span-5 text-right mb-10">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Submit Form
                            </button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
          {/* <div className="hidden">
          <App showRoutes={false} />
          </div> */}
        </div>
    
    )

}

export default Forms
