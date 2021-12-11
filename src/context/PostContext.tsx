import React, { createContext, useState } from 'react'

// interface PostStates {
//   postsList: {}
// }

// interface PostStates {
//   [index: number]: {
//     title: string
//     description: string
//   }
// }

interface ContextProps {
  postsList: string[]
}

export const PostContext = createContext<ContextProps>({
  postsList: [],
})
// export const PostContext = createContext<PostStates>([
//   {
//     title: '',
//     description: '',
//   },
// ])

export const PostProvider = (props: any) => {
  // const [postsList, setPostsList] = useState<any>([
  //   {
  //     title: ' my First Post',
  //     description: 'here I wanna talk about ...',
  //   },
  //   {
  //     title: ' my second Post',
  //     description: 'Im glad to here that  ...',
  //   },
  //   {
  //     title: ' my third Post',
  //     description: 'good news for designers ...',
  //   },
  //   ,
  // ])
  const postsList = [' my First Post', ' my second Post', ' my third Post']
  return (
    <PostContext.Provider value={{ postsList }}>
      {props.children}
    </PostContext.Provider>
  )
}
