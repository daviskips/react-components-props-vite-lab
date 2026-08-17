import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

test("renders ArticleList component", () => {
  render(<ArticleList posts={[]} />);
  expect(screen.getByRole("main")).toBeInTheDocument();
});