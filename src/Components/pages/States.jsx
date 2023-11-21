import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './state.css'
import axios from 'axios'

export default function States() {
  
  const stateDetail=[
    {
      stateName:"Karnataka",
      capital:"Bangalore",
      img:"https://www.revv.co.in/blogs/wp-content/uploads/2020/11/Murudeshwar.jpg",
      link:"/states/karnataka"

  },
  {
    stateName:"Uttar Pradesh",
    capital:"Lucknow",
    img:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Temples-In-Varanasi-cover_8th-Dec.jpg",
    link:"/states/uttar pradesh"
  },
  {
    stateName:"Madhya Pradesh",
    capital:"Bhopal",
    img:"https://www.trawell.in/admin/images/upload/376640169Khajuraho_Main.jpg",
    link:"/states/madhya pradesh"
  },
  {
    stateName:"Rajasthan",
    capital:"Jaipur",
    img:"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1227338428_20191219161828.jpg",
    link:"/states/rajasthan"
  },
  {
    stateName:"Himachal Pradesh",
    capital:"Shimla",
    img:"https://bloominghimalaya.com/wp-content/uploads/2022/07/20.jpg",
    link:"/states/himachal pradesh"
  }, {
    stateName:"Uttarakhand",
    capital:"Dehradun",
    img:"https://i0.wp.com/www.opindia.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-17-at-4.55.58-PM.png?resize=628%2C435&ssl=1",
    link:"/states/uttarakhand"
  },
  {
    stateName:"Punjab",
    capital:"Chandigarh",
    img:"https://cdn.britannica.com/45/84845-050-96697731/Harmandir-Sahib-Amritsar-India-Punjab.jpg",
    link:"/states/punjab"
  },
  {
    stateName:"Haryana",
    capital:"Chandigarh",
    img:"https://articlesspin.com/wp-content/uploads/2022/06/Neemrana-Fort-Palace.jpg",
    link:"/states/haryana"
  },
  {
    stateName:"Gujarat",
    capital:"Gandhinagar",
    img:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Somanath_mandir.jpg",
    link:"/states/gujarat"
  },
  {
    stateName:"Jharkhand",
    capital:"Ranchi",
    img:"https://www.delhimetrotimes.in/photos/2021/03/deoghar.jpg",
    link:"/states/jharkhand"
  },
  {
    stateName:"Chhattisgarh",
    capital:"Raipur",
    img:"https://indiatravel.com/wp-content/uploads/2022/03/Chhattisgarh-slider-imgggg-2.jpg",
    link:"/states/chhattisgarh"
  },
  {
    stateName:"West Bengal",
    capital:"Kolkata",
    img:"https://www.delhimetrotimes.in/photos/2021/03/sundarbans.jpg",
    link:"/states/west bengal"
  },
  {
    stateName:"Sikkim",
    capital:"Gangtok",
    img:"https://api.cabbazar.com/profile_picture/route_page_picture_10f198b8-b97c-4327-a6af-27ba8883470d_1631940503",
    link:"/states/sikkim"
  },
  {
    stateName:"Assam",
    capital:"Dispur",
    img:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/assam-tourist-places.jpg",
    link:"/states/assam"
  },
  {
    stateName:"Meghalaya",
    capital:"Shillong",
    img:"https://assets.sentinelassam.com/h-upload/2021/10/07/259168-dawki.webp",
    link:"/states/meghalaya"
  },
  {
    stateName:"Manipur",
    capital:"Imphal",
    img:"https://www.mustvisitplace.com/wp-content/uploads/2023/03/Manipur-Tour.jpg",
    link:"/states/manipur"
  },
  {
    stateName:"Tripura",
    capital:"Agartala",
    img:"https://www.thetoptours.com/wp-content/uploads/unakoti-in-tripura.jpg",
    link:"/states/tripura"
  },
  {
    stateName:"Nagaland",
    capital:"Kohima",
    img:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-nagaland8.png",
    link:"/states/nagaland"
  },
  {
    stateName:"Arunachal Pradesh",
    capital:"Itanagar",
    img:"https://assamtribune.com/h-upload/2023/01/24/1461228-arunachal-pradesh-23-jan.jpg",
    link:"/states/arunachal pradesh"
  },
  {
    stateName:"Mizoram",
    capital:"Aizawl",
    img:"https://www.purvidiscovery.com/blog-img/best-places-to-visit-in-mizoram.jpg",
    link:"/states/mizoram"
  },
  {
    stateName:"Bihar",
    capital:"Patna",
    img:"https://media.istockphoto.com/id/505519489/photo/nalanda-university-bihar-ruin.jpg?s=612x612&w=0&k=20&c=wzg_b8wzmX393rMWd5Hyc5Hqvn3iQldWen-zY_55Pu4=",
    link:"/states/bihar"
  },
  {
    stateName:"Telangana",
    capital:"Hyderabad",
    img:"https://www.treebo.com/blog/wp-content/uploads/2022/10/Blog-Header-2.jpg",
    link:"/states/telangana"
  },
  {
    stateName:"Maharashtra",
    capital:"Mumbai",
    img:"https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Rajgad-Fort.jpg",
    link:"/states/maharashtra"
  },
  {
    stateName:"Andhra Pradesh",
    capital:"Amaravati",
    img:"https://www.newscrab.com/static/c1e/client/90607/uploaded/6709d30d3413f486b45c766f7ad3df31.png",
    link:"/states/andhra pradesh"
  },
  {
    stateName:"Odisha",
    capital:"Bhubaneshvar",
    img:"https://m.economictimes.com/thumb/msid-70259692,width-1200,height-900,resizemode-4,imgsize-325334/orissa1.jpg",
    link:"/states/odisha"
  },
  {
    stateName:"Goa",
    capital:"Panaji",
    img:"https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/Cover-image-of-Places-to-visit-in-Goa-in-may-1.jpg",
    link:"/states/goa"
  },
  {
    stateName:"Tamil Nadu",
    capital:"Chennai",
    img:"https://d1bv4heaa2n05k.cloudfront.net/user-images/1552557246960/shutterstock-1013396287_main_1552557260545.jpeg",
    link:"/states/tamilnadu"
  },
  {
    stateName:"Kerala",
    capital:"Thiruvananthapuram",
    img:"https://wallpaperaccess.com/full/1635209.jpg",
    link:"/states/kerala"
  },
  
]

const [stateDetails, setStateDetails] = useState([]);

  useEffect(() => {
    // Fetch weather data for each state when the component mounts
    const fetchWeatherData = async () => {
      //const apiKey = 'a9ff2f9173d22abf99414f768d70ee9f';

      // Assuming stateDetails is an array of objects with a 'state' property
      const updatedStateDetails = await Promise.all(
        stateDetail.map(async (state) => {
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${state.stateName}&appid=4956fc987f8e36442bf52d161c24fc2d&units=metric`
            );
            const weatherData = response.data;
            const temp = weatherData.main.temp;
            //console.log(temp)
            return {
              ...state,
              temperature: temp,
            };
          } catch (error) {
            //console.error(`Error fetching weather data for ${state.state}:`, error);
            return state; // If an error occurs, just return the original state object
          }
        })
      );
//console.log(updatedStateDetails)
      setStateDetails(updatedStateDetails);
    };

    fetchWeatherData();
  },[]);
//console.log(stateDetails)
  return (
    <>
    <h1 className='text-center'>States</h1>
    <div className='container'>
    
    {
    stateDetails.map( (state)=>(
     
    <div key={state.stateName}>
      <div className="card">
    <img src={state.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <Link className="navlink" to={state.link}>
    <h5 className="card-title">{state.stateName}</h5></Link>
    <p>{state.capital}</p>
    <p>Weather:{state.temperature}°C</p>
    <Link to={state.link} className="btn btn-primary">Know More</Link>
  </div>
</div>
</div>
    ))
    }
 </div>
</>
  );
};
