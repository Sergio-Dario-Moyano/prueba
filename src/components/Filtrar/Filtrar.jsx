import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const Filtrar = () => {
  const {id} = useParams()
  const [items, setItems] = useState([])

  const itemsCollection = collection(db, "allProducts")

  const getData = async () => {
      const queryResult = await getDocs(itemsCollection)
      const resQuery = queryResult.docs.map((item) => ({...item.data()}))
      return setItems(resQuery.filter((item) => item.categoria == id))
   
      }
  

  useEffect(() => {
    // console.log(id);
    getData()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      {console.log(id)}
      { items && <ItemList items={items} key={items.id} />}
    </>
  )
}

export default Filtrar