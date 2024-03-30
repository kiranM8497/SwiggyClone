import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import About from "./components/About";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
import SignIn from "./components/SignIn.js";

{
  /* if we have path as / */
}

<Body />;

{
  /* if we have path as /about */
}

<About />;

{
  /* if we have path as /contact */
}

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication code
  useEffect(() => {
    //making an API call to get userId and password
    const data = {
      name: "Itachi Uchiha",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {" "}
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
        }}
      >
        {" "}
        <div className="app">
          {" "}
          <Header /> <Outlet />{" "}
        </div>{" "}
      </UserContext.Provider>{" "}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },

      {
        // :resId is dynamic
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
