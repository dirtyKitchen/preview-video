import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    const videoID = document.getElementById("buddyVideo")
    videoID.currentTime = 200;
  }, [])

  function changeTime() {
    const videoID = document.getElementById("buddyVideo")
    videoID.currentTime = 0;
  }

  return (
    <>
      <button className="pUser" onClick={changeTime}>Premium User</button>
      <video className="testing" id="buddyVideo" autoPlay controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        width="1000">
        Sorry, your browser doesn't support embedded videos, but don't worry, you can
        <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
        and watch it with your favorite video player!
      </video>
    </>
  )
}

export default App