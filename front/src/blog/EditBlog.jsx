import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'


const URI = 'http://localhost:8000/pacientes/'

const CompEditBlog = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, { nombre: nombre, apellido: apellido, telefono: telefono })
    navigate('/muestra')
  }

  useEffect(() => {
    getBlogById()

  }, [])

  const getBlogById = async () => {
    const res = await axios.get(URI + id)
    setNombre(res.data.nombre)
    setApellido(res.data.apellido)
    setTelefono(res.data.telefono)

  }

  return (
    <div>
      <h3>editar</h3>
      <form onSubmit={update}>
        <div className='mb-3'>
          <label className='form-label'> Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Apellido</label>
          <textarea
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Telefono</label>
          <textarea
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Store</button>
      </form>
      <hr />
      <Link to={`/`} className="btn btn-info"> Volver al principio</Link>

    </div>
  )
}

export default CompEditBlog