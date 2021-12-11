import React, { useEffect, useState, useContext } from 'react'

import Hashtags from '../components/Hashtags'
import Communications from '../components/Communications'
import ProfileCard from '../components/ProfileCard'
import AddPosts from '../components/AddPosts'
import { PostContext } from '../context/PostContext'

const Home = () => {
  const [name, setName] = useState(localStorage.getItem('username'))
  const [posts, setPosts] = useState([
    ' my First Post',
    ' my second Post',
    ' my third Post',
  ])
  const [showPostsList, setShowPostsList] = useState(false)

  const addPosts = (item) => {
    setPosts((posts) => [...posts, item])
  }

  useEffect(() => window.scrollTo(0, 0))
  return (
    <div className="d-flex flex-di-row justify-c-center align-items-flex-start">
      <div className="w-20 margin-20 bg-white padding-20 border-radius-normal">
        <Hashtags />
      </div>
      <div className="d-flex flex-dir-col w-50">
      <div className="w-90 margin-20 bg-white  border-radius-normal ">
        <AddPosts addPosts={addPosts} />
      </div>
      <div className="w-90 margin-20 bg-white  border-radius-normal ">
        {!!posts && (
          <div className="padding-20">
            <div className="d-flex flex-dir-row padding-20 font-size-large font-bold">
              Your posts
            </div>
            <div>
              {posts.map((item) => {
                return <p>{item}</p>
              })}
            </div>
          </div>
        )}
      </div>
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
