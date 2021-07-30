import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
  // useEffect(() => {
  //   axios.get()
    
  // }, [])

  return(
    <div className="landingPageContainer">
      <h3>Hi ____, welcome to Teamli</h3>
      <Link to="/create_new_user">create a new user</Link>
    </div>
  )
}

export default Home