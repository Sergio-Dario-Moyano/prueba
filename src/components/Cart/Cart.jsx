import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import "../Cart/Cart.css"
import Summary from '../Summary/Summary';

const Cart = () => {

  const { cart } = useContext(context)

  return (
    <div className='cart__container'>
      {
        cart.length != 0 ?
          cart.map(item => <CartItem cart={item} key={item.item.id} />)
          :
          <div className='cart__container__wrapper'>
            <div className='cart__container__bag'>
              <FontAwesomeIcon icon={faBagShopping} className='cart__bagShopping__icon' />
              <h3 className='cart__title'>¡Empieza un carrito de compras!</h3>
              <p className='cart__paragraph'>Sumá productos y conseguí envío gratis.</p>
              <Link to={'/'} className='cart__link__goHome'>Descubrir productos</Link>
            </div>
            <div className='cart__container__summary'>
              <Summary />
            </div>
          </div>
      }
    </div>
  )
}

export default Cart