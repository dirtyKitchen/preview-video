import { useState, useEffect } from "react"

function App() {
  const [hoverd, setHoverd] = useState(false);
  
  useEffect(() => { 
    console.log("Hovered")
  },[hoverd])
  return (
    <>
      <video onMouseOver={() => {setHoverd(true)}}
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