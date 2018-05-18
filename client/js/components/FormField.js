import React from 'react'


function getField({ fieldType, input, type, placeholder, disabled, options }) {
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

export function FormField(props) {
  const {
    input,
    type,
    placeholder,
    disabled,
    fieldType,
    options,
    meta: { touched, error }
  } = props
  return (
    <div className={`form-group ${fieldType == 'select' ? 'select' : ''}`}>
      {touched && error && <span style={{color: 'red', fontWeight: 'bold'}}>{error}</span>}
      {getField(props)}
    </div>
  )
}
