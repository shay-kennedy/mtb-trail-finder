import React from 'react'


const getField = ({ fieldType, input, type, placeholder, disabled, options }) => {
  if (fieldType === 'select') {
    return (
      <select {...input}
              disabled={disabled}
              className='form-control'>
        {renderOptions(options, placeholder)}
      </select>
    )
  }
  return (
    <input {...input}
           placeholder={placeholder}
           disabled={disabled}
           type={type}
           className='form-control' />
  )
}

const renderOptions = (options, placeholder) => {
  if (placeholder && options[0].value != '') {
    options.unshift({ name: '--- ' + placeholder + ' ---', value: '' })
  }
  if (options) {
    return options.map((option) => (<option key={option.value} value={option.value}>{option.name}</option>))
  }
  return []
}

export const FormField = (props) => {
  const {
    fieldType,
    meta: { touched, error, visited, active },
  } = props
  return (
    <div className={`form-group ${fieldType == 'select' ? 'select' : ''}`}>
      {touched && error && visited && !active && <span className={'form-error'}>{error}</span>}
      {getField(props)}
    </div>
  )
}
