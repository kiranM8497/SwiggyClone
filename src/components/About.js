import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React from "react";

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        About Us - Swaggy
      </h1>

      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Delicious Food Delivered
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Swaggy is your ultimate destination for delicious food delivered
          straight to your doorstep. Whether you're craving mouth-watering
          burgers, fresh salads, or indulgent desserts, we've got you covered.
          With a diverse menu featuring a wide range of cuisines, Swaggy is here
          to satisfy your hunger, any time of the day.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Convenient & Fast Service
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide convenient, fast, and reliable food delivery
          service, ensuring that you can enjoy your favorite meals from the
          comfort of your home or office. We partner with top-rated restaurants
          in your area to bring you the best dining experience without the
          hassle.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Passionate Team
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Swaggy, we're passionate about food and customer satisfaction. Our
          team works tirelessly to ensure that every order is delivered promptly
          and every meal is prepared with care. Your feedback is valuable to us,
          and we're committed to continuously improving our service to serve you
          better.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Join Us Today!
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Thank you for choosing Swaggy for all your food delivery needs. We
          look forward to delighting your taste buds and serving you delicious
          meals, one order at a time.
        </p>
      </div>
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//      console.log("parent Constructor");
//   }

//   // this method will run after render() has been called for the first time on the client side only once per component instance
//   componentDidMount() {
//     // console.log(" Parent componentDidMount");
//   }

//   render() {
//     console.log("Parent render");
//     return (
//       <div className="about">
//         <h1 className="">
//           <strong> Welcome To Potato's World</strong>
//         </h1>
//         <div>
//           LoggedInUser:
//           <UserContext.Consumer>
//             {({ loggedInUser }) => {
//               return <h1 className="text-lg font-bold">{loggedInUser}</h1>;
//             }}
//             ;
//           </UserContext.Consumer>
//         </div>

//         <h2>About Our Food Delivery App</h2>
//         <p>
//           Welcome to our food delivery app, where we bring delicious meals right
//           to your doorstep! Whether you're craving your favorite comfort food or
//           want to try something new, we've got you covered.
//         </p>
//         <p>
//           Our mission is to provide you with a seamless and delightful food
//           ordering experience. We partner with the best restaurants in town to
//           offer you a wide range of cuisines and dishes to satisfy your taste
//           buds.
//         </p>
//         {/* <User name={"Akshay Saini"} location={"Dehradhun"} /> */}
//         <UserClass name={"First Child"} location={"Dehradhun"} />
//       </div>
//     );
//   }
// }

{
  /*

parent constructor
parent rendor

first child constructor
first child render

second child constructor
second child render

third child constructor
third child render

first child componentDidMount
second child componenDidMount
third child componentdidmount

parent componentDidMount



*/
}

export default About;
