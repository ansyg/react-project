import axios from 'axios';
import { useEffect, useState } from 'react';




const useFetchApiData = (url, params, arrayValue) => {

    const [items, setItems] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const abortController = new AbortController()
        axios.get(url, { params: params, signal: abortController.signal, })

            .then(data => {
                console.log('ze data', data)
                setLoading(true)
                setErrors(null)
                setItems(data[arrayValue])
            })

            .catch(error => {
                //if t abort error return nong
                if (error.name === 'AbortError') { } else {

                    setErrors(error.message)
                    setLoading(false)
                }




            })
            .finally(() => {


                setLoading(false);
            });
        return () => abortController.abort()

    }, [url, params, arrayValue])

    return { items, errors, loading };





}

export default useFetchApiData;