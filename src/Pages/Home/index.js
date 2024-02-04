import './styles.css'
import HomeLeft from '../../Components/HomeLeft'
import HomeRight from '../../Components/HomeRight'

const Home = () => {
  return (
    <div id="Home" className="home-container">
      <div className="home-left">
        <HomeLeft />
      </div>
      <div className="home-right">
        <HomeRight />
      </div>
    </div>
  )
}
export default Home
