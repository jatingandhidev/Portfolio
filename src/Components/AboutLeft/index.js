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
          I'm Jatin, 23 year old self taught fullstack web developer with more
          than 3 years of experience. I specialize in building websites with
          user-friendly frontend and well optimized backend using React.js and
          Node.js.
        </div>
        <div>
          I'm also a part of a Work Integrated learning program with HCL Tech.
          As experienced software engineer my role includes web application
          development, job automation, and performance optimization using
          technologies like React.js, Redwood, and ISIS Papyrus.
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
          <FaHtml5 title="HTML5" />
        </li>
        <li>
          <FaCss3Alt title="CSS3" />
        </li>
        <li>
          <IoLogoJavascript title="JavaScript" />
        </li>
        <li>
          <FaReact title="React" />
        </li>
        <li>
          <FaNode title="Node.js" />
        </li>
        <li>
          <SiMongodb title="MongoDB" />
        </li>
      </ul>
    </div>
  )
}
export default AboutLeft
