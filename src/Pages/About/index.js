import './styles.css'
import AboutLeft from '../../Components/AboutLeft'
import { useContext } from 'react'
import { DataContext } from '../../SharedLayout'

const useDataContext = () => useContext(DataContext)
const About = () => {
  const data = useDataContext()
  return (
    <div id="About" className="about-container">
      <div className="inner-container">
        <img
          src={data?.sanitizedAboutEntries?.[0].image.fields.file.url}
          className="about-image"
          onError={(e) => {
            e.target.style.display = 'none' // Hide the image on error
            console.error('Error loading image:', e.target.src)
          }}
        />
        <AboutLeft />
      </div>
    </div>
  )
}
export default About
