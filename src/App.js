import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import ContactForm from './Pages/ContactForm'

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
