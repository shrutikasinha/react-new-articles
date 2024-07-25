import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

import IndividualArticleInfo from "../IndividualArticleInfo"
import useArticles from "../../hooks/useArticles";

jest.mock("../../hooks/useArticles");

test('should render image', () => { 
    useArticles.mockReturnValue({
        articles: [],
        loading: false,
        error: null,
      });
    render(<IndividualArticleInfo />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
})
 
test('should show figure', () => { 
    useArticles.mockReturnValue({
        articles: [],
        loading: false,
        error: null,
      });
    render(<IndividualArticleInfo />)
    const figure = screen.getByRole('figure')
    expect(figure).toBeInTheDocument()
})

 
test('should show para', () => { 
    useArticles.mockReturnValue({
        articles: [],
        loading: false,
        error: null,
      });
    render(<IndividualArticleInfo />)
    const para = screen.getByRole('paragraph')
    expect(para).toBeInTheDocument()
})