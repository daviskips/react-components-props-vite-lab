import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Header component", () => {
  render(<Header name="Underreacted" />);
  expect(screen.getByText("Underreacted")).toBeInTheDocument();
});