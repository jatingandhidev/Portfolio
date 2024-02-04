import './styles.css'
import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { FaBriefcase } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
        <AnchorLink href="#Home">
          <li>{screenWidth > 600 ? 'Home' : <FaHome />}</li>
        </AnchorLink>
        <AnchorLink href="#About">
          <li>{screenWidth > 600 ? 'About' : <FaPerson />}</li>
        </AnchorLink>
        <AnchorLink href="#Projects">
          <li>{screenWidth > 600 ? 'Projects' : <FaBriefcase />}</li>
        </AnchorLink>
        <AnchorLink href="#About">
          <li>{screenWidth > 600 ? 'Contact' : <BiSolidContact />}</li>
        </AnchorLink>
      </ul>
    </div>
  )
}
export default Navbar
