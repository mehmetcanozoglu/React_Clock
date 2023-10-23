import React, {useState} from 'react';
import './App.css';
import 'animate.css';

function App() {
  let time = new Date().toLocaleTimeString()
  let [currentTime, setCurrentime] = useState(time)

  function Time(){
  let time = new Date().toLocaleTimeString()
  setCurrentime(time)
  }

  setInterval(Time, 1000)
  return (
    <div className="App">
    <h1 class="animate__animated animate__backInLeft">{currentTime}</h1>
    </div>
  );
}

export default App;
