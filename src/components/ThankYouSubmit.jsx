import React from 'react'

import '../styles/components/ThankYouSubmit.scss'
import complete from '../assets/images/icon-complete.svg'
const ThankYouSubmit = () => {
  return (
    <section className='thanks_container'>
      <img src={complete} alt='complete' />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button>Continue</button>
    </section>
  )
}

export default ThankYouSubmit
