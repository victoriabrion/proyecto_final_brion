import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import classes from './ItemDetail.module.css'


const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Add to cart</button>
        </div>
    )
}


const ItemDetail = ({ id, title, category, img, price, stock, date, city, description }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityAdded, setQuantityAdded] = useState(0)

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const { addItem, inCart } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        console.log(`You added ${quantity} ${id} from ${category}`)

        const item = {
            id, quantity, price
        }

        addItem (item)
    }

    return (
        <article>
            <header>
                <h3 className={classes.title}> {title}</h3>
            </header>
            <picture>
                <img src={img} alt={title} style={{ width: 300 }} />
            </picture>
            <section>
                <p className={classes.category}>Section: {category}</p>
                <p className={classes.price}>{price} $ </p>
                <p>{date}</p>
                <p>{city}</p>
                <p>{description}</p>
            </section>
            <footer >
                { quantityAdded >0 ? (
                   <Link to='/cart' className={classes.btn + " " + classes.goToCart} > Go to cart </Link>
                ) :(
                <ItemCount stock={stock} onAdd={handleOnAdd} />
                )
                }
                </footer>
        </article>
    )
}

export default ItemDetail