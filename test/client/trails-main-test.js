import React from 'react'
import TestUtils from 'react-addons-test-utils'
import * as chai from 'chai'
let should = chai.should()
import { TrailsMain } from '../../client/js/containers'


const renderer = TestUtils.createRenderer()
renderer.render(<TrailsMain.WrappedComponent />)
const result = renderer.getRenderOutput()

describe('<TrailsMain />', () => {
  it('Renders a div', () => {
    result.type.should.equal('div')
  })
  it('Renders two children divs', () => {
    result.props.children.length.should.equal(2)
  })
})
