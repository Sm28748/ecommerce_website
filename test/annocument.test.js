import React from "react";
import { render } from "@testing-library/react";
import Annocument from '../src/components/annocument/Annocument';
import '@testing-library/jest-dom/extend-expect';

describe("Annocument component", () => {
  test("renders images with correct styles", () => {
    const { getByAltText } = render(<Annocument />);

    const image1 = getByAltText("Banner 1");
    expect(image1).toBeInTheDocument();


    const image2 = getByAltText("Banner 2");
    expect(image2).toBeInTheDocument();
  });
});
