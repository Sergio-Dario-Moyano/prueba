import { createContext, useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import PropTypes from "prop-types";

export const context = createContext()

export const Provider = ({ children }) => {

  const [items, setItems] = useState([])
  const [item, setItem] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [cart, setCart] = useState([])

  const itemsCollection = collection(db, "allProducts")

  const getData = async () => {
    const queryResult = await getDocs(itemsCollection)
    setItems(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getItem = async (itemId) => {
    const docRef = doc(db, "allProducts", `${itemId}`);
    const docSnap = await getDoc(docRef);
    docSnap.exists ? setItem({ ...docSnap.data(), id: itemId }) : <span>El producto no existe</span>
  }

  const sumar = () => {
    setCantidad(cantidad + 1)
  }
  const restar = () => {
    if (cantidad == 0) return
    setCantidad(cantidad - 1)
  }

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      const indexItem = cart.findIndex(elem => elem.item.id === item.id)
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad
      setCart([...cart])
      console.log("existe en el carro");
    } else {
      setCart([...cart, { item, cantidad }])
      console.log("NO existe en el carro");
    }
    setCantidad(0)
    console.log(item, cantidad)
  }

  const isInCart = (id) => {
    console.log(id);
    return cart.some(element => element.item.id === id)
  }

  useEffect(() => {

    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <context.Provider value={{ items, getItem, item, sumar, restar, cantidad, addToCart }}>
      {children}
    </context.Provider>
  )
}
Provider.propTypes = {
  children: PropTypes.any
}