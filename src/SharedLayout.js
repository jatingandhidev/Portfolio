// import { Outlet } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  )
}
export default SharedLayout
