import React, { createContext, useState } from 'react'

// interface PostStates {
//   postsList: {}
// }

interface PostStates {
  [index: number]: {
    title: string
    description: string
  }
}

export const PostContext = createContext<PostStates>([
  {
    title: '',
    description: '',
  },
])

export const PostProvider = (props: any) => {
  const [postsList, setPostsList] = useState<any>([
    {
      title: ' my First Post',
      description: 'here I wanna talk about ...',
    },
    {
      title: ' my second Post',
      description: 'Im glad to here that  ...',
    },
    {
      title: ' my third Post',
      description: 'good news for designers ...',
    },
    ,
  ])

  return (
    <PostContext.Provider value={[postsList, setPostsList] }>
      {props.children}
    </PostContext.Provider>
  )
}
