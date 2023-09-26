import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import CartItem from '../CartItem/CartItem';
import "../Cart/Cart.css"
import Summary from '../Summary/Summary';

const Cart = () => {

  const  {cart}  = useContext(context)
  // console.log(cart);

  return (
    <div className='cart__container'>

      <div className='cart__content__title'>
        <h1 className='cart__title'>Productos</h1>
      </div>
      <div className='cart__content__product'>
        {
          cart.length != 0 ?
            cart.map(item => <CartItem cart={item} key={item.item.id} />)
            :
            <div className='cart__container__wrapper'>
              <div className='cart__container__summary'>
                <Summary />
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart