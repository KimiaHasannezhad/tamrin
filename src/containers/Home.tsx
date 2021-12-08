import React from 'react'
import Hashtags from '../components/Hashtags'

// interface MyProps {
//   displaySignUp: any
// }

const Home = () => {
  return <div className="d-flex flex-di-row justify-c-center ">
  <div className="w-10 margin-20 bg-white padding-20 border-radius-normal">
  <Hashtags/>
  </div>
  <div className="w-50 margin-20 bg-white padding-20 border-radius-normal ">
  <Hashtags/>
  </div>
  <div className="w-20 margin-20 bg-white padding-20 border-radius-normal">
  <Hashtags/>
  </div>
  </div>
}

export default Home
