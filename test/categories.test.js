import React from 'react';
import { render, screen } from '@testing-library/react';
import Categories from '../src/components/MainPage/Categories';
import '@testing-library/jest-dom/extend-expect';

test('renders category names correctly', () => {
  render(<Categories />);

  const categoryNames = screen.getAllByText(/.+/); 

  expect(categoryNames).toHaveLength(11);
  expect(categoryNames[0]).toHaveTextContent('Fashion');
  expect(categoryNames[10]).toHaveTextContent('Books');
});
