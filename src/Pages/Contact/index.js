import ContactLeft from '../../Components/ContactLeft'
import ContactRight from '../../Components/ContactRight'
import './styles.css'

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-heading">Contact Me</div>
      <div className="contact-content">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  )
}
export default Contact
