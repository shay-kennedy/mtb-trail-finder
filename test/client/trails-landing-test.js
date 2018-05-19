import React from 'react'
import TestUtils from 'react-addons-test-utils'
import * as chai from 'chai'
let should = chai.should()
import { TrailsLanding } from '../../client/js/components'

const renderer = TestUtils.createRenderer()
renderer.render(<TrailsLanding />)
const result = renderer.getRenderOutput()

describe('<TrailsLanding />', () => {
  it('Renders a div', () => {
    result.type.should.equal('div')
  })
  it('Renders a div with className "trails-page"', () => {
    result.props.className.should.equal('trails-page')
  })
})
