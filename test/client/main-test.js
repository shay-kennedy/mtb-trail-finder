import React from 'react'
import TestUtils from 'react-addons-test-utils'
import * as chai from 'chai'
let should = chai.should()
import { Main } from '../../client/js/containers'

const renderer = TestUtils.createRenderer()
renderer.render(<Main />)
const result = renderer.getRenderOutput()

describe('<Main />', () => {
  it('Renders a div', () => {
    result.type.should.equal('div')
  })
  it('Renders a div with class of "container"', () => {
    result.props.className.should.equal('container')
  })
})
