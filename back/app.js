import express from 'express'
import cors from 'cors'
import db from './databases/db.js'
import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/pacientes', blogRoutes)
try {
    await db.authenticate()
    console.log('conexion exitosa')
    
} catch (error) {
    console.log(`le error de conexion es: ${error}`)
}

// app.get('/', (req, res) =>{
//     res.send('HOLA')
// })

app.listen(8000, ()=>{
console.log ('server en http://localhost:8000')
})