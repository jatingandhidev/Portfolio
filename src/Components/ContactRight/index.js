import './styles.css'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../SharedLayout'

const useDataContext = () => useContext(DataContext)

const ContactRight = () => {
  const data = useDataContext()
  return (
    <div className="contact-content-right">
      <ul className="social-links">
        <li>
          <Link
            to={`mailto:${data?.sanitizedContactEntries?.[0].gmail}`}
            target="_blank"
          >
            <SiGmail />
          </Link>
        </li>
        <li>
          <Link
            to={data?.sanitizedContactEntries?.[0].linkedin}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link to={data?.sanitizedContactEntries?.[0].github} target="_blank">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link to={data?.sanitizedContactEntries?.[0].twitter} target="_blank">
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default ContactRight
