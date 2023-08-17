import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const context = createContext()

export const ContextProvider = ({ children }) => {
    const [estado, setEstado] = useState([])

    const itemsCollection = collection(db, "allProducts")

    const getData = async () => {
        const queryResult = await getDocs(itemsCollection)
        setEstado(queryResult.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    const prueba = () => {
        alert("probando context")
    }

    return
    <context.Provider value={{estado, prueba}}>
        {children}
    </context.Provider>
}