import { Link } from 'react-router-dom'
import './styles.css'
import { IoIosSend } from 'react-icons/io'

const ContactLeft = () => {
  return (
    <div className="contact-content-left">
      <div className="left-heading">Get In Touch</div>
      <Link to="/contact">
        <div className="left-content">
          send details <IoIosSend />
        </div>
      </Link>
    </div>
  )
}
export default ContactLeft
