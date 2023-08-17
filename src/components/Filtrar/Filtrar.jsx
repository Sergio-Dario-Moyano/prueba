
import { useContext, useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { context } from '../Context/ContextProvider/ContexProvider';
import { useParams } from 'react-router-dom';

export const Filtrar = () => {
  const { items } = useContext(context)
  let { id } = useParams()
  const [filtro, setFiltro] = useState([])

  const filter = () => {
    const newFilter = items.filter((prod) => prod.categoria === id)
    return setFiltro(newFilter)
  }

  useEffect(() => {
    filter()
    // eslint-disable-next-line
  }, [id])

  return (
    <>
      {filtro && <ItemList items={filtro} />}
    </>
  )
}