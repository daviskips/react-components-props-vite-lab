import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About component", () => {
  render(<About about="about" />);
  expect(screen.getByText("about")).toBeInTheDocument();
});