import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Link} from 'react-router-dom'
import './navbar.css'
import { useNavigate} from 'react-router-dom';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
 // const history = useHistory(); // Create a history object
 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ... Your API request code ...
      const response = await fetch(`http://localhost:3001/india/place`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ place: searchTerm }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming your data contains a unique identifier like "placename"
        if (data.length > 0) {
          // Redirect to the details page with the first result's placename
          navigate(`/states/${data[0].state_name}/${data[0].tourist_place}`);
          //console.log(data[0])
        }
      } else {
        console.error('Error fetching data from the API');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  //console.log(searchQuery)
  return (
    <>
       <nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <Link className="navbar-brand mb-0 h1" to="/"><h1>INDIA</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/states">States</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" onSubmit={handleSubmit} role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
    </nav>
    </>
  );
};
