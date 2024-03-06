import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { FaArrowLeft } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xqkrqnbo')
  const navigate = useNavigate()

  if (state.succeeded) {
    navigate('/')
  }

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
        <form onSubmit={handleSubmit}>
          <div className="input-field input-name">
            <input type="text" id="name" name="name" required="required" />
            <span>Name</span>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="input-field input-email">
            <input type="text" id="email" name="email" required="required" />
            <span>Email</span>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input-field textarea-message">
            <textarea id="message" name="message" required="required" />
            <span>How can I help?</span>
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm
