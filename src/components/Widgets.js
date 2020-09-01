import React from 'react'
import '../styles/Widgets.css'
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="fb-widget"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&width=250&height=1500&appId"
        width="250"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}

export default Widgets
