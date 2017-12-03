import React from 'react'
import AddBook from 'components/AddBook/AddBook'
import { shallow } from 'enzyme' 

describe('app', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<AddBook/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
