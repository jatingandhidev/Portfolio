import { Link } from 'react-router-dom'
import './styles.css'
import { FaArrowLeft } from 'react-icons/fa'
import CMSRecognitionCertificateImg from '../../assests/CMS_Recognition_Certificate.png'

const CMSRecognitionCertificate = () => {
  return (
    <div className="links-container">
      <Link to="/">
        <div className="go-back-btn">
          <FaArrowLeft />
          Go Back
        </div>
      </Link>

      <div className="links-header"></div>
      <div className="links-content">
        <img
          src={CMSRecognitionCertificateImg}
          alt="CMSRecognitionCertificateImg"
        />
      </div>
    </div>
  )
}
export default CMSRecognitionCertificate
