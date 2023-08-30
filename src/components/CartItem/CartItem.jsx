import PropTypes from 'prop-types'
import { useContext } from 'react'
import { context } from '../Context/ContextProvider/ContexProvider'

function CartItem({ cart }) {
  const { deleteItem } = useContext(context)
  const { item } = cart

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <div style={{ width: '20%' }}>
        <img src={`${item.imagen}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </div>
      <div style={{ width: '80%' }}>
        <div>{item.caracteristicas}</div>
        <div>{item.descripcion}</div>
        <div>{item.precio}</div>
        <div>{item.caracteristicas}</div>
      </div>
      <div>
        <button onClick={() => deleteItem(item.id)}>Delete Item</button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  cart: PropTypes.object
}

export default CartItem
