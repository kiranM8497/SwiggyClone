import RestraurantCard, { withPromotedComponent } from "./RestraurantCard";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State variable using hooks
  const [listOfRestraurants, setListOfRestraurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantcardPromoted = withPromotedComponent(RestraurantCard);

  // console.log("render", listOfRestraurants);

  useEffect(() => {
    fetchData();
  }, []);
  // const encodedApiUrl = encodeURIComponent(
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  // );

  // const workerUrl = `https://still-art-8509.kiranmuttanwar18.workers.dev/=${encodedApiUrl}`;
  const encodedApiUrl = encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const workerUrl = `https://still-art-8509.kiranmuttanwar18.workers.dev/?apiUrl=${encodedApiUrl}`;
  const fetchData = async () => {
    const data = await fetch(
      workerUrl
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //  "https://swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true"
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
    // async function checkJsonData(jsonData) {
    //   for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    //     // initialize checkData for Swiggy Restaurant data
    //     let checkData =
    //       json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
    //         ?.restaurants;

    //     // if checkData is not undefined then return it
    //     if (checkData !== undefined) {
    //       return checkData;
    //     }
    //   }
    // }

    //call the checkJsonData() function which return Swiggy Restaurant data
    // const restaurantData = await checkJsonData(json);
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantData);
    setListOfRestraurants(restaurantData);
    setFilteredRestaurants(restaurantData);

    // me trying fixing change in api issue after akashay update for how to update if url cahnges
    // setListOfRestraurants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRestaurants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  // console.log("Body rendered")

  //checking online status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h2>
          Looks like you're Offline..Please check Internet Connection ...!!
        </h2>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  //check if the list is empty (data is not yet fecthed ) if that is the case
  // load shimmer otherwise load data
  return listOfRestraurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body overflow-hidden">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black text-center"
            placeholder="Search for food 😍"
            data-testid="search-input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(searchText);
            }}
          />
          <button
            className="px-4 py-2 m-4 border bg-green-100 rounded-lg"
            data-testid="search"
            onClick={() => {
              const filteredList = listOfRestraurants.filter((res) => {
                return res.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4 flex items-center  ">
          <button
            className="border m-4 px-4 py-2 bg-gray-100 rounded-lg"
            data-testid="top-rated-restaurant"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestraurants.filter((res) => res.info?.avgRating > 4.3)
              );
            }}
          >
            Top Rated Restraurants ✨
          </button>
        </div>

        {/* <div className="m-4 p-4 flex items-center  ">
          <label htmlFor="" className="px-3 ">
            UserName :
          </label>
          <input
            className="border border-black border-solid rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info.id}>
            {/* higher order component 
            addin a promoted tag on top of restaurent caards if that property is true */}

            {restaurant?.info?.promoted ? (
              <restaurantcardPromoted {...restaurant?.info} />
            ) : (
              <RestraurantCard {...restaurant?.info} />
            )}

            {/* <RestraurantCard {...restaurant?.info} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
