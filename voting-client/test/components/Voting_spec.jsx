import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';

import Voting from '../../src/components/Voting';

describe('Voting', () => {
  
  it('renders a pair of buttons', () => {
    const component = ReactTestUtils.renderIntoDocument(
      <Voting pair={['Trainspotting', '28 Days Later']} />
    );
    const buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });
});