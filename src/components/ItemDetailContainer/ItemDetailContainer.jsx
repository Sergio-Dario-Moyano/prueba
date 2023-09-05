import { useContext, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { context } from "../Context/ContextProvider/ContexProvider"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const { getItem } = useContext(context)
  // const { item, getItem } = useContext(context)

  useEffect(() => {
    getItem(itemId)
  }, [itemId])

  return (
    <>
      <ItemDetail />
      {/* <ItemDetail item={item} /> */}
    </>
  )
}

export default ItemDetailContainer