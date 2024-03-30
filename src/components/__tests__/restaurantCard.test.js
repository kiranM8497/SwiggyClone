import RestraurantCard from "../RestraurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("should render restaurant card component with data", () => {
  //render
  const data = MOCK_DATA?.info;

  // console.log(data);
  render(<RestraurantCard {...data} />);
  //console.log();
  //querying

  const name = screen.getByText("McDonald's");
  // console.log(name);
  //assert
  expect(name).toBeInTheDocument();
});
