import { Link, useNavigate } from "react-router-dom"
import classes from './Item.module.css'

const Item = ({ id, artist, img, price, stock, description }) => {

    const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click on item')
    }

    return (
        <div onClick={handleClick} className={classes.padrecard} >
            <section className={classes.card}>
            <h2>{artist}</h2>
            <img src={img} style={{ width:150}}/>
            <h3>{description}</h3>
            <h3 className={classes.stock}>In stock: <strong>{stock}</strong></h3>
            <h4 className={classes.price}>{price} $</h4>
            <Link to={`/item/${id}`} className={classes.link}>+ info</Link>
            </section>
        </div>
    )
}

export default Item