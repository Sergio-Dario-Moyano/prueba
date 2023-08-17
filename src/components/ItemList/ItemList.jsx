import Item from "../Item/Item"
import PropTypes from "prop-types"

const ItemList = ({ items }) => {
  
  return (
    <>
    {
      items.map((item) => (
        <Item key={item.id} item={item} />
      ))
    }
    </>
  )
}

ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList