import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './details.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'


function Details() {
  
  const { state, place } = useParams();
  //console.log(state)

  const [placeDetail, setPlaceDetails] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL based on state and place
    const apiUrl = `http://localhost:3001/india/${state}/${place}`;

    // Use Axios to make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setPlaceDetails(response.data);
        
        const openWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place},${state}&appid=4956fc987f8e36442bf52d161c24fc2d&units=metric`;

        axios
          .get(openWeatherApiUrl)
          .then((weatherResponse) => {
            setWeather(weatherResponse.data);
            setLoading(false);
          })
          .catch((weatherError) => {
            console.error('Error fetching weather data:', weatherError);
            setLoading(false);
          });
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
        setLoading(false);
      });
      

  }, [state, place]);
//console.log(placeDetail[0].city_name)
  return (
    <>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
    {/* <h2>{placeDetail[0].state_name}</h2>
    
    <p>Tourist Place: {placeDetail[0].tourist_place}</p>
    <p>Designation: {placeDetail[0].designation}</p>
    <p>Description: {placeDetail[0].description}</p>
    <p>Best Time: {placeDetail[0].best_time_to_visit}</p>
    <h3>Places to Visit:</h3>
    <ul>
      {placeDetail[0].place_to_visit.map((place,index) => (
        <li key={index}>{place}</li>
      ))}
    </ul> */
    <>
    
    <div className='container-fluid'>
        <div className="img">
        
        <img src={placeDetail[0].imgUrl} className="rounded img-fluid placeimg" alt="..."></img>
       
        <div className="detail">
          <h1 className="coorg">{placeDetail[0].tourist_place}</h1>
          <br></br>
          <p><b></b>{placeDetail[0].city_name}, India<b></b></p>
          <br></br>
            <h4 className="designation">"{placeDetail[0].designation}"</h4>
            <br></br>
          <div className='weather'>
            <h6>Temperature:</h6>
            <h6>Weather Description: </h6>
            <h6>Best Time : {placeDetail[0].best_time_to_visit}</h6>

          </div>
        </div>
        
</div>

      <div className='desc'>
          <h4>{placeDetail[0].tourist_place} Tourism</h4>
          <p>{placeDetail[0].description}</p>
      </div>
      </div>
      {placeDetail[0].place_to_visit?(
        <div>
        <h3 className='text-center'>Places to Visit</h3>
      <div className='container place'>
      
      
    
      {placeDetail[0].place_to_visit && placeDetail[0].place_to_visit.map((place,index) => (
        
    <div key={index} className="card" >
        <img src={placeDetail[0].placeImgUrl[index]} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{place}</h5>
          
        </div>
        </div>
        //{placeDetail[0].placeImgUrl[index]}
        
      ))}
</div>
</div>
      ):(<div></div>)}
    </>
    
    }
    
  </>
    
    )
    
    }
    
  </>
  )
}

export default Details
