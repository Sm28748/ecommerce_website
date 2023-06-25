import React from 'react'
import Catg from './Catg'

describe('<Catg />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Catg />)
  })
})