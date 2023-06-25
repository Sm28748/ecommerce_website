import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShopCart from '../src/components/shops/ShopCart';

test("renders the ShopCart component", () => {
    const shopItems = [
      {
        discount: 10,
        cover: "image-1.jpg",
        name: "Product 1",
        price: 100,
      },
      {
        discount: 20,
        cover: "image-2.jpg",
        name: "Product 2",
        price: 200,
      },
    ];
    const addToCart = jest.fn();
  
    render(<ShopCart shopItems={shopItems} addToCart={addToCart} />);
  
    const shopCartBoxes = screen.getAllByRole("heading", { level: 3 });
    expect(shopCartBoxes).toHaveLength(2);
  });  

  test("increments the count when the heart icon is clicked", () => {
    const shopItems = [
      {
        discount: 10,
        cover: "image-1.jpg",
        name: "Product 1",
        price: 100,
      },
    ];
    const addToCart = jest.fn();
  
    render(<ShopCart shopItems={shopItems} addToCart={addToCart} />);
  
    const countLabel = screen.getByText("0");
    expect(countLabel).toBeTruthy();
  
    const heartIcon = screen.getByTestId("heart-icon");
    fireEvent.click(heartIcon);
  
    const updatedCountLabel = screen.getByText("1");
    expect(updatedCountLabel).toBeTruthy();
  });
  
  
test("calls addToCart function when the plus button is clicked", () => {
  const shopItems = [
    {
      discount: 10,
      cover: "image-1.jpg",
      name: "Product 1",
      price: 100,
    },
  ];
  const addToCart = jest.fn();

  render(<ShopCart shopItems={shopItems} addToCart={addToCart} />);

  const plusButton = screen.getByRole("button", { name: ""});
  fireEvent.click(plusButton);

  expect(addToCart).toHaveBeenCalledTimes(1);
  expect(addToCart).toHaveBeenCalledWith(shopItems[0]);
});


