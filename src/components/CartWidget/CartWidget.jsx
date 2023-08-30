import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'

function CartWidget() {
  const { cart } = useContext(context)
  const res = cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0)
  return (
    <>
      <Link to={'/cart'}><FontAwesomeIcon className='navbar__cart__icon' icon={faCartShopping} /></Link>
      <span>{res != 0 ? res : null}</span>
    </>
  )
}

export default CartWidget