import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'







const URI = 'http://localhost:8000/pacientes/'

const CompCreateBlog = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')

    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre: nombre, apellido: apellido, telefono: telefono })
        navigate('/muestra')
    }

    return (
        <div>
            <h3>Ingresar nuevo registro</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido</label>
                    <input
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Telefono</label>
                    <input
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                    </div>

                
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
            <hr />
            <Link to={'/'} className="btn btn-info"> Volver al principio</Link>

        </div>
    )
}

export default CompCreateBlog