import { CartContext } from '../../context/CartContext'
import cart from './assets/react.svg'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    console.log (totalQuantity)

   
    return (
        <div>
            <Link to='/cart'>
                <img src={cart} style={{ width: 30, height: 30 }} alt="cart" />
                {totalQuantity}
              
            </Link>
        </div>
    )
}

export default CartWidget