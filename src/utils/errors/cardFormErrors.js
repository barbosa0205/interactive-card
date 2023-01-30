export const handleChangeErrors = (name, value) => {
  switch (name) {
    case 'card':
      //  if() return false
      if (!value.match(/^$|^\d+$/)) return true
      if (value.length > 16) return true

      break
    case 'cvc':
      //  if() return false
      if (!value.match(/^$|^\d+$/)) return true
      if (value.length > 3) return true

      break
    case 'exp_month':
      //  if() return false
      if (!value.match(/^$|^\d+$/)) return true
      if (value.length > 2) return true

      break
    case 'exp_year':
      //  if() return false
      if (!value.match(/^$|^\d+$/)) return true
      if (value.length > 2) return true

      break

    default:
      break
  }
}

export const handleSubmitErrors = (formValues) => {
  const { fullname, card, exp_month, exp_year, cvc } = formValues

  let errors = {}
  if (!fullname.length) {
    errors = { ...errors, fullname: 'The name must not be empty' }
  }
  if (card.length < 16) {
    errors = { ...errors, card: 'The card number should be 16 characters' }
  }

  if (!card.length) {
    errors = { ...errors, card: 'The card number must not be empty' }
  }

  if (!exp_month.length || !exp_year.length) {
    errors = { ...errors, exp_month: 'Date must not be empty' }
  }

  if (exp_month.length === 1 || exp_year.length === 1) {
    errors = {
      ...errors,
      exp_month: 'the date must be spelled correctly',
    }
  }

  if (!cvc.length) {
    errors = {
      ...errors,
      cvc: 'The security code must not be empty',
    }
  }

  if (cvc.length !== 3) {
    errors = {
      ...errors,
      cvc: 'Security code must contain 3 characters',
    }
  }

  console.log(errors)

  return errors
}
