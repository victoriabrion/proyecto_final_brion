import { useState } from "react"

const ItemCount = ({stock, onAdd }) => {
    const [count, setCount] = useState

    return (
        <>
            <div>
                <h4>{count}</h4>
                <section className={classes.btn}>
                    <button onClick={rest}>-</button>
                    <button onClick={suma}>+</button>
                    <button onClick={() => onAdd(count)}>Add to cart</button>
                </section>
            </div>
        </>
    )
}

export default ItemCount