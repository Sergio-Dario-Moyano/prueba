<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'

function CartWidget() {
  const { cart } = useContext(context)
  
  return (
    <>
      <Link to={'/cart'}><FontAwesomeIcon className='navbar__cart__icon' icon={faCartShopping} /></Link>
      <span>{cart.length != 0 ? cart.length : null}</span>
    </>
  )
}

export default CartWidget
=======
export const CartWidget = () => {
    return (
        <>
            cart widget
        </>
    )
}
>>>>>>> ramaNotebook
