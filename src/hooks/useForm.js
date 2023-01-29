import React, { useState } from 'react'

export const useForm = (formValues, handleChangeErrors) => {
  const [formData, setFormData] = useState(formValues)

  const handleChange = ({ target }) => {
    // console.log(target.defaultValue)
    const errors = handleChangeErrors(target.name, target.value)
    if (errors) return
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  return [formData, handleChange]
}
