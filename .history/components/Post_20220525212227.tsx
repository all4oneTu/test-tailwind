import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon
} from '@heroicons/react/outline'
import React from 'react'
import Avatar from './Avatar'
import TimeAgo from 'react-timeago'
type Props = {
    post: Post
}

function Post({post}: Props) {
  return (
    <div className="flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600 rounded-md">
      {/* Vote */}
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className='voteButton hover:text-red-400'/>
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className='voteButton hover:text-blue-400'/>
      </div>
      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400 hover:underline">/r{post.subreddit[0]?.topic }</span> . Posted by u/{post.username} <TimeAgo date={post.created_at}/>
          </p>
        </div>
        {/* Body */}
        <div className="py-4">
          <h2 className='text-xl font-semibold'>{post.title}</h2>
          <p className='mt-2 text-sm font-light'>{post.body}</p>
        </div>
        {/* Image */}
        <img className='w-full' src={post.image } alt="" />
        {/* Footer */}
        <div className='flex space-x-4 text-gray-400'>
          <div className='postButtons'>
            <ChatAltIcon className='h-6 w-6' />
            <p className=''>{post.comment.length} Comment</p>
          </div>
          <div className='postButtons'>
            <GiftIcon className='h-6 w-6'/>
            <p
          </div>
          <div className='postButtons'>
            <ShareIcon className='h-6 w-6'/>
            <p

          </div>
          <div className='postButtons'>
            <BookmarkIcon className='h-6 w-6'/>
            <p
          </div>
          <div className='postButtons'>
            <DotsHorizontalIcon className='h-6 w-6'/>
            <p
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post