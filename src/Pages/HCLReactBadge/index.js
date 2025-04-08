import { Link } from 'react-router-dom'
import './styles.css'
import { FaArrowLeft } from 'react-icons/fa'
import HCLReactBadgeImg from '../../assests/HCL_React_Badge.PNG'

const HCLReactBadge = () => {
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
        <img src={HCLReactBadgeImg} alt="HCLReactBadge" />
      </div>
    </div>
  )
}
export default HCLReactBadge
