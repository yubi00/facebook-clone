import React, { useState, useEffect } from 'react'
import '../styles/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase/firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post, i) => (
        <Post
          key={i}
          profilePic={post.data.profilePic}
          message={post.data.message}
          username={post.data.username}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
