import React from 'react'
import App from 'components/App/App'
import { mount } from 'enzyme' 

describe('app', () => {
  it('should match snapshots', () => {
    const wrapper = mount(<App/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
