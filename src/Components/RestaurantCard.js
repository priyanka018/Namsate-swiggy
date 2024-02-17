import React from 'react';
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  
    const {resList}= props;
    
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}} key={resList?.info?.id}>
        <div>
          <img
            alt="res-img"
            className="res-logo"
            src={CDN_URL + resList.info.cloudinaryImageId}
          />
          <h3>{resList?.info?.name}</h3>
          <h4>{resList.info.cuisines.join(", ")}</h4>
          <h4>{resList.info.avgRating} Ratings</h4>
          <h4>{resList.info.sla.lastMileTravelString}</h4>
          <h4>{resList.info.costForTwo}</h4>
        </div>
      </div>
    );
  };
  

export default RestaurantCard