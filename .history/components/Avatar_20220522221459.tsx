import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Avatar() {
    const {data : session } =useSession()
  return (
      <div className="relative h-10 w-10 rounded-full border-gray-300 ">
          <Image
              layout='fill'
              src={`https://avatars.dicebear.com/api/human/${session?.user?.name || 'placeholder'}`} />
    </div>
  )
}

export default Avatar