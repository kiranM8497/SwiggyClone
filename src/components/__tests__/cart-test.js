import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load retaurant menu component", async () => {
  await act(async () => {
    render(
      // <Provider store={appStore}>
      //   <RestaurantMenu />
      // </Provider>

      <RestaurantMenu />
    );
  });

  // const text = screen.getBytext("Drunken Monkey");
  // expect(text).toBeInTheDocument();

  // const list = screen.getAllByTestId("menu-items");
  // const text = screen.getByText("Tapri - The Teafe");
  // //console.log(list.length);
  // expect(text).toBe("Tapri - The Teafe");
});
