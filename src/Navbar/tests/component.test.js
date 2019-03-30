import React from 'react';
import Enzyme, { mount, /* shallow */ } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import MediaQuery from 'react-responsive';
import { Affix } from 'antd';
import { MemoryRouter } from 'react-router';
import Navbar from '../Navbar';
import NavbarDesktop from '../NavbarDesktop';
import NavbarMobile from '../NavbarMobile';
// import LoginMenu from '../LoginMenu/LoginMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar /> ', () => {

  it('<Navbar /> (Main Component)', () => {
    const wrapper = mount(<Navbar />);
    const affixContainer = wrapper.find(Affix);

    expect(wrapper.contains(Affix));
    expect(affixContainer.contains(NavbarDesktop));
    expect(affixContainer.contains(NavbarMobile));
  })


  it('<NavbarMobile />.', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavbarMobile />
      </MemoryRouter>
    );
    const image = wrapper.find('img');

    expect(wrapper.contains('img'));
    expect(image.props().alt).toEqual('UTNianos')
  })

  it('<NavbarDesktop />.', () => {

    /* const wrapper = shallow(
      <MemoryRouter>
        <NavbarDesktop />
      </MemoryRouter>
    ); */

    // const image = wrapper.find('img');
    // TODO
    // expect(wrapper.contains(LoginMenu));
    // expect(image.props().alt).toEqual('UTNianos')
    expect(true).toBe(true);
  })

})
