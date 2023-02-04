import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url)=>{
    const [data,setData] = useState([]);
    const [loading,setloading]= useState(false);
    const [error,setError] = useState(false);

    
        useEffect(()=>{
            const fetchData = async ()=>{
                setloading(true);
                try {
                    const res = await axios.get(url);
                    setData(res.data)
                } catch (error) {
                    setError(error)
                }
                setloading(false)
            }
            fetchData()
        },[url])

        const reFetchData = async ()=>{
            setloading(true);
            try {
                const res = await axios.get(url);
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setloading(false)
        }
        return {data,loading,error,reFetchData}
}

export default useFetch;