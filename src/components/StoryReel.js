import React from 'react'
import '../styles/StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="yubi.jpg" profileSrc="yuba.jpg" title="Yubi Khadka" />
      <Story image="budi2.jpeg" profileSrc="budi.jpg" title="Buchu Basnet" />
      <Story image="yuba.jpg" profileSrc="yubi.jpg" title="Yubi Khadka" />
      <Story image="budi2.jpeg" profileSrc="budi.jpg" title="Buchu Basnet" />
      <Story image="budi.jpg" profileSrc="budi2.jpeg" title="Buchu Basnet" />
      <Story image="budi.jpg" profileSrc="budi2.jpeg" title="Buchu Basnet" />
    </div>
  )
}

export default StoryReel
