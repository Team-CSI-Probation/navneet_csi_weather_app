import React,{useState} from 'react';
import './index.css'
const api={ 
    key:"4c7df8f2525e02705cac9f74af49328c",
    base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
 const apiKey ='4c7df8f2525e02705cac9f74af49328c'   
  const[weather,setWeather]= useState({});
  const[query,setQuery]=useState('');
  
  const search = evt=>{
      if(evt.key==="Enter"){
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {setWeather(result);
        setQuery();
     });
      }
  }
  return(
      <div className ={
          (typeof weather.main != "undefined")?(
        (weather.weather[0].main==="sunny" ? 'container sunny':
         weather.weather[0].main==="clear" ? 'container clear':
         weather.weather[0].main==="haze" ? 'container haze':
         weather.weather[0].main==="mist" ? 'container mist':
         weather.weather[0].main==="clouds" ? 'container clouds':'container'))
          : "container"
           }>

      <main>
     <div className="searchBox">
     <input
      type ="text"
      className ="search-bar"
       placeholder="Enter Place.."
           onChange={e => setQuery(e.target.value)}
           value={query}
           onKeyPress={search}
           />
     </div>
     {(typeof weather.main!='undefined') ? (
         <div>
     <div className="location_box"> 
     <div className="location">{weather.name},{weather.sys.country}</div>

     </div>
     <div className="weather_box">
      <div className="temp">
          {weather.main.temp}°C
                </div>
      <div className="weather">{weather.weather[0].main}</div>

     </div>
     </div>
     ) : ('')}
      </main>
      </div>
  )
}

export default App;