import React from 'react';
import Enzyme, { render } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import LayoutDesktop from '../LayoutDesktop';
import LayoutMobile from '../LayoutMobile';
import Home from '../Home';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

  it('<App />', () => {
    const app = render(<App />);
  });

  it('<Home />', () => {
   const homeComponent = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
    );

    const linkComponent = homeComponent.find(<Link />);
    console.log(linkComponent);

    //expect(linkComponent.length).toBe(1);
  });

})
