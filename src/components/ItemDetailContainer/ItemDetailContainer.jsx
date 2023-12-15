import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { myProductsById } from "../../firebase/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect (()=>{
        myProductsById (itemId)
        .then (response => {
            setProduct(response) 
        })
        .catch (error =>{
            console.log(error)
        })
        .finally (()=>{
        setLoading(false)
    })
}, [itemId])

if(loading) {
    return <h2>Loading...</h2>
}
if(!product) {
    return <h2>Not found</h2>
}

return(
    <section>
         <h3>+ info</h3>
            <ItemDetail {...product}/>
    </section>
)
}

export default ItemDetailContainer