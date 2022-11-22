import './App.css';
import { useEffect,useState} from 'react';
function App() {
  
  // useState hook
  const [info,setInfo]=useState({});
  const [location,setLocation]=useState("");
//  useEffect hook
  useEffect(()=>{ 
    fetchdata()
  },[location]) 
  const fetchdata= async()=>{
    const api=await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6f51bae766919fdc39b306258e43a844`);
    const apiData=await api.json();
    setInfo(apiData);
    console.log(apiData);
  }  
 
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setLocation(event.target.value)
        }
  }
    return (
    <>
    <div className='container' id={info.id}>
    <input
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Your Location"
          type="text"
          autoComplete='on'
          autoCorrect='on' />
      <div className='top'>
                <div className='left'>
                  <h1>{info.name}</h1>
                  <h2>{info.main?.temp}<sup>o</sup>C</h2>
                </div>
                <div className='right'>
                  <p>{info.weather?info.weather[0].description:null}</p>
                </div>
      </div>
      <div className='bottom'>
              <div className='humidity'>
                <h5 className='bold'>{info.main?.humidity}%</h5>
              <p>Humidity</p>
            </div>
            <div className='visibility'>
              <h5 className='bold'>{info.visibility>1000 ?info?.visibility/1000+"km":info?.visibility+"m"}</h5>
              <p>Visibility</p>
            </div>
            <div className='feels_like'>
              <h5 className='bold'>{info.main?.feels_like}<sup>o</sup>C</h5>
              <p>feels_like</p>
            </div>
      </div>
      <p className='para'>♥ by Burhan R Bajwa</p>
    </div>
        </>
  );
}
export default App;