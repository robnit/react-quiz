import React from 'react'
import Book from 'components/Books/Books'
import { shallow } from 'enzyme' 

describe('book', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<Book/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
