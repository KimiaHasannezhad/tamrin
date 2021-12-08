import React, { useEffect ,useState} from 'react'
import Hashtags from '../components/Hashtags'
import Communications from '../components/Communications'
import ProfileCard from '../components/ProfileCard'
import CreateNewPost from '../components/CreateNewPost'

// interface MyProps {
//   displaySignUp: any
// }

const Home = () => {
  const [name, setName] = useState(localStorage.getItem('username'))

  return (
    <div className="d-flex flex-di-row justify-c-center align-items-flex-start">
      <div className="w-20 margin-20 bg-white padding-20 border-radius-normal">
        <Hashtags />
      </div>
      <div className="w-50 margin-20 bg-white  border-radius-normal ">
        <CreateNewPost />
      </div>
      <div className="w-30 border-radius-normal d-flex flex-dir-col">
        <div className="d-flex flex-dir-col">
          <div className="profile-card-section bg-white margin-20 border-radius-normal">
            <ProfileCard userName={name} />
          </div>
          <div className="bg-white margin-20 padding-20 border-radius-normal">
            <Communications />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
