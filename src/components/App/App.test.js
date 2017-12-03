import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme' 

describe('app', () => {
  it('should match snapshots', () => {
    const wrapper = shallow(<App/>)
   
    expect(wrapper).toMatchSnapshot()
  })
})
