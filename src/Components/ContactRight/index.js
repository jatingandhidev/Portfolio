import './styles.css'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactRight = () => {
  return (
    <div className="contact-content-right">
      <ul className="social-links">
        <li>
          <SiGmail />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
    </div>
  )
}
export default ContactRight
