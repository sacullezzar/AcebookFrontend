import React from 'react';
import {shallow} from 'enzyme';
import Header from '../header';

describe("Header", function(){
  let mountedHeader;
  beforeEach(()=>{
    mountedHeader = shallow(<Header />);
  })

  it('renders a Header', () => {
    mountedHeader = shallow(<Header />);
  });

})
