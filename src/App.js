import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
