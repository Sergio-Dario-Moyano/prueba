
import { useContext, useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { context } from '../Context/ContextProvider/ContexProvider';
// import FormAddInfo from '../FormAddInfo/FormAddInfo';

const ItemListContainer = () => {
  const [bandera, setBandera] = useState(false)
const {  search, items } = useContext(context)

const comprobarBandera = () => {
  if(search.length != 0) {
    setBandera(true)
  }else {
    setBandera(false)
  }

}

useEffect(() => {
  comprobarBandera()
}, [search])
  
  return (
    <>
    {/* <ItemList items={items} /> */}
    {/* <FormAddInfo /> */}
    {bandera ? 
    <ItemList items={search} />
    :
    <ItemList items={items} />
    }
    {/* <FormAddInfo /> */}
    </>
  )
}

export default ItemListContainer