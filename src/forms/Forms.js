import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import CardComp from "../components/Card"
import FormsItemsComp from "../components/FormsItems"
// import { Redirect } from 'react-router-dom'
const Forms = () => {

  const [navTo,setNavTo] = useState(false)

  const handleSubmit = (e) =>{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwv0TjTrKT_zSbf9D0dZ6dRbZbHbWYjE94f1Kh9bR16n0hft-G35y5Y3M_Z9dTYC_2y/exec'
    const form = document.forms['submit-to-google-sheet']
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response)
          if(response.status == 200) 
          {
            setNavTo(true)
          }
        })
        .catch(error => console.error('Error!', error.message))
    e.preventDefault()
  }

    return (
       // <!-- component -->
       <div>
        {/* redirect to home */}
        {navTo && <Navigate to={'/'} replace={true} />}
       <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
              <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-black-600 xl:w-auto lg:w-auto md:w-1/2 sm:w-auto ">
                    <CardComp rating={false} Showbutton={false} showPrice={true} />
                  </div>

                  <FormsItemsComp/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
        </div>
    )
}

export default Forms