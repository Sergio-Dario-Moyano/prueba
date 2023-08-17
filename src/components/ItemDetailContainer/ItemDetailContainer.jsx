import { useContext, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { context } from "../Context/ContextProvider/ContexProvider"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const { item, mostrarProd } = useContext(context)

  useEffect(() => {
    mostrarProd(itemId)
  }, [itemId])

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer