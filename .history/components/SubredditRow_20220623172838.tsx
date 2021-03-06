import { ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import Avatar from './Avatar'

type Props = {
  index: number,
  topic: string 
}
export default function SubredditRow({ index, topic }: Props) {
  return (
      <div className="flex items-center spcae-x-2 border-t bg-white px-4 py-2 last:rounded-b">
          <p>{index + 1}</p>
          <ChevronDownIcon className="h-4 w-4 flex-shrink-0 text-green-400"/>
          <Avatar seed={`/subreddit/${topic}`} />
          <p className="flex-1 truncate">r/{topic}</p>
          <Link
    </div>
  )
}
