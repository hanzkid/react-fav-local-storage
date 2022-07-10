import { useState, useEffect } from 'react'

export default function useFetch(endpoint = '/'){
    const [data, setData] = useState([]); 
    const [info, setInfo] = useState([]); 
    const [error, setError] = useState([]); 
    const base_url = 'https://rickandmortyapi.com/api';
    useEffect(() => {
        fetch(`${base_url}${endpoint}`)
            .then((resp) => {
                if(!resp.ok){
                    throw Error(resp.statusText)
                }
                return resp.json()
            }).then((resp) => {
                setData(resp.results);
                setInfo(resp.info);
            }).catch((err) => {
                setError(err)
            })
    },[endpoint]);

    return [data, info, error]
}