import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
it("should render header component and login button in it", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginButton = screen.getByRole("button", { name: "Sign-in" });

  //assertion
  expect(loginButton).toBeInTheDocument();
});
it("should render header component and have 0  cart items in it", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const cartItems = screen.getByText(`Cart (0 Items)`);

  //assertion
  expect(cartItems).toBeInTheDocument();
});
it("should render header component  cart  in it", () => {
  //render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const cartItems = screen.getByText(/Cart/);

  //assertion
  expect(cartItems).toBeInTheDocument();
});
// it("should render header component and when clicked on SignIn button it should load login page", () => {
//   //render
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   //querying
//   const logginButton = screen.getByRole("button");

//   fireEvent.click(logginButton);

//   const signupButton = screen.getByText("Signup");
//   //assertion
//   expect(signupButton).toBeInTheDocument();
// });
