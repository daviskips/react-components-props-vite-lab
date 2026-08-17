import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders Article component", () => {
  render(<Article title="Components in React" preview="A quick preview" />);
  expect(screen.getByText("Components in React")).toBeInTheDocument();
});