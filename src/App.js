import React, {useState, useEffect} from 'react'

function App() {

  const [ctime, setCtime] = useState(0);

  useEffect(() => {
    const myvideo = document.querySelector(".buddyVideo")
    console.log(myvideo.currentTime)
    setCtime(ctime + 20);
  },[ctime])

  return (
    <>
      <video className="buddyVideo" controls onMouseOver={() => setCtime(ctime + 20)}
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