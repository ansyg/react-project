import { useEffect, useState } from "react";

const useFetch = (url) => {


    const [items, setItems] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, { signal: abortController.signal }).then(response => {
            setLoading(true)

            if (!response.ok) {

                throw Error("Data fetch error: ")
            }
            return response.json()
        })
            .then(data => {
                setLoading(false)
                setErrors(null)
                setItems(data)
            })

            .catch(error => {
                //if t abort error return nong
                if (error.name === 'AbortError') { } else {

                    setErrors(error.message)
                    setLoading(false)
                }




            })
        return () => abortController.abort()

    }, [url])

    return { items, errors, loading };
}

export default useFetch;