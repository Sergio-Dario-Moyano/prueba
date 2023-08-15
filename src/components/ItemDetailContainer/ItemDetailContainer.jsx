
import { useState, useEffect } from "react"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

const getItem = async () => {

  const docRef = doc(db, "celulares", "3b3wAyLXFkWBW4AJLg1F");
  const docSnap = await getDoc(docRef);

  docSnap.exists ? setItem({ ...docSnap.data() }) : <span>El producto no existe</span>
  
}

useEffect(() => {
  getItem()
}, [])

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer