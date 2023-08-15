
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const itemsCollection = collection(db, "allProducts")

  const getData = async () => {
      const queryResult = await getDocs(itemsCollection)
      setItems(queryResult.docs.map((doc) => ({...doc.data(), id:doc.id})))
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer