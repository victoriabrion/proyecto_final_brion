import { useState, useEffect } from 'react'

const useAsync = (customHookFunction, dependencies = []) => {
    const [data, setData] = useState()
   
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        
        setLoading(true)

        customHookFunction()
            .then(result => {
                setData(result)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependencies)

    return {
        data, 
        loading,
        error
    }
}

export default useAsync