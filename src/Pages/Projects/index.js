import SingleProject from '../../Components/SingleProject'
import './styles.css'
import { useContext } from 'react'
import { DataContext } from '../../SharedLayout'
import Loading from '../../Components/Loading'

const useDataContext = () => useContext(DataContext)

const Projects = () => {
  const data = useDataContext()
  return (
    <div id="Projects" className="projects-container">
      <div className="projects-heading">My Projects</div>
      <div className="projects-content">
        {data?.sanitizedProjectEntries?.map((project) => {
          return <SingleProject key={project.name} project={project} />
        }) || <Loading />}
      </div>
    </div>
  )
}
export default Projects
