import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import Post from './Post'

type Props = {
    topic: string
}

function Feed({topic} : Props) {
    const { data, error } = !topic ? useQuery(GET_ALL_POSTS) : useQuery(GET_ALL_POSTS_BY_TOPIC)
    const posts: Post[] = data?.getPostList
    console.log(posts)
  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post,index) => (
         <Post post={post} key={post.id}  />
      )
      )}
    </div>
  )
}

export default Feed