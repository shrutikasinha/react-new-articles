import { render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

test("should show Error header on fail", () => {
  render(<ErrorMessage />);
  const headerErr = screen.getByRole("heading");
  expect(headerErr).toBeInTheDocument();
});
