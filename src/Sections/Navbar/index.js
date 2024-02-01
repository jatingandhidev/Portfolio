import './styles.css'
import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { FaBriefcase } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi'
const Navbar = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    let prevScrollPos = window.pageYOffset
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      if (prevScrollPos > currentScrollPos) {
        setNavbarVisible(true)
      } else if (window.innerWidth <= 600) {
        setNavbarVisible(false)
      }

      prevScrollPos = currentScrollPos
    }
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateScreenWidth)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateScreenWidth)
    }
  }, [])
  return (
    <div className={`nav-container ${isNavbarVisible ? '' : 'navbar-hidden'}`}>
      <ul>
        <li>{screenWidth > 600 ? 'Home' : <FaHome />}</li>
        <li>{screenWidth > 600 ? 'About' : <FaPerson />}</li>
        <li>{screenWidth > 600 ? 'Projects' : <FaBriefcase />}</li>
        <li>{screenWidth > 600 ? 'Contact' : <BiSolidContact />}</li>
      </ul>
    </div>
  )
}
export default Navbar
