import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'
import Avatar from './Avatar'
import TimeAgo from 'react-timeago'
import Link from 'next/link'
import { Jelly } from '@uiball/loaders'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useQuery } from '@apollo/client'
import { GET_ALL_VOTE_BY_POST_ID } from '../graphql/queries'
type Props = {
  post: Post
}

function Post({ post }: Props) {
  const { data: session } = useSession();
  const [vote, setVote] = useState<boolean>()
  const { data, loading } = useQuery(GET_ALL_VOTE_BY_POST_ID);
  const upVote = async (isUpVote: boolean) => {
    if (!session) {
      toast("You must be logged in to vote");
    }
  }
  if (!post) {
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly />
      </div>
    )
  }
  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
        {/* Vote */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon onClick={()=>upVote(true)} className="voteButton hover:text-red-400" />
          <p className="text-xs font-bold text-black">0</p>
          <ArrowDownIcon onClick={()=>upVote(false)} className="voteButton hover:text-blue-400" />
        </div>
        <div className="p-3 pb-1">
          {/* Header */}
          <div className="flex items-center space-x-2">
            <Avatar seed={post.subreddit[0]?.topic} />
            <p className="text-xs text-gray-400">
              <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                  /r{post.subreddit[0]?.topic}
                </span>
              </Link>
              {` `}. Posted by u/{post.username}{' '}
              <TimeAgo date={post.created_at} />
            </p>
          </div>
          {/* Body */}
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
          </div>
          {/* Image */}
          <img className="w-full" src={post.image} alt="" />
          {/* Footer */}
          <div className="flex space-x-4 text-gray-400">
            <div className="postButtons">
              <ChatAltIcon className="h-6 w-6" />
              <p className="">{post.comment.length} Comment</p>
            </div>
            <div className="postButtons">
              <GiftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postButtons">
              <ShareIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postButtons">
              <BookmarkIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postButtons">
              <DotsHorizontalIcon className="h-6 w-6" />
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Post
