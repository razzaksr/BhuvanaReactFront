import axios from 'axios'

const link="http://127.0.0.1:8000/crudl/api"

export const inserting=async(hai)=>{
    const t = await axios.post(`${link}/newone`,hai)
    return t;
}

export const collecting=async()=>{
    const t = await axios.get(`${link}/`)
    return t;
}

export const findingOne=async(key)=>{
    const t = await axios.get(`${link}/${key}`)
    return t;
}