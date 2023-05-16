import React, { useState, useEffect } from 'react';
import img from "../assets/heroimg.png";
import rectangle from "../assets/rectangle.png";
import {Link} from 'react-router-dom';

const Homesection = () => {
  const [foodItem, setFoodItem] = useState('Healthy Food');

  useEffect(() => {
    const foodItems = ['E-Products','Home-Products', 'Clothing-Products'];
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      setFoodItem(foodItems[currentIndex]);
      currentIndex = (currentIndex + 1) % foodItems.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="row mt-2">
      <div className="col-lg-12 mt-3" style={{background: '#E1FFC9', height: '500px'}}>
        <div className="container d-flex mt-5">
          <div className="col-lg-6">
            <h3 className="mt-1 mx-5 fs-4 fw-bold text-uppercase">Enjoy your Shopping on <br />
              Various <span style={{color: '#B20A0D'}}>{foodItem}</span>
            </h3>
            <p className="mt-4 mx-5" style={{fontStyle: 'normal', color: '#808080'}}>
              You can experience the shopping as you like to feel <br />
              the real combination of your desire item <br />
              cheers.
            </p>
            <button className="btn mt-5 mx-5 px-3" style={{background: '#373B61', color: '#FFFFFF', borderRadius: '30px', transition: 'background-color 0.3s ease-in-out'}} type="submit"><Link to="/product" className="nav-link fw-bold">Shop now</Link> </button>
          </div>
          <div className="col-lg-6 d-flex align-items-end">
            <div style={{position: 'relative'}}>
              <img src={img} className="img-fluid mx-lg-5" alt="Responsive image" height="235" width="235" style={{ boxShadow: '17px -10px 4px #373B61' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homesection;
