
import React from 'react'
import { useNavigate} from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './india.css'
import {Link} from 'react-router-dom'

function India() {
  const navigate = useNavigate();
  const navigateToStatesPage = () => {
    navigate('/states');
  };

  return (
    <div className='container-fluid'>
      <img src="https://imgs.search.brave.com/iDt9T6XDAEM95d-lcYKdwHjj-pfhF_ZZa16myyHm0xI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgxLzYzLzAy/LzM2MF9GXzgxNjMw/MjQwXzhZUHJ5SkhC/WWdZVEJHdk1ISFRU/Z1lNMDBiVlgzcU0x/LmpwZw" className="img-fluid india" alt="..."></img>
    <h4 className='text-center slok'><b>हिमालयं समारभ्य यावत् इंदु सरेावरम् |<br></br>

        तं देवनिर्मितं देशं हिंदुस्थानं प्रचक्षते ||</b></h4>
      
      <div className='desc indiadesc'>
      <h4>"The Land of Diversity"</h4><br></br>
          <h4>India Tourism</h4>
          <p>Situated in South Asia, India is a country with deep cultural
           roots and a rich heritage. A great country for budget travel, India is popular for its forts and palaces.
            You can visit India to find yourself through yoga, to lose yourself in the mountains of Himalayas, 
            to be mesmerised by the ancient temples. The crowded bazaars, blaring traffic, filmy music, the colour, 
            the noise and not to forget, the chaos will leave you all amazed and overwhelmed.</p>
            <p>India is a diverse country with many iconic tourist spots such as Taj Mahal, Red Fort, India Gate, Golden Temple,
             Amber Palace, Jama Masjid, Agra Fort, Hawa Mahal, Humayun Tomb, and Gateway of India. There are many different types
            of tourist places to visit in India, such as beaches, hills & mountains, museums, wildlife sanctuary, and heritage
            places. Pondicherry is a unique place to visit in India, boasting intricately-designed religious shrines, picturesque
             beaches, and French-built monuments. Some of the top tourist sites in Pondicherry include Sri Aurobindo Ashram,
             Promenade Beach, Auroville, and Serenity Beach. India offers a memorable experience no matter which region visitors visit.</p>
      </div>
      <div className='place indiaplace'>
      <div  className="card" >
        <img src="https://cdn.getyourguide.com/img/location/6023dbcb71489.jpeg/99.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
        <Link className="navlink" to="/states/uttar pradesh/varanasi"><h5 className="card-title">Varanasi</h5></Link>
            <p className='p1'>"The Spiritual Capital of India"</p><br></br>
            <Link to="/states/uttar pradesh/varanasi" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2021%2F01%2F18%2Ffile7bqnu5n05rk19vwefvn-940255-1610933390.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Ayodhya</h5>
            <p className='p1'>"The birthplace of Lord Rama"</p><br></br>
            <Link to="/states/uttar pradesh/ayodhya" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://www.holidify.com/images/cmsuploads/compressed/Venkateshwara_Tirupati_Temple_20190712064011.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Tirupati</h5>
            <p className='p1'>"Abode of Lord Venkateswara Swamy"</p>
            <Link to="/states/andhra pradesh/tirupati" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:1500/h:0/plain/https://invincible.s3.wasabisys.com/trek/439bc989-b47a-4fa5-a410-acc44e93dbff" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Kedarnath</h5>
            <p className='p1'>"One of the Lord Shiva Jyotirlinga"</p><br></br>
            <Link to="/states/uttarakhand/kedarnath" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://www.trawell.in/admin/images/upload/899428835Somnath_Main.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Somnath Temple</h5>
            <p className='p1'>"The town of the Lord of the Moon"</p>
            <Link to="/states/gujrat/somnath Temple" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://thetravelshots.com/wp-content/uploads/2022/10/Rameshwaram-Temple.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Rameshwaram</h5>
            <p className='p1'>"The Bridge on the Indian Ocean"</p>
            <Link to="/states/tamil nadu/rameshwaram" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://e0.pxfuel.com/wallpapers/330/485/desktop-wallpaper-all-of-dwarkadhish-dwarkadhish-temple-thumbnail.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Dwarikapuri</h5>
            <p className='p1'>"The home of Lord Krishna"</p>
            <Link to="/states/gujrat/dwarikapuri" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        <div  className="card" >
        <img src="https://staticimg.amarujala.com/assets/images/2023/07/10/750x506/ujajana-vasaya-ka-ab-mahakal-ka-tharashana-sagamata-sa-ha-sakaga_1689009973.jpeg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Ujjain</h5>
            <p className='p1'>"The Home of Mahakaleshwara"</p>
            <Link to="/states/madhya pradesh/ujjain" className="btn btn-primary">Know More</Link>
        </div>
        </div>
        </div>
        <button type="button" className="btn btn-outline-success all" onClick={ navigateToStatesPage}>View All tourist Places</button>
    </div>
  );
};

export default India
