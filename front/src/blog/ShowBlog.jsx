import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/pacientes/'

const CompShowBlogs = () => {
 const [pacientes, setPacientes] = useState([])

 useEffect(() =>{
    getBlogs()
 }, [])

////para mostrar todos
const getBlogs = async () =>{
   const res = await axios.get(URI)
   setPacientes(res.data)

}
// ELIMINAR

const deleteBlogs = async (id) =>{
   const del = await axios.delete(`${URI}${id}`)
   getBlogs()
   

}

return(<>
   

<div className="container">
   <div className="row">
      <div className="col">
         <Link to = '/create' className="btn btn-primary mt-2 mb-5">Crear nuevo</Link>
         <table className="table">
            <thead className="table-primary">
               <tr>
                  <th>Apellido</th>
                  <th>Nombre</th>
                  <th>Teléfono</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {pacientes.map((paciente)=> (
                  <tr key= {paciente.id}>
                     <td>{paciente.apellido}</td>
                     <td>{paciente.nombre}</td>
                     <td>{paciente.telefono}</td>

                     <td>
                        <Link to= {`/edit/${paciente.id}`} className="btn btn-info"> 
                        Editar</Link>
                        <button className="btn  btn-danger" onClick={()=>{deleteBlogs(paciente.id)}}>Borrar</button>
                     </td>
                  </tr>
               ))

               }
            </tbody>
         </table>
      </div>
   </div>
   <Link to= {`/`} className="btn btn-info"> Volver al principio</Link>

</div>
</>
)
}







export default CompShowBlogs