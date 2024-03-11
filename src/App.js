import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import ContactForm from './Pages/ContactForm'
import PageNotFound from './Pages/PageNotFound'
import FormSubmitted from './Pages/FormSubmitted'

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/form-submitted" element={<FormSubmitted />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
