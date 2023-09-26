import { useRef, useState } from "react";
import { db, uploadFile } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import "./FormAddInfo.css"

function FormAddInfo() {

  const [file, setFile] = useState()

  const refCaracteristicas = useRef(null)
  const refCategoria = useRef(null)
  const refCuotas = useRef(null)
  const refDescripcion = useRef(null)
  const refDescripcionGeneral = useRef(null)
  const refDescuento = useRef(null)
  const refEnvio = useRef(null)
  const refFeature1 = useRef(null)
  const refFeature2 = useRef(null)
  const refFeature3 = useRef(null)
  const refOferta = useRef(null)
  const refPrecio = useRef(null)
  const refPrecioAnterior = useRef(null)
  const refTitleFeature1 = useRef(null)
  const refTitleFeature2 = useRef(null)
  const refTitleFeature3 = useRef(null)
  const refCarGenValor1 = useRef(null)
  const refCarGenValor2 = useRef(null)
  const refCarGenValor3 = useRef(null)

  const saveProd = async (prod) => {
    const {
      caracteristicas,
      caracteristicasGenerales,
      categoria,
      cuotas,
      descripcion,
      descripcionGeneral,
      descuento,
      envio,
      feature1,
      feature2,
      feature3,
      oferta,
      precio,
      precioAnterior,
      titleFeature1,
      titleFeature2,
      titleFeature3,
      url,
    } = prod

    await addDoc(collection(db, "allProducts"), {
      // prod
      caracteristicas,
      caracteristicasGenerales,
      categoria,
      cuotas,
      descripcion,
      descripcionGeneral,
      descuento,
      envio,
      feature1,
      feature2,
      feature3,
      oferta,
      precio,
      precioAnterior,
      titleFeature1,
      titleFeature2,
      titleFeature3,
      imagen: url
    })
      .then(function (docRef) {
        console.log("Documento agregado con el ID: ", docRef.id);
        MSJOK()
      })

      .catch(function (error) {
        console.log("Error agregado al documento ", error);
        MSJERROR()
      });
  }

  const MSJOK = () => {
    alert("Datos ingresados correctamente")
  }

  const MSJERROR = () => {
    alert("Los datos no se han guardado correctamente")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return
    try {
      const result = await uploadFile(file)
      capturar(result)
    } catch (error) {
      console.log(error);
    }

  }

  const capturar = (url) => {
    let caracteristicas = refCaracteristicas.current.value
    let categoria = refCategoria.current.value
    let cuotas = refCuotas.current.value
    let descripcion = refDescripcion.current.value
    let descripcionGeneral = refDescripcionGeneral.current.value
    let descuento = refDescuento.current.value
    let envio = refEnvio.current.value
    let feature1 = refFeature1.current.value
    let feature2 = refFeature2.current.value
    let feature3 = refFeature3.current.value
    let oferta = refOferta.current.value
    let precio = refPrecio.current.value
    let precioAnterior = refPrecioAnterior.current.value
    let titleFeature1 = refTitleFeature1.current.value
    let titleFeature2 = refTitleFeature2.current.value
    let titleFeature3 = refTitleFeature3.current.value

    let carac1 = refCarGenValor1.current.value
    let carac2 = refCarGenValor2.current.value
    let carac3 = refCarGenValor3.current.value

    const datosParaAgregar = {
      caracteristicas,
      caracteristicasGenerales: [carac1, carac2, carac3],
      categoria,
      cuotas,
      descripcion,
      descripcionGeneral,
      descuento,
      envio,
      feature1,
      feature2,
      feature3,
      oferta,
      precio,
      precioAnterior,
      titleFeature1,
      titleFeature2,
      titleFeature3,
      url
    }

    saveProd(datosParaAgregar)

  }

  return (
    <section id="section">
      <h1>Formulario para agregar productos a la DB</h1>
      <form id="form">

       <label htmlFor="caracteristicas"> Caracteristicas (Nombre del producto)
        <input type="text"  ref={refCaracteristicas} name="caracteristicas" />
       </label>

       <label htmlFor="categoria"> Categoria a la que pertenece
        <input type="text"  ref={refCategoria} name="categoria" />
       </label>

       <label htmlFor="cuotas"> cuotas (si las hay)
        <input type="text"  ref={refCuotas} name="cuotas" />
       </label>

       <label htmlFor="descripcion"> Descripcion Básica del producto
        <input type="text"  ref={refDescripcion} name="descripcion" />
       </label>

       <label htmlFor="descripcionGeneral"> Descripcion completa del producto
        <input type="text"  ref={refDescripcionGeneral} name="descripcionGeneral" />
       </label>

       <label htmlFor="descuento"> Descuento (si lo hay)
        <input type="text"  ref={refDescuento} name="descuento" />
       </label>

       <label htmlFor="envio"> Envio (si lo hay)
        <input type="text"  ref={refEnvio} name="envio" />
       </label>

       <label htmlFor="feature1"> Caracteristica 1
        <input type="text"  ref={refFeature1} name="feature1" />
       </label>

       <label htmlFor="feature2"> Caracteristica 2
        <input type="text"  ref={refFeature2} name="feature2" />
       </label>

       <label htmlFor="feature3"> Caracteristica 3
        <input type="text"  ref={refFeature3} name="feature3" />
       </label>

       <label htmlFor="oferta"> Oferta (si la tiene)
        <input type="text"  ref={refOferta} name="oferta" />
       </label>

       <label htmlFor="precio"> Precio
        <input type="text"  ref={refPrecio} name="precio" />
       </label>

       <label htmlFor="precioAnterior"> Precio Anterior (si lo habia)
        <input type="text"  ref={refPrecioAnterior} name="precioAnterior" />
       </label>

       <label htmlFor="titleFeature1"> Titulo para la Caracteristica 1
        <input type="text"  ref={refTitleFeature1} name="titleFeature1" />
       </label>

       <label htmlFor="titleFeature2"> Titulo para la Caracteristica 2
        <input type="text"  ref={refTitleFeature2} name="titleFeature2" />
       </label>

       <label htmlFor="titleFeature3"> Titulo para la Caracteristica 3
        <input type="text"  ref={refTitleFeature3} name="titleFeature3" />
       </label>
       <div>
        <label htmlFor="valor1" >Valor para caracteristicas generales 1
          <input type="text" ref={refCarGenValor1} name="valor1" />
        </label>
        <label htmlFor="valor2">Valor para caracteristicas generales 2
          <input type="text" ref={refCarGenValor2} name="valor2" />
        </label>
        <label htmlFor="valor3">Valor para caracteristicas generales 3
          <input type="text" ref={refCarGenValor3} name="valor3" />
        </label>
       </div>




        <label htmlFor="imagen" >subir imagen
          <input type="file" onChange={(e) => setFile(e.target.files[0])} id="imagen" />
        </label>
      </form>
      <button onClick={handleSubmit} id="btn__submit">Subir Imagen</button>
    </section>
  )
}

export default FormAddInfo