import { useEffect, useState } from "react"

const FormsItemsComp = () => {
  const [name,setName] = useState('')
  const [email,setMail] = useState('')
  const [kelas,setKelas] = useState('')
  let [items,setItems] = useState(0)
  
  const price = 30000 * items

  // price to rupiah 
  const priceToRupiah = new Intl.NumberFormat('id-ID', {style :"currency", currency:'IDR'}).format(price);
  // name 
  const handleName = (...namePara) =>{
    setName(...namePara)
  }

  // email
  const handleMail = (...nameMail) => {
    setMail(...nameMail)
  }

  // kelas 
  const handleKelas = (...nameKelas) => {
    setKelas(...nameKelas)
  }

  // items
  const handleItems = (...valueItems) => {
    setItems(...valueItems)
  }


  // price

  useEffect(() => {
    if(items < 0) {
      setItems(0)
    }
  })

  const increment = () =>{
    setItems(items--)
  }

  const decrement = () => {
    // e.preventDefault();
    setItems(items++)
  }
    return (
        <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" name="nama" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={name} onChange={(e) => { handleName(e.target.value) }} required />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={email} onChange={(e) => { handleMail(e.target.value) }} placeholder="email@domain.com" required />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="kelas">Kelas</label>
                        <input type="text" name="kelas" id="kelas" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value={kelas} onChange={(e) => {handleKelas(e.target.value)}} placeholder="XI MIPA I" required />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="soda">How many soda pops?</label>
                        <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <a tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600" onClick={() => { increment()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                          <input name="items" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value={items} onChange={(e) => { handleItems(e.target.value) }} />
                          <a tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600" onClick={() => { decrement()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <input value={priceToRupiah} name="total" />
              
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                        </div>
                      </div>

                    </div>
                  </div>
    )
}
export default FormsItemsComp