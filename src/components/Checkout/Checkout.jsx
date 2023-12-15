import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from 'firebase/firestore'
import { database } from "../../firebase/client"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useCart()


    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: { userData
                    // name: 'Victoria Brion',
                    // email: 'vbv@gmail.com',
                    // phone: '123456789'
                },
                items: cart,
                total: total, 
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(database)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(database, 'products'), where(documentId(),'in',ids))
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(database, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`Your order id is ${id}`)
                } else {
                    console.log('Out of stock')
                }
            })
        } catch (error) {
            console.error('There was a problem, try again')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Creating your order...</h1>
    }

    if (orderId) {
        return (
            <div>
                <h3>Your order ID is: {orderId}</h3>
                <h4>Your order will arrive in 4 days</h4>
            </div>
        )
    }

    return (
        <>
            <h3>Complete form</h3>
            <CheckoutForm/>
        </>
    )
}

export default Checkout