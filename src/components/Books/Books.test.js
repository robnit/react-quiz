import React from 'react'
import Books from 'components/Books/Books'
import { shallow } from 'enzyme' 

describe('book', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<Books/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
