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
          I'm Jatin, 22 year old self taught fullstack web developer with 2
          years of experience. I specialize in building websites with
          user-friendly frontend and well optimized backend using React.js and
          Node.js.
        </div>
        <div>
          I'm also a part of a WILP with HCL Tech. As experienced software
          engineer my role includes operational work and handling development
          requests.
        </div>
        <div>
          When I'm not working, I love kicking back and getting into web series
          and anime. Gaming is also a big part of my downtime – there's nothing
          like diving into a good game. And to balance it all out, I enjoy
          staying active with workouts and playing sports like football. This
          helps me keep my head clear while I am working.
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
