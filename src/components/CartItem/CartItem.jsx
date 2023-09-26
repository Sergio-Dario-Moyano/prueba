import PropTypes from 'prop-types'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import "../CartItem/CartItem.css"
import { CartCounter } from '../CartCounter/CartCounter'

function CartItem({ cart }) {
  const { deleteItem } = useContext(context)
  const { item, cantidad } = cart

  return (
    <section className='cartItem__container' >
      <div className='cartItem__top'>
        <figure className='cartItem__content__img'>
          <img src={`${item.imagen}`} className='cartItem__img' />
        </figure>
        <div className='cartItem__down'>
          <div className='cartItem__titleProduct'>
            {item.titleProduct}
          </div>
          <div className='cartItem__content__btn'>
            <button className='cartItem__btn__delete' onClick={() => deleteItem(item.id)}>Eliminar producto</button>
          </div>
        </div>
      </div>
      <div className='cartItem__content__info'>
        <div className='cartItem__content__cartContent'>
          <CartCounter item={item} cantidad={cantidad} />
        </div>
        <div className='cartItem__content__price'>
          <span>Precio: </span>
          <span className='cartItem__price'>$ {item.precio * cantidad}</span>
        </div>
      </div>
    </section>
  )
}

CartItem.propTypes = {
  cart: PropTypes.object
}

export default CartItem