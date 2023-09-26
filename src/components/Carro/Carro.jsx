import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Carro = () =>{
// 
  // const {setCantidad, cantidad} = useContext(context)
// console.log(cart)

  return (
    <div>
      {/* <span>{cart.item.cantidad}</span> */}
      <FontAwesomeIcon className='navbar__cart__icon' icon={faCartShopping} />
    </div>
  )
}

export default Carro