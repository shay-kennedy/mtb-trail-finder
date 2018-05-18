import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { fetchAndHandleTrails } from '../redux/trails'
import { FormField } from '../components/FormField'
import { STATE_LIST } from '../helpers/constants'


function submit() {
  return function(values, dispatch) {
    const { city, state } = values
    dispatch(fetchAndHandleTrails(city, state))
    dispatch(reset('trail_location_form'))
    if (window.location.hash != '#/trails/list') {
      window.location = '#/trails/list'
    }
  }
}

function validate(values) {
  if (!values.city)  return {'city': 'Required'}
  if (!values.state) return {'state': 'Required'}
}

function getStateOptions() {
  return STATE_LIST.map(state => ( {'name': state, 'value': state} ))
}

class TrailLocationForm extends Component {
  render() {
    const { handleSubmit, submitting, invalid } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(submit())}>
          <Field type="text"
                  name="city"
                  placeholder="Enter City"
                  component={FormField} />
          <Field type="text"
                  name="state"
                  fieldType="select"
                  placeholder="Select State"
                  options={getStateOptions()}
                  component={FormField} />
          <span className="search-button">
            <input className="btn btn-success btn-secondary"
                   type="submit"
                   value={submitting ? 'Searching' : 'Search'}
                   disabled={submitting || invalid} />
          </span>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'trail_location_form',
  validate,
})(TrailLocationForm)
