import React from 'react'
import Books from 'components/Books/Books'
import { mount } from 'enzyme' 

describe('book', () => {
  it('should match snapshots', () => {
    const wrapper = mount(<Books/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
