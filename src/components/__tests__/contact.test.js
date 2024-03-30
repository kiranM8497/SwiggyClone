import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//grouping test cases for the sake of simple readbility
describe("contact us test cases", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });
  // beforeEach(() => {
  //   console.log("before All");
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });
  // afterEach(() => {
  //   console.log("after All");
  // });

  test("testing whether  contact component is loaded or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  test("should input contact component", () => {
    render(<Contact />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });
  it("should load  2 input boxes inside contact component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
