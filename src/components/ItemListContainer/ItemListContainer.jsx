
import { useContext} from 'react';
import ItemList from '../ItemList/ItemList';
import { context } from '../Context/ContextProvider/ContexProvider';

const ItemListContainer = () => {

const {items} = useContext(context)
  
  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer