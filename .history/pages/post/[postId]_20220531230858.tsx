import { useMutation, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../components/Post'
import { GET_POST_BY_ID } from '../../graphql/queries'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ADD_COMMENT } from '../../graphql/mutations'

type FormData = {
  comment: string
}

function PostPage() {
  const router = useRouter()
  const { data } = useQuery(GET_POST_BY_ID, {
    variables: {
      post_id: router.query.postId,
    },
  })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>()
  const { data: session } = useSession()
  const post: Post = data?.getPostById
  const onSubmit: SubmitHandler<FormData> = async (data) => {
     //post comment here 
    console.log(data)
  } 
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_ID]
  })
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div className="-mt-1 rounded-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-5xl flex-col space-y-2">
          <textarea
            {...register('comment')}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              session ? 'What are you thoughts ? ' : 'Please sign in to comment'
            }
            disabled={!session}
          />
          <button
            disabled={!session}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostPage
