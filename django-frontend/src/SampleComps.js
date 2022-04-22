import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const One=()=>{
    const[times,setTimes]=useState(0)

    useEffect(()=>{
        setTimes(100)
    },[])

    return(
        <>
            <button className="btn btn-outline-danger" onClick={()=>{
                setTimes(times+1)
            }} onDoubleClick={()=>{
                setTimes(0)
            }}>
                Clicked Count is {times}
            </button>

            {(times%2===0)?<h1>Even</h1>:<h1>ODD</h1>}
        </>
    )
}
export const Homes=()=>{
    return(
        <>
            <h1>Home</h1>
        </>
    )
}
export const Two=()=>{
    const{data}=useParams();
    return(
        <>
            <h1>Two {data}</h1>
        </>
    )
}