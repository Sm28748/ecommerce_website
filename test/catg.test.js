import React from "react";
import { render, screen } from "@testing-library/react";
import Catg from '../src/components/shops/Catg';
import "@testing-library/jest-dom/extend-expect";

describe("Catg component", () => {
  test("renders category names correctly", () => {
        render(<Catg />);
        const categoryNames = screen.getAllByRole("heading", { level: 1, name: /^[A-Za-z]+$/ }); // Matches any alphabetical string
        expect(categoryNames).toHaveLength(2);
        expect(categoryNames[0].textContent.trim()).toBe("Brands");
        expect(categoryNames[1].textContent.trim()).toBe("Shops");
  
    });
      

  test("renders 'View All Brands' button", () => {
    render(<Catg />);
    const viewAllButton = screen.getByRole("button", { name: /View All Brands/i });
    expect(viewAllButton).toBeInTheDocument();
  });

  test("renders category images", () => {
    render(<Catg />);
    const categoryImages = screen.getAllByRole("img");
    expect(categoryImages).toHaveLength(6);
    categoryImages.forEach((image) => {
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("alt");
    });
  });
});
