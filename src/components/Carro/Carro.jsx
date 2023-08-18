import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'


function Carro() {

  const   cart   = useContext(context)
console.log(cart)

  // console.log(cart);
  return (
    <div>
      {/* <span>{cart}</span> */}
      <FontAwesomeIcon className='navbar__cart__icon' icon={faCartShopping} />
    </div>
  )
}

export default Carro