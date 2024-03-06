import './styles.css'
import { Link } from 'react-router-dom'

const SingleProject = ({ project }) => {
  const { name, description, image, siteLink, githubLink } = project
  return (
    <div className="single-project-container">
      <div className="single-project-card">
        <div className="single-project-content">
          <div className="single-project-back">
            <img src={image?.fields.file.url} className="back-content" />
          </div>
          <div className="single-project-front">
            <div className="front-content">
              <div className="content-title">{name}</div>
              <div className="content-description">{description}</div>
              <div className="action-btn">
                <Link to={siteLink}>
                  <div className="live-site-btn">Live site</div>
                </Link>
                <Link to={githubLink}>
                  <div className="github-btn">Github</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProject
