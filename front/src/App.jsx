import './App.css'
import { Route, Routes } from 'react-router-dom'
import CompShowBlogs from './blog/ShowBlog'
import CompCreateBlog from './blog/CreateBlogs'
import CompEditBlog from './blog/EditBlog'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuInicial from './blog/MenuInicial'
import Navbar from './components/navbar'
import Turnos from './blog/Turnos'



function App() {


  return (
    <div className="App">
     
      <Routes>
        
        <Route path='/' element={<Navbar />} />
        <Route path='/muestra' element={<CompShowBlogs />} />
        <Route path='/create' element={<CompCreateBlog />} />
        <Route path='/edit/:id' element={<CompEditBlog />} />
        <Route path='/turnos' element={<Turnos />} />   
      </Routes>

    </div>
  )
}

export default App
