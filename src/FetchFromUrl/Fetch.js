import { useEffect, useState } from "react"

const FecthData = (url) => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=> {
        fetch(url)
            .then((res)=> {
                if(!res.ok)
                {
                    throw new Error("Data Tidak Dapat Di temukan")
                }else {
                    return res.json
                }
            })
            .then((data) => {
                setData(data)
                setError(false)
            })
            .catch((err)=> {
                setData(null)
                setError(err.message)
            })
    })

    return {data,error}
}
export default FecthData;