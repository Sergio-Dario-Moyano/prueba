
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyA0kBRRWpQGJd8uSgdNmFC26vRURjmkwto",
  authDomain: "pruebadb-c2aa7.firebaseapp.com",
  databaseURL: "https://pruebadb-c2aa7-default-rtdb.firebaseio.com",
  projectId: "pruebadb-c2aa7",
  storageBucket: "pruebadb-c2aa7.appspot.com",
  messagingSenderId: "688636218127",
  appId: "1:688636218127:web:a2695574a8bfd2d5c18c7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

//funcion para agregar iamgenes al Storage
export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef = ref( storage, v4())
  await uploadBytes(storageRef, file)
  const urlImage = await getDownloadURL(storageRef)
  return urlImage
}