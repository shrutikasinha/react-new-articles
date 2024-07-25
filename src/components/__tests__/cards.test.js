import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import useArticles from "../../hooks/useArticles";
import { ToggleProvider } from "../../utils/ToggleContext";
import { BrowserRouter } from "react-router-dom";
import ToggleButton from "../ToggleButton";

// Mock the useArticles hook
jest.mock("../../hooks/useArticles");

describe("Body Component", () => {
  it("renders the h1 element", () => {
    useArticles.mockReturnValue({
      articles: [],
      loading: false,
      error: null,
    });

    render(<Body />);

    // Check if the h1 element is in the document
    const h1Element = screen.getByText(/Most Popular Articles/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("renders 20 articles", () => {
    // Mock the useArticles hook to return loading as false and an array of 20 articles
    const mockArticles = Array.from({ length: 20 }, (_, index) => ({
      id: index.toString(),
      title: `Article ${index + 1}`,
    }));

    useArticles.mockReturnValue({
      articles: mockArticles,
      loading: false,
      error: null,
    });

    render(
      <BrowserRouter>
        <ToggleProvider>
          <Body />
        </ToggleProvider>
      </BrowserRouter>,
    );

    const articleCards = screen.getAllByTestId("card");
    expect(articleCards.length).toBe(20);
    const toggleBtn = screen.getByRole("button");
    expect(toggleBtn).toBeInTheDocument();
  });
});

it("should have off button", () => {
  render(
    <ToggleProvider>
      <ToggleButton />
    </ToggleProvider>,
  );
  const toggleBtn = screen.getByRole("button", { name: "Off" });
  expect(toggleBtn).toBeInTheDocument();
});
