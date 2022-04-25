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

export const findingId=async(key)=>{
    const t = await axios.get(`${link}/byid/${key}`)
    return t;
}

export const uploading=async(object)=>{
    const t = await axios.post(`${link}/up/${object.id}`,object)
    return t;
}

export const deletingById=async(key)=>{
    const t = await axios.delete(`${link}/del/${key}`)
    return t;
}