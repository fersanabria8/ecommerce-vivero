import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc} from 'firebase/firestore';
import '../../styles/ItemDetailContainer.css'
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true)
  const [prod, setProd] = useState({});
  const id = useParams().id;

  // ESTA BIEN
  useEffect(() => {
    // const querydb = getFirestore()
    const docRef = doc(db, 'plantas', id);
    getDoc(docRef)
      .then(resp => {
        console.log('Llamo API firebase desde ItemDetailContainer')
        setProd({...resp.data(), id: resp.id })})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
  }, [id])


  return (
    <>
      <div className='detailcontainer-caja'>
        { loading ? 
          <h2>Cargando...</h2> :
        prod && <ItemDetail producto={prod} />
        }
      </div>
    </>
  )
}

export default ItemDetailContainer