import React from 'react'
import userpicture from '../assets/img/profile-picture.svg'

const CreateNewPost = () => {
  return (
    <div>
    
      <div className="d-flex flex-dir-row-reverse padding-20">
      <img className="profile-pic w-10" src={userpicture}></img>
      </div>

      <div className="d-flex flex-dir-row-reverse">
       <input className="customized-text-input w-100 font-large  text-align-right padding-10" type="text"  placeholder="... چیزی بنویس ">
       </input>
      </div>

      <div className="add-file-section d-flex flex-dir-row-reverse bg-lightblue justify-c-space-between">
      <input className="padding-20 w-20" type="file"></input>
      <input className="padding-20 w-20" type="file"></input>
      <button className="margin-20 btn-outline border-radius-normal w-20 ">ارسال</button>
      </div>

    </div>
  )
}

export default CreateNewPost
