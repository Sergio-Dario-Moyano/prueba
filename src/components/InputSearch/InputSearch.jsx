import "../InputSearch/InputSearch.css"
import { useContext } from 'react';
import { context } from '../Context/ContextProvider/ContexProvider';

function InputSearch() {

  const { setSearch, items } = useContext(context)

  const handleChange = (e) => {
    filtrar((e.target.value).trim())
  }

  const filtrar = (terminoBusqueda) => {
    console.log(terminoBusqueda);

    const resultadoBusqueda = items.filter(item => {
    
      if (item.caracteristicas.toString().toLowerCase().includes(terminoBusqueda)) {
        return item;
      }
    })
    setSearch(resultadoBusqueda)
  }

  return (
    <>
      <input type="text" onChange={handleChange} className='navbar__input__search' placeholder='Estoy buscando...' />
    </>
  )
}

export default InputSearch