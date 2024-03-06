// import { Outlet } from 'react-router-dom'
import Navbar from './Sections/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Sections/Footer'
import useContentful from './useContentful'

import { useEffect, useState, createContext } from 'react'

export const DataContext = createContext()

const SharedLayout = () => {
  const [data, setData] = useState([])
  const { getData } = useContentful()

  useEffect(() => {
    getData().then((response) => setData(response))
  }, [])

  return (
    <DataContext.Provider value={data}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </DataContext.Provider>
  )
}
export default SharedLayout
