import { useState } from 'react'
import CardForm from './components/CardForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <CardForm />
    </div>
  )
}

export default App
