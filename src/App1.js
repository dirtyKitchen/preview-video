import { useState, useEffect } from "react"



//function App() {
  // const [hoverd, setHoverd] = useState();
  // const [hoverTime, setHoveredTime] = useState(0);
  // const [newHover, setNewHover] = useState(0);
  
  // useEffect(() => { 
  //   if(hoverd) { 
  //     const myVideo = document.getElementsByClassName('.bunnyVideo');
  //     setHoveredTime(30);
  //     myVideo.currentTIme(hoverTime);
  //     // console.log(hoverTime);  
  //   }
  // },[hoverd, hoverTime])

  const myFunction = () => {
    const myVideo = document.getElementsByClassName('.buddyVideo');
    setNewHover = newHover + 20;
    console.log(setNewHover);

}

  useEffect(() => {
    myFunction()
  }, [])

  return (
    <>
      <video controls className="bunnyVideo" onMouseOver={() => myFunction()}
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