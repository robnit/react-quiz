import React from 'react'
import Root from 'components/Root/Root'
import { shallow } from 'enzyme'


describe('root', () => {
  
  it('should match snapshots', () => {
    const wrapper = shallow(<Root/>)

    expect(wrapper).toMatchSnapshot()
  })
})
