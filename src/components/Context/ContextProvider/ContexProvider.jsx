import { createContext, useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import PropTypes from "prop-types";

export const context = createContext()
const initialValue = 1

export const Provider = ({ children }) => {

  const [items, setItems] = useState([])
  const [item, setItem] = useState([])
  const [cantidad, setCantidad] = useState(initialValue)
  const [cantidadItems, setCantidadItems] = useState(0)
  const [cart, setCart] = useState([])
  const [sumaTotal, setSumaTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [nuevaCantidad, setNuevaCantidad] = useState(cantidadItems)


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

  const addToCart = (item, cantidad) => {
    console.log(cantidad);
    console.log(nuevaCantidad);
    if (isInCart(item.id)) {
      const indexItem = cart.findIndex(elem => elem.item.id === item.id)
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad
      setCart([...cart])
      console.log("existe en el carro");
      // console.log(cart);
    } else {
      setCart([...cart, { item, cantidad }])
      console.log("NO existe en el carro");
      // console.log(cart);
    }
    setCantidad(initialValue)
  }

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id)
  }

  const deleteItem = (id) => {
    const newCart = cart.filter(item => item.item.id != id)
    setCart(newCart)
  }

  const cantidadDeItems = () => {
    console.log(cart);
    const res = cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0)
    setCantidadItems(res)
  }

  const sumarCarro = () => {
    const sumTot = cart.reduce((acc, elem) => acc + elem.cantidad * elem.item.precio, 0)
    setSumaTotal(parseInt(sumTot))
  }


  useEffect(() => {

    getData()
    cantidadDeItems()
    sumarCarro()

    // eslint-disable-next-line
  }, [cart])

  return (
    <context.Provider value={
      {
        items,
        getItem,
        cart,
        item,
        setCantidad,
        cantidad,
        addToCart,
        deleteItem,
        isInCart,
        total,
        setTotal,
        sumarCarro,
        setSumaTotal,
        sumaTotal,
        cantidadItems,
        setCantidadItems,
        nuevaCantidad,
        setNuevaCantidad
      }
    }>
      {children}
    </context.Provider>
  )
}
Provider.propTypes = {
  children: PropTypes.any
}