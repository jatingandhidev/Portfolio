import './styles.css'
import { FaReact, FaHtml5, FaCss3Alt, FaNode } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiMongodb } from 'react-icons/si'

const AboutLeft = () => {
  return (
    <div className="about-left">
      <div className="about-heading">About Me</div>
      <div className="about-content">
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          architecto cupiditate omnis suscipit similique. Delectus architecto
          vel provident labore distinctio asperiores ab commodi, nemo esse illum
          ex officiis minima, aperiam ducimus sed hic voluptatum reprehenderit.
        </div>
        <div>
          Atque necessitatibus, commodi, ipsam, voluptates asperiores voluptas
          eaque totam alias quo et sed harum ipsum?
        </div>
      </div>

      <div className="tech-stack-heading">Tech stack</div>
      <ul className="tech-stack-list">
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <IoLogoJavascript />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaNode />
        </li>
        <li>
          <SiMongodb />
        </li>
      </ul>
    </div>
  )
}
export default AboutLeft
