import ItemList from '../ItemList/ItemList'
import useAsync from '../Hooks/Hooks'
import { useParams } from 'react-router-dom'
import { myProducts } from '../../firebase/products'
import classes from './ItemListContainer.module.css'


const ItemListContainer =({greeting}) => {
    const {categoryId} = useParams()
    
    const customHookFunction = () => myProducts(categoryId) 
    
    const { data: products, loading, error } = useAsync(customHookFunction, [categoryId])

    if(loading) {
        return <h2>Loading...</h2>
               
    }

    if(error) {
        return <h2>Error, try again</h2>
    }

    if(products.length === 0) {
        return <h2> Out of stock</h2>
    }

    return(
        <>
            <h3 className={classes.titulo}>{!categoryId ? greeting : (greeting + categoryId)}</h3>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer