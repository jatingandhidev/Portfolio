import './styles.css'

const SingleProject = () => {
  return (
    <div className="single-project-container">
      <div className="single-project-card">
        <div className="single-project-content">
          <div className="single-project-back">
            <div className="back-content">back</div>
          </div>
          <div className="single-project-front">
            <div className="front-content">
              <div className="content-title">Title</div>
              <div className="content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit voluptate, temporibus ad modi rem minus. Eveniet
                reprehenderit maiores laboriosam provident quod exercitationem
                ipsum. Velit doloremque, porro aliquid officiis quibusdam
                molestiae?
              </div>
              <div className="action-btn">
                <div className="live-site-btn">Live site</div>
                <div className="github-btn">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProject
