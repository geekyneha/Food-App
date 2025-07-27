import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";
test("should render Contact component correctly", () => {
  render(<Contact />);

  // wather it contains the heading
  const heading = screen.getByRole("heading");
  // assert that the heading is present
  expect(heading).toBeInTheDocument();
});
test("should render button component correctly", () => {
  render(<Contact />);

  // wather it contains the heading
  const button = screen.getByRole("button");
  // const button = screen.getByText("submit");
  // assert that the heading is present
  expect(button).toBeInTheDocument();
});
test("should render input component correctly", () => {
  render(<Contact />);

  // wather it contains the form
  const input = screen.getByPlaceholderText("name");
  // assert that the form is present
  expect(input).toBeInTheDocument();
});

test("should load two input components", () => {
  render(<Contact />);
  // wather it contains the form
  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(3);
});
