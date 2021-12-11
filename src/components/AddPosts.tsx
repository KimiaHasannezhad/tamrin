import React, { useState, useContext } from 'react'
import { PostContext } from '../context/PostContext'
interface MyProps {
  setPostsList: any
  postsList: any
}
const AddPosts = (props: MyProps) => {
  const [content, setContent] = useState('')
  const [postsList, setPostsList] = useContext<any>(PostContext)

  const handleCreateContent = (myContent) => {
    setContent(myContent)
  }

  const handleAddPosts = () => {
    var array = [...props.postsList];
    array.push({ title: 'this is the next one', description: content });
    
    // setPostsList(['kimia'])
    console.log(props.postsList)
  }

  return (
    <div>
      <div className="d-flex flex-dir-row-reverse padding-20">
        <input
          className="customized-text-input w-100 font-large  text-align-right padding-10"
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
  )
}

export default AddPosts
