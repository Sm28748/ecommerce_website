import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from '../src/components/wrapper/Wrapper';
import '@testing-library/jest-dom/extend-expect';

describe('Wrapper component', () => {
  it('renders without crashing', () => {
    render(<Wrapper />);
  });

  it('renders the correct number of product items', () => {
    const { getAllByTestId } = render(<Wrapper />);
    const productItems = getAllByTestId('product-item');
    expect(productItems.length).toBe(4);
  });

  it('renders the correct product data', () => {
    const { getAllByTestId } = render(<Wrapper />);
    const productItems = getAllByTestId('product-item');
    expect(productItems.length).toBe(4);

    const data = [
      {
        cover: <i className='fa-solid fa-truck-fast'></i>,
        title: 'Worldwide Delivery',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
      },
      {
        cover: <i className='fa-solid fa-id-card'></i>,
        title: 'Safe Payment',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
      },
      {
        cover: <i className='fa-solid fa-shield'></i>,
        title: 'Shop With Confidence',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
      },
      {
        cover: <i className='fa-solid fa-headset'></i>,
        title: '24/7 Support',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
      },
    ];

    productItems.forEach((item, index) => {
      const imgElement = item.querySelector('.img i');
      const titleElement = item.querySelector('h3');
      const descElement = item.querySelector('p');

      expect(imgElement.innerHTML).toContain(data[index].cover.props.className);
      expect(titleElement.textContent.trim()).toBe(data[index].title);
      expect(descElement.textContent).toBe(data[index].decs);
    });
  });
});
