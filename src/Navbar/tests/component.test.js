import React from 'react';
import Enzyme, {  mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../Navbar';
import NavbarDesktop from '../NavbarDesktop';
import NavbarMobile from '../NavbarMobile';
import LoginMenu from '../LoginMenu/LoginMenu';
import MediaQuery from 'react-responsive';
import { Affix } from 'antd';
import { MemoryRouter } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar /> ', () => {

  it('Rendererear <Navbar />', () => {
    const wrapper = mount(<Navbar />);
    const affixContainer = wrapper.find(Affix);

    expect(wrapper.contains(Affix));
    expect(affixContainer.contains(NavbarDesktop));
    expect(affixContainer.contains(NavbarMobile));
  })


  it('Rendererear <NavbarMobile />.', () => {
    const wrapper = mount(
    <MemoryRouter>
      <NavbarMobile />
    </MemoryRouter>
    );
    const image = wrapper.find('img');

    console.log(image.props());
    expect(wrapper.contains('img'));
    //expect(image);
  })

})
