import './styles.css'
import { useContext } from 'react'
import { DataContext } from '../../SharedLayout'

const useDataContext = () => useContext(DataContext)

const HomeRight = () => {
  const data = useDataContext()

  return (
    <div>
      <h1>Hey, I'm {data?.sanitizedHomeEntries?.[0].name || 'Jatin Gandhi'}</h1>
      <p>
        {data?.sanitizedHomeEntries?.[0].intro ||
          "FullStack Web Developer with 2 years of experience. Currently working as Software Engineer at HCL Tech, where my role in Application Management. Let's build something great together!"}
      </p>
    </div>
  )
}
export default HomeRight
