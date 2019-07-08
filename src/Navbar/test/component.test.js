import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Affix } from 'antd';
import { MemoryRouter } from 'react-router';
import Navbar from '../Navbar';
import NavbarDesktop from '../NavbarDesktop';
import NavbarMobile from '../NavbarMobile';

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

    const wrapper = mount(
      <MemoryRouter>
        <NavbarDesktop />
      </MemoryRouter>
    );

    const image = wrapper.find('img');

    expect(image.props().alt).toEqual('UTNianos')
  })

})
