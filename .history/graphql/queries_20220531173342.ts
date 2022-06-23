import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            created_at
            id
            topic
        }
    }
`

export c

export const GET_ALL_POSTS = gql`
    query MyQuery {
        getPostList{
            created_at
            id
            title
            body
            subreddit_id
            username
            image
            comment{
                id
                created_at
                post_id
                text
                username
            }
            subreddit{
                created_at
                id
                topic
            }
            vote{
                created_at
                id
                post_id
                username
                upvote
            }
        }
    }
`
export const GET_ALL_POSTS_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getPostListByTopic(topic: $topic) {
            created_at
            id
            title
            body
            subreddit_id
            username
            image
            comment{
                id
                created_at
                post_id
                text
                username
            }
            subreddit{
                created_at
                id
                topic
            }
            vote{
                created_at
                id
                post_id
                username
                upvote
            }
        }
    }
`