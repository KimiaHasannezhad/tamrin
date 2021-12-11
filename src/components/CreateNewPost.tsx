import React,{useContext} from 'react'
import userpicture from '../assets/img/profile-picture.svg'
import AddPosts from './AddPosts'
import {PostContext} from '../context/PostContext'



const CreateNewPost = () => {
  const [postsList , setPostsList] = useContext<any>(PostContext)
  return ( 
    <div>
      <div className="d-flex flex-dir-row-reverse padding-20">
        <img className="profile-pic w-10" src={userpicture}></img>
      </div>
      <PostContext.Provider value={[postsList , setPostsList]}>
      <AddPosts 
      postsList={postsList}
      setPostsList={setPostsList} 
      />
      </PostContext.Provider>
    </div>
  )
}

export default CreateNewPost
