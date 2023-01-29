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

export const handleSubmitErrors = () => {}
