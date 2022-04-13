import term from 'react'
import { hey } from './my'

export const Zealous=()=>{

    const eveOne=()=>{
        alert("Button one clicked")
    }

    return(
        <>
            <button onClick={eveOne}>
                One
            </button>
            <button onClick={hey}>
                Two
            </button>
        </>
    )
}

export const TechCorp=()=>{
    return(
        <>
            <marquee>Hey there! whassup</marquee>
        </>
    )
}

//export {Zealous}
//export default Zealous