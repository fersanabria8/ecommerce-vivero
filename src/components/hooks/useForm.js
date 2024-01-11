import { useState } from "react"

export const useForm = (initialState = {name: '', tel: '', email:'', direccion:''}) => {
const [formData, setFormData] = useState({initialState})


const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


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

const handleChange=(e)=>{
  setFormData({
    ...formData, 
    [e.target.name]: e.target.value
  })
}

const vaciarForm = () => {
  setFormData({
    name: '',
    tel: '',
    email:'',
    direccion:''
  })
}

/// VALIDACIONES


  return (
  {
    formData,
    setFormData,
    handleChange,
    vaciarForm,
  }
  )
}

export default useForm

