// import { Outlet } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Sections/Footer'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
export default SharedLayout
