import React,{useState} from 'react'
import userpicture from '../assets/img/profile-picture.svg'
import {Link} from 'react-router-dom'

interface MyProps {
  userName?: any
}

const ProfileCard = (props: MyProps) => {
const [name , setName] = useState<any>(localStorage.getItem('userInfo'))

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div className="d-flex flex-dir-col border-radius-normal">
      <div className="profile-bg"></div>
      <div className="d-flex flex-dir-col justify-c-center align-items-center">
        <img className="profile-pic-card w-20" src={userpicture}></img>
        <p className="font-normal font-bold no-margin">{JSON.parse(name)[0].username}</p>
        <p className="font-small font-light no-margin">interior designer </p>
      </div>
      <Link to="/">
      <button
        className="btn-no-border margin-20"
        onClick={() => {
          handleLogOut()
        }}
      >
        Log out
      </button>
      </Link>
    </div>
  )
}

export default ProfileCard
