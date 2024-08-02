import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/register" element={<Signup />} />
    <Route path="/login" element={<Login />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
