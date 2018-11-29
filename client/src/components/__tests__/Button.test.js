import React from 'react';
import {shallow} from 'enzyme';
import Button from '../button';

describe("Button", function(){
  let mountedButton;
  beforeEach(()=>{
    mountedButton = shallow(<Button />);
  })

  it('renders a button', () => {
    mountedButton = shallow(<Button />);
  });

})
