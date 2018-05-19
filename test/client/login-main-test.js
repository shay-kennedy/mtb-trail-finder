import React from 'react'
import TestUtils from 'react-addons-test-utils'
import * as chai from 'chai'
let should = chai.should()
import { Login } from '../../client/js/components'

const renderer = TestUtils.createRenderer()
renderer.render(<Login />)
const result = renderer.getRenderOutput()

describe('<Login />', () => {
  it('Renders a div', () => {
    result.type.should.equal('div')
  })
  it('Renders a div with class of "login-page"', () => {
    result.props.className.should.equal('login-page')
  })
  it('Renders a div with 4 children', () => {
    result.props.children.length.should.equal(4)
  })
  it('Renders a "h1" element', () => {
    result.props.children[0].type.should.equal('h1')
  })
  it('Renders a "a" element', () => {
    result.props.children[2].type.should.equal('a')
  })
})
