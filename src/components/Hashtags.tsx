import React from 'react'
import add from '../assets/icons/add.svg'

const hashtagList = [
  { id: 0, title: 'bussiness' },
  { id: 1, title: 'design' },
  { id: 2, title: 'decorations' },
  { id: 3, title: 'womenrights' },
  { id: 4, title: 'newyear' },
  { id: 5, title: 'christmasdesign' },
  { id: 6, title: 'interior' },
  { id: 7, title: 'designers' },
]

const Hashtags = () => {
  return (
    <div className="margin-10">
      <div className="d-flex flex-dir-row-reverse justify-c-space-between ">
        <div className="items-header d-flex flex-dir-row-reverse justify-c-space-between">
          <p className="font-small font-bold">هشتگ هایی که دنبال میکنید</p>
          <img className="w-10" src={add}></img>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {!!hashtagList &&
          hashtagList.map((item, key) => {
            return <div className="font-small hashtag-items margin-5 border-radius-normal">#{item.title}</div>
          })}
      </div>
    </div>
  )
}

export default Hashtags
