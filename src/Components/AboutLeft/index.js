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
          Experienced professional with 3 years at HCL Technologies,
          specializing in application support and management. Proven expertise
          in administering critical applications like SAP, BizTalk, and Redwood,
          coupled with a strong background in monitoring and operational tasks.
        </div>
        <div>
          Transitioned to the Application Management Team, where I handled both
          operational duties and minor development requests, gaining proficiency
          in maintaining and enhancing software systems. Seeking a full-stack
          role, equipped with skills in React, Node.js, and MongoDB, to leverage
          my diverse experience and contribute effectively to organizational
          success.
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
