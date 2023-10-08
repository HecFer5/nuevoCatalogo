import React from 'react'
import { Link } from 'react-router-dom'
const MenuInicial = () => {
    return (
        <div>



            
            <Link to={`/muestra`} className="btn btn-info"> MOSTRAR TODOS LOS REGISTROS</Link>
            <Link to={`/create`} className="btn btn-info"> INGRESAR UN NUEVO REGISTRO</Link>
        </div>
    )
}

export default MenuInicial