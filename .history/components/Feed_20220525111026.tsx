import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'

function Feed() {
    const { data, error } = useQuery(GET_ALL_POSTS)
    const posts:Post[] = data?.getPostList
  return (
    <div>
      {posts?.map(post => {
        <Post key={post.id} post={}
      })}
    </div>
  )
}

export default Feed