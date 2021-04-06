import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import App from '../src/App';

configure({adapter: new Adapter()});

describe('App', () => {
  it('should render without throwing an error', () => {
    expect(
        shallow(
            <App />,
        ).exists(),
    ).toBe(true);
  });
});
