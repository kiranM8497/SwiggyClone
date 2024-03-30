import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/mockRestaurantListData.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should search res list for burger text input", async () => {
  //render
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsOnBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsOnBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByTestId("search");
  const searchInputBox = screen.getByTestId("search-input");
  //simulating e.target.value of onChange event of input box
  fireEvent.change(searchInputBox, { target: { value: "burger" } });
  //now we want to click on seacrh button
  fireEvent.click(searchBtn);

  //screen should load four cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});
it("should filter top rated restaurants from res list", async () => {
  //render
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsOnBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsOnBeforeFilter.length).toBe(20);

  const topratedBtn = screen.getByTestId("top-rated-restaurant");
  fireEvent.click(topratedBtn);

  //screen should load four cards
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(4);
});
