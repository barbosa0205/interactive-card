import React from 'react'
import '../styles/components/CardForm.scss'
import cardBack from '../assets/images/bg-card-back.png'
import cardFront from '../assets/images/bg-card-front.png'
const CardForm = () => {
  return (
    <div className='grid'>
      {/* Header */}
      <header className='header'>
        <div className='card_container'>
          {/* card back */}
          <img className='card card_back' src={cardBack} alt='card-back' />

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
              <p>0000 0000 0000 0000</p>
              <div className='name_and_expiredate-container'>
                <p>JANE APPLESEED</p>
                <div>
                  <span>00</span>/<span>00</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className='main'>
        <form className='form'>
          <label htmlFor='fullname'>
            <p>CARDHOLDER NAME</p>
          </label>
          <input
            type='text'
            name='fullname'
            id='fullname'
            placeholder='e.g. Hane Appleseed'
          />
          <label htmlFor='card'>
            <p>CARD NUMBER</p>
          </label>
          <input
            type='text'
            name='card'
            id='card'
            placeholder='e.g. 1234 5678 9123 0000'
          />
          <section className='inputs_container'>
            <div className='input_container'>
              <label htmlFor='exp_date'>
                <p>EXP. DATE</p>
              </label>
              <input
                className='small_input'
                type='number'
                name='exp_date'
                id='exp_date'
                placeholder='MM'
              />
            </div>
            <div className='input_container'>
              <label htmlFor='exp_date'>
                <p>(MM/YY)</p>
              </label>
              <input
                className='small_input'
                type='number'
                name='exp_date'
                id='exp_date'
                placeholder='YY'
              />
            </div>
            <div className='input_container'>
              <label htmlFor='exp_date'>
                <p>CVC</p>
              </label>
              <input
                className='fit_input'
                type='number'
                name='exp_date'
                id='exp_date'
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
