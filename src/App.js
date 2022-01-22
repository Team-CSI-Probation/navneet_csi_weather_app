import React,{useState} from 'react';
import './index.css'


function App() {
 const apiKey ='4c7df8f2525e02705cac9f74af49328c'   
  const[weather,setWeather]= useState({})

  return(
      <div className = "container">
      <main>
     <div className="searchBox">
     <input
      type ="text"
      className ="search-bar"
       placeholder="Enter Place.."></input>
     </div>
     <div className="location_box"> 
     <div className="location"> Mumbai,India</div>

     </div>
      </main>
      </div>
  )
}

export default App;