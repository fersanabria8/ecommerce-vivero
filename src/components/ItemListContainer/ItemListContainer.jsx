import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
// import '../../styles/ItemListContainer.css'

export const ItemListContainer = () => {

  const [plantas, setPlantas] = useState([]) //array vacio
  const [loading, setLoading] = useState(true)
  // const category  = useParams().category;

  const categoria = useParams().categoria;

// ESTE USEEFFECT ANDA PERFECTO!

  // useEffect(() => {

  //   const productosRef = collection(db, 'plantas');
  //   const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef;

  //   getDocs(q)
  //     .then((resp) => {
  //       setPlantas(
  //         resp.docs.map((doc) => {
  //           return {...doc.data(), id: doc.id}
  //         })
  //         )
  //         setLoading(false)
  //     })

  // }, [categoria])

// ESTE USEEFFECT ANDA PERFECTO!

// ESTE USEEFFECT MODIFICADO ANDA PERFECTO!
  useEffect(() => {

    const productosRef = collection(db, 'plantas');
    const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef;
    getDocs(q)
      .then((resp) => {
        setPlantas(
          resp.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          }))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))  
  }, [categoria])
// ESTE USEEFFECT MODIFICADO ANDA PERFECTO!

  return (
    <>
      { categoria && <h2 className='categoria'> Categoria: {categoria}</h2>}
      { loading ? <h1>Loading...</h1> : 
      <ItemList productoplantas={plantas} />
      }  
    </>
  )
}
