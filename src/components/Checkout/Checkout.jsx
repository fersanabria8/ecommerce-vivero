import { useContext, useState, useEffect, useRef} from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc, Timestamp, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import emailjs from '@emailjs/browser'
import { useForm } from '../hooks/useForm'

const Checkout = () => {

  const {cartList, vaciarCarrito, precioTotal } = useContext(CartContext)
  const { formData, setFormData, handleChange, vaciarForm } = useForm({name: '', tel: '', email:'', direccion:''})

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const [idOrden, setOrden] = useState('')
  const refForm = useRef();

  useEffect(()=> {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  },[formErrors])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formData));
    //   setIsSubmit(true);
    // }


  
    if(!values.name) {
      errors.name = "El nombre es requerido";
    } else if (values.name.length < 2) {
      errors.name = "El nombre es muy corto";
    }
    if(!values.email) {
      errors.email = "El email es requerido";
    } else if (!regex.test(values.email)) {
      errors.email = "El email no es valido";
    }
    if(!values.tel) {
      errors.tel = "El teléfono es requerido";
    }
    if(!values.direccion) {
      errors.direccion = "La dirección es requerido";
    }
    return errors;
  }


///ESTA FUNCION GENERA LA ORDEN
const generarOrden = (e)=> {
  e.preventDefault() 
  setFormErrors(validate(formData));
  setIsSubmit(true);
  emailjs.sendForm('service_m1s8wwp', 'template_3zmk7sd', refForm.current, 'M0Sr9OqalF-rNNM0A')
      .then((result) => 
          console.log(result.text),
          console.log("mensaje enviado EmailJS"))
      .catch((error) => console.log(error.text))
    
const orden = {}
orden.date = Timestamp.fromDate(new Date());    
    orden.buyer = formData
    orden.total =  precioTotal()
    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio 
        return {id, nombre, precio}   
    })


    //ordenCliente es el nombre de la coleccion
const pedidosRef = collection(db, 'ordenCliente')
addDoc(pedidosRef, orden)
.then((resp) => setOrden(resp.id))// Id de usuario
.finally(()=> setFormData({
      name:'',
      tel:'',
      email:'',
      direccion:''
    }))



    // ACTUALIZAR STOCK
const docRef = doc(db, 'plantas', cartList[0].id)
updateDoc(docRef, {stock: cartList[0].stock - cartList[0].cantidad})
.then(resp => { console.log('update stock'), resp })
.catch(error => console.log(error))
.finally(()=> vaciarCarrito(),
console.log('termino'))

}

if (idOrden) {
  return (
    <div>
      <h2>Muchas gracias por tu compra</h2>
      <h3>Tu numero de orden es: {idOrden}</h3>
    </div>
  )
} 


{/* FORMULARIO */}
  return (
    <>
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div> Enviado </div>) 
    : (<pre> {JSON.stringify(formData, null, undefined, 2)}</pre>)} */}
  <div className='container-cart-botones'>
    <span> 
      {`Precio Total: $ ${precioTotal()}`}
    </span>
  <br />
  <form 
    ref={refForm}
    onSubmit={generarOrden} 
    ><p>Ingresa tus datos {formErrors.name}</p>
    <input type='text' name='name' placeholder='nombre' value={formData.name} onChange={handleChange} />
    <p>{formErrors.tel}</p>
    <input type='number' name='tel' placeholder='telefono' value={formData.tel} onChange={handleChange} />
    <p>{formErrors.email}</p>
    <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} /> 
    <p>{formErrors.direccion}</p>
    <input type='text' name='direccion' placeholder='direccion' value={formData.direccion} onChange={handleChange}  />
    <textarea name="message" type='submit' cols="30" rows="5"></textarea>    
    <button id='btnEnviarOrden'>Enviar Orden</button>
  </form>
  <button type='button' id='btnEnviarOrden' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
  <button type='button' id='btnEnviarOrden'onClick={() => vaciarForm()} >Vaciar Formulario</button>
  </div>

  <section>
    <div className="container-orden">
    {/* {idOrden!==''&& <label>El id de su orden es : {idOrden}</label>} */}
    {idOrden!==''&& <button type='button' id='btnEnviarOrden' onClick={() => vaciarCarrito()}>Vaciar Carrito</button>}
    </div>
  </section>
    </>


  )
}

export default Checkout