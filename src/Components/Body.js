import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Header from "./Header";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.176733&lng=72.962915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredLists(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();

    // const Interval = setInterval(()=>{
    //   setCount(prevCount=>prevCount+1)
    // },1000)

    // return()=>clearInterval(Interval);

  }, []);


 

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
   
    <div className="Body">
      <div>
        <div className="search-box">
          <input
            className="search"
            value={filterText}
            type="text"
            onChange={(e) => setFilterText(e.target.value)}
          />

          <button
            type="submit"
            className="search-btn"
            onClick={() => {
              const searchText = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(filterText.toLocaleLowerCase());
              });

              setFilteredLists(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredLists.filter(
              (res) => res.info.avgRating > 3
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top 10 Rated
        </button>
      </div>
      <div className="res-container">
      {/* <h1>Timer: {count}</h1> */}
        {filteredLists.map((arr) => (
          <RestaurantCard key={arr.info.id} resList={arr} />
        ))}
      </div>
    </div>
  );
};

export default Body;
