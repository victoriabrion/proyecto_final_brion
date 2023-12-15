import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav>
                <NavLink to='/' className={classes.title}>Vivs Store</NavLink>
                
                <section className={classes.nav}>  
                    <NavLink to='/category/vinyl' className={({isActive})=> isActive ? classes.active : classes.boton}>Vinyl</NavLink>     
                    <NavLink to='/category/merch' className={({isActive})=> isActive ? classes.active : classes.boton}>Merch</NavLink>     
                    <NavLink to='/category/tickets' className={({isActive})=> isActive ? classes.active : classes.boton}>Tickets</NavLink>     
                </section>
                <CartWidget />
            </nav>
           
        </>
    )
}

export default NavBar