import React from 'react'
import './state.css'
import {Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

function Karnataka() {
    const PlaceDetails=[
        {
            placeName:"Coorg",
            desc:"Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station.",
            besttime:"October to March",
            img:"https://www.holidify.com/images/bgImages/COORG.jpg",
            link:"/states/karnataka/coorg",
        },
        {
            placeName:"Badami",
            desc:"Located in a valley of rugged red sandstone, surrounding the Agastya Lake, Badami (formerly known as Vatapi) is an archaeologicaldelight owing to its...",
            besttime:"October to April",
            img:"https://www.holidify.com/images/bgImages/BADAMI.jpg",
            link:"/states/karnataka/badami",
        },
        {
            placeName:"Mysore",
            desc:"Famously known as The City of Palaces, it wouldn’t be wrong to say that Mysore, currently Mysuru, is one of the most important places in..",
            besttime:"Throught the Year",
            img:"https://www.holidify.com/images/bgImages/MYSORE.jpg",
            link:"/states/karnataka/mysore",
        },
        {
            placeName:"Hampi",
            desc:"Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is ..",
            besttime:"October to March",
            img:"https://www.holidify.com/images/bgImages/HAMPI.jpg",
            link:"/states/karnataka/hampi",
        },
        {
            placeName:"Gokarna",
            desc:"With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly..",
            besttime:"Throughout the year",
            img:"https://www.holidify.com/images/cmsuploads/compressed/sunrise-770022_1920_20190313100313.jpg",
            link:"/states/karnataka/gokarna",
        },
        {
            placeName:"Udupi",
            desc:"Udupi is a coastal town in Karnataka, most famous for its vegetarian cuisine and South Indian restaurants all over the country With ...",
            besttime:"Throughout the year",
            img:"https://www.holidify.com/images/bgImages/UDUPI.jpg",
            link:"/states/karnataka/udupi",
        },
        {
            placeName:"Chikmagalur",
            desc:"Popularly known as the ‘Coffee Land of Karnataka’, Chikmagalur is situated in the foothills of the Mullayangiri Range and is one of the..",
            besttime:"Throught the Year",
            img:"https://www.holidify.com/images/bgImages/CHIKMAGALUR.jpg",
            link:"/states/karnataka/chikmagalur",
        },
        {
            placeName:"Jog Falls",
            desc:"The second-highest plunge waterfall in India, Jog Falls is a major tourist attraction in Karnataka and is the highest waterfall in the state.s..",
            besttime:"July to December",
            img:"https://www.holidify.com/images/compressed/564.jpg",
            link:"/states/karnataka/jog falls",
        },
        {
            placeName:"Murudeshwar",
            desc:"Murudeshwar is home to the second tallest statue of Lord Shiva (123 ft) in the world. With the shimmering Arabian Sea on three sides and the  magnificent Western Ghats imposing..",
            besttime:"October to May",
            img:"https://www.holidify.com/images/bgImages/MURUDESHWAR.jpg",
            link:"/states/karnataka/murudeshwar",
        },
        {
            placeName:"Dandeli",
            desc:"Located on the Western Ghats of Uttara Karnataka, Dandeli is bestowed with the lush green forests and lies on the banks of the Kaliriver. Known for its many fantastic adventure...",
            besttime:"October to May",
            img:"https://www.holidify.com/images/cmsuploads/compressed/river-707361_960_720_20190330144829.jpg",
            link:"/states/karnataka/dandeli",
        },
        {
            placeName:"Bandipur National Park",
            desc:"Situated in  Karnataka, Bandipur National Park was once the hunting grounds of the Maharaja of Mysore. It was later established as a reserve in 1974 under..",
            besttime:"October to May",
            img:"https://www.holidify.com/images/compressed/dest_wiki_1366.jpg",
            link:"/states/karnataka/bandipur national park",
        },
        {
            placeName:"Nagarhole National park",
            desc:"Located in the Mysore district of Karnataka, Nagarhole National Park boasts of rich wildlife including both flora and fauna. Located near ..",
            besttime:"October to May",
            img:"https://www.holidify.com/images/compressed/2421.jpg",
            link:"/states/karnataka/nagarhole national park",
        },
        {
            placeName:"Kabini",
            desc:"Located around 245 km from Bangalore, Kabini is primarily known for its handful of luxury resorts around the Kabini River...",
            besttime:"Throughout the year",
            img:"https://www.holidify.com/images/compressed/855.jpg",
            link:"/states/karnataka/kabini",
        },
        {
            placeName:"Kemmangundi",
            desc:"A hill station of widespread views and scents of beautiful gardens, Kemmanagundi or KR hills offer a perfect summer retreat for nature lovers and adventure ...",
            besttime:"September to May",
            img:"https://www.holidify.com/images/compressed/dest_wiki_6850.jpg",
            link:"/states/karnataka/kemmangundi",
        },
       
        {
            placeName:"Kudremukh",
            desc:"Popular and named after a mountainside that resembles a horse's face, Kudremukh is famous for its biodiversity and scenic beauty. A popular hill-station among the..",
            besttime:"October to May",
            img:"https://www.holidify.com/images/compressed/2695.jpg?v=1.1",
            link:"/states/karnataka/kudremukh",
        },
        {
            placeName:"Shravanbelagola",
            desc:"Shravanbelagola is an important Jain pilgrimage centre with a 57 m tall monolithic sculpture of Lord Gomateswara called Bahubali statue as its...",
            besttime:"October to April",
            img:"https://www.holidify.com/images/compressed/2000.jpg",
            link:"/states/karnataka/shravanbelagola",
        },
        {
            placeName:"Pattadakal",
            desc:"A treasure trove of Hindu and Jain temples, Pattadakal is part of the Aihole-Badami-Pattadakal complex that got the UNESCO World Heritage title and it...",
            besttime:"October to march",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Jain_Narayana_temple1_at_Pattadakal.jpg/640px-Jain_Narayana_temple1_at_Pattadakal.jpg",
            link:"/states/karnataka/pattadakal",
        },
        {
            placeName:"Shimoga(shivamogga)",
            desc:"With nature in its full bloom, the town of Shimoga has been home to several great dynasties and kingdoms. Packed with several marvels of nature in the form of..",
            besttime:"July to December",
            img:"https://www.holidify.com/images/bgImages/SHIMOGA.jpg",
            link:"/states/karnataka/shimoga",
        },
        {
            placeName:"Devbagh",
            desc:"Pristine blue water, picture perfect backdrop of beautiful mountains and lush green belt of casuarinas trees blend together perfectly to give you...",
            besttime:"October to April",
            img:"https://www.holidify.com/images/bgImages/DEVBAGH.jpg",
            link:"/states/karnataka/devbagh",
        },
        {
            placeName:"Nandi Hills",
            desc:"Located around 60 kilometres away from Bangalore, Nandi Hills is one such tourist spot that has gradually been discovered by visitors over the ...",
            besttime:"October to June",
            img:"https://www.holidify.com/images/compressed/dest_wiki_11783.jpg",
            link:"/states/karnataka/nandi hills",
        },
        {
            placeName:"Karwar",
            desc:"Karwar is a port city with scenic beaches surrounded by casuarinas trees along the Arabian sea coastline. Located 15kms away from Goa, on the west coast of...",
            besttime:"November to April",
            img:"https://www.holidify.com/images/bgImages/KARWAR.jpg",
            link:"/states/karnataka/karwar",
        },
        {
            placeName:"Halebidu",
            desc:"Halebid (or Halebidu) is a city located in the Hassan district of Karnataka state. Formerly known as Dwarasamudra, Halebid is a city with adorned with a ..",
            besttime:"October to March",
            img:"https://www.holidify.com/images/compressed/1766.jpg",
            link:"/states/karnataka/halebidu",
        },
        {
            placeName:"Bijapur",
            desc:"Famous for the Gol Gumbaj and Ibrahim Rauza which is considered to be the Taj Mahal of the Deccan, Bijapur is a tourist destination in Karnataka that takes its ..",
            besttime:"October to March",
            img:"https://www.holidify.com/images/compressed/3411.jpg?v=1.1g",
            link:"/states/karnataka/bijpur",
        }
    ]

    

  return (
    
    <div className="bg">
    <h1 className='text-center'>Karnataka</h1>
    <div className='container'>
    {
    PlaceDetails.map( (place)=>(
     
    <div key={place.placeName}>
    <div className="card" >
        <img src={place.img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <Link className="navlink" to={place.link}><h5 className="card-title">{place.placeName}</h5></Link>
            <p className="card-text">{place.desc}</p>
            <p><b>Best Time: </b>{place.besttime}</p>
            <Link to={place.link} className="btn btn-primary">Know More</Link>
        </div>
        </div>
        </div>
    ))
    }
    </div>
    </div>
  )
}


export default Karnataka
