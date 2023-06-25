import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from '../src/components/newarrivals/Cart';
import Ndata from '../src/components/newarrivals/Ndata';
import '@testing-library/jest-dom/extend-expect';



describe("Cart", () => {
    test("renders all items from Ndata", () => {
        render(<Cart />);
        const items = screen.getAllByRole("img");
        expect(items).toHaveLength(Ndata.length);
      });

    test("renders all item names correctly", () => {
        render(<Cart />);
        Ndata.forEach((item) => {
          const itemName = screen.getByText(item.name);
          expect(itemName).toBeInTheDocument();
        });
    });

    test("renders all item prices correctly", () => {
        render(<Cart />);
        Ndata.forEach((item) => {
          const itemPrice = screen.getByText(`$${item.price}`);
          expect(itemPrice).toBeInTheDocument();
        });
      });
    

});
