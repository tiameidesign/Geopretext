import { useState } from 'react'
import countries from './countries'
import './App.css'

function App() {
  const [selected, setSelected] = useState(new Set())

  function toggle(country) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(country) ? next.delete(country) : next.add(country)
      return next
    })
  }

  return (
    <div className="container">
      <div className="text-box">
        {countries.map((country, i) => (
          <span
            key={i}
            className={selected.has(country) ? 'selected' : ''}
            onClick={() => toggle(country)}
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  )
}

export default App
