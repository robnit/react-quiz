import React from 'react'
import App from 'components/App'
import { shallow } from 'enzyme' 

describe('app', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<App/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
