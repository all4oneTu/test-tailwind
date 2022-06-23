import { useRouter } from 'next/router'
import React from 'react'
import Avatar from '../../components/Avatar'

function Subreddit() {
    const { query: {topic}} = useRouter()
  return (
      <div className={`h-24 bg-red-400 p-8`}>
          <div className="-mx-8 mt-10 bg-white">
              <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
                  <div>
                      
                  </div>
                  <Avatar seed={topic as string} large/>
              </div>
              <div>
                  <h1>Welcome to the r/{topic} subreddit</h1>
                  <p>r/{topic}</p>
              </div>
          </div>
    </div>
  )
}

export default Subreddit