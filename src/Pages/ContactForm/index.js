import { Link } from 'react-router-dom'
import './styles.css'
import { FaArrowLeft } from 'react-icons/fa'

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <Link to="/">
        <div className="go-back-btn">
          <FaArrowLeft />
          Go Back
        </div>
      </Link>

      <div className="contact-form-header">Contact Me</div>
      <div className="contact-form">
        <form action="">
          <div className="input-field input-name">
            <input type="text" id="name" name="name" required="required" />
            <span>Name</span>
          </div>
          <div className="input-field input-email">
            <input type="text" id="email" name="email" required="required" />
            <span>Email</span>
          </div>
          <div className="input-field textarea-message">
            <textarea id="message" name="message" required="required" />
            <span>How can I help?</span>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm
