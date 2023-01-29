import React, { useState } from 'react'
import '../styles/components/CardForm.scss'
import cardBack from '../assets/images/bg-card-back.png'
import cardFront from '../assets/images/bg-card-front.png'
import { useForm } from '../hooks/useForm'
import {
  handleChangeErrors,
  handleSubmitErrors,
} from '../utils/errors/cardFormErrors'
const CardForm = () => {
  const [cardFormValues, handleCardFormChange] = useForm(
    {
      fullname: '',
      card: '',
      exp_month: '',
      exp_year: '',
      cvc: '',
    },
    handleChangeErrors,
    handleSubmitErrors
  )
  return (
    <div className='grid'>
      {/* Header */}
      <header className='header'>
        <div className='card_container'>
          {/* card back */}

          <div className='card_back-container'>
            <img className='card card_back' src={cardBack} alt='card-back' />
            {/* cvc */}
            {cardFormValues?.cvc ? (
              <p className='card_cvc'>{cardFormValues.cvc}</p>
            ) : (
              <p className='card_cvc'>000</p>
            )}
          </div>

          {/* card front */}

          <div className='card_front-container'>
            <img className='card card_front' src={cardFront} alt='card-front' />
            {/* logo */}
            <div className='logo'>
              <span className='circle-one'></span>
              <span className='circle-two'></span>
            </div>
            {/* card data */}
            <section className='card_front_data-container'>
              {!cardFormValues?.card ? (
                <p>0000 0000 0000 0000</p>
              ) : (
                <p>
                  {cardFormValues.card.slice(0, 4) +
                    ' ' +
                    cardFormValues.card.slice(4, 8) +
                    ' ' +
                    cardFormValues.card.slice(8, 12) +
                    ' ' +
                    cardFormValues.card.slice(12, 16)}
                </p>
              )}
              <div className='name_and_expiredate-container'>
                {!cardFormValues?.fullname ? (
                  <p>JANE APPLESEED</p>
                ) : (
                  <p>{cardFormValues.fullname.toUpperCase()}</p>
                )}
                <div>
                  {!cardFormValues.exp_month ? (
                    <span className='exp_date'>00</span>
                  ) : (
                    <span className='exp_date'>{cardFormValues.exp_month}</span>
                  )}
                  /
                  {!cardFormValues.exp_year ? (
                    <span className='exp_date'>00</span>
                  ) : (
                    <span className='exp_date'>{cardFormValues.exp_year}</span>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className='main'>
        <form onSubmit={(e) => e.preventDefault()} className='form'>
          <label htmlFor='fullname'>
            <p>CARDHOLDER NAME</p>
          </label>
          <input
            onChange={handleCardFormChange}
            value={cardFormValues.fullname}
            type='text'
            name='fullname'
            id='fullname'
            placeholder='e.g. Jane Appleseed'
          />
          <label htmlFor='card'>
            <p>CARD NUMBER</p>
          </label>
          <input
            onChange={handleCardFormChange}
            value={cardFormValues.card}
            type='text'
            name='card'
            id='card'
            placeholder='e.g. 1234 5678 9123 0000'
          />
          <section className='inputs_container'>
            <div className='input_container'>
              <label htmlFor='exp_month'>
                <p>EXP. DATE</p>
              </label>
              <input
                onChange={handleCardFormChange}
                value={cardFormValues.exp_month}
                className='small_input'
                type='text'
                name='exp_month'
                id='exp_month'
                placeholder='MM'
              />
            </div>
            <div className='input_container'>
              <label htmlFor='exp_year'>
                <p>(MM/YY)</p>
              </label>
              <input
                onChange={handleCardFormChange}
                value={cardFormValues.exp_year}
                className='small_input'
                type='text'
                name='exp_year'
                id='exp_year'
                placeholder='YY'
              />
            </div>
            <div className='input_container'>
              <label htmlFor='cvc'>
                <p>CVC</p>
              </label>
              <input
                onChange={handleCardFormChange}
                value={cardFormValues.cvc}
                className='fit_input'
                type='text'
                name='cvc'
                id='cvc'
                placeholder='e.g. 123'
              />
            </div>
          </section>
          <button className='submit'>Confirm</button>
        </form>
      </main>
    </div>
  )
}

export default CardForm
