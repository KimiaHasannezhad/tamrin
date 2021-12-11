import React, { useState, useContext } from 'react'
import userpicture from '../assets/img/profile-picture.svg'
import { PostContext } from '../context/PostContext'
interface MyProps {
  addPosts: any
}
const AddPosts = (props: MyProps) => {
  const [content, setContent] = useState<any>('')
  // const postsList = useContext<any>(PostContext)
  // const postsList = [' my First Post', ' my second Post', ' my third Post']

  const handleCreateContent = (myContent: any) => {
    setContent(myContent)
  }

  const handleAddPosts = () => {
    props.addPosts(content)
  }

  return (
    <div>
      <div className="">
        <div>
          <div className="d-flex flex-dir-row-reverse padding-20">
            <img className="profile-pic w-10" src={userpicture}></img>
          </div>
          <input
            className="customized-text-input w-90 font-large  text-align-right padding-10"
            type="text"
            placeholder="... چیزی بنویس "
            onChange={(e) => handleCreateContent(e.target.value)}
          ></input>
        </div>
        <div className="add-file-section d-flex flex-dir-row-reverse bg-lightblue justify-c-space-between">
          <input className="padding-20 w-20" type="file"></input>
          <input className="padding-20 w-20" type="file"></input>
          <button
            className="margin-20 btn-outline border-radius-normal w-20 "
            onClick={() => handleAddPosts()}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPosts
