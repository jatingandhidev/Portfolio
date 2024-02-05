import SingleProject from '../../Components/SingleProject'
import './styles.css'

const Projects = () => {
  return (
    <div id="Projects" className="projects-container">
      <div className="projects-heading">My Projects</div>
      <div className="projects-content">
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  )
}
export default Projects
