import React from 'react'
import add from '../assets/icons/add.svg'
import user from '../assets/icons/user.svg'
import steve from '../assets/icons/steve.svg'
import ryan from '../assets/icons/ryan.svg'
import dylan from '../assets/icons/dylan.svg'



const usersYouMayKnow= [
    {
        name: 'steve Jobs',
        career:'CEO of Apple',
        imgUrl: steve
    },
    {
        name: 'Ryan Roslaynsky',
        career:'CEO of Linkdin',
         imgUrl:ryan
    },
    {
        name: 'Dylan Feild',
        career:'CEO of Figma',
         imgUrl:dylan
    }
    ]

const Communications = () => {
  return (
    <div>
      <div className="d-flex flex-dir-col justify-c-space-between ">
      <div className="font-bold text-align-center ">
      <p>ارتباطات خود را گسترش دهید</p>
      </div>
        {!!usersYouMayKnow && usersYouMayKnow.map((item,key)=>{
            return(
                <div className="d-flex flex-dir-row-reverse justify-c-space-between align-items-center">
                <img className="w-20" src={item.imgUrl}></img>
                <div className="w-50 text-align-right">
                <p className="font-bold font-normal">{item.name} </p>
                <p className="font-small font-light">{item.career}</p>
                </div>
                <button className="btn-outline border-radius-normal">contact</button>
                </div>
            )
        })
        }
        <div className="more-btn text-align-center">
          <button className="btn-no-border border-radius-normal font-bold">بیشتر</button>
        </div>
      </div>
    </div>
  )
}

export default Communications
