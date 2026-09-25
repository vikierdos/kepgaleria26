import { useState } from 'react'
import './css/App.css'
import { KEPLISTA } from './adat'
import Galeria from './components/Galeria'
import NagyKep from './components/NagyKep'

function App() {
  const [kivalasztottIndex, setKivalasztottIndex] = useState(0)

  const elozoKep = () => {
    setKivalasztottIndex((index) =>
      (index - 1 + KEPLISTA.length) % KEPLISTA.length,
    )
  }

  const kovetkezoKep = () => {
    setKivalasztottIndex((index) =>
      (index + 1 + KEPLISTA.length) % KEPLISTA.length,
    )
  }

  return (
    <main className="app">
      <h1>British Monarchs</h1>

      <NagyKep
        kepem={KEPLISTA[kivalasztottIndex]}
        onElozo={elozoKep}
        onKovetkezo={kovetkezoKep}
      />

      <Galeria
        lista={KEPLISTA}
        kivalasztottIndex={kivalasztottIndex}
        onKivalaszt={setKivalasztottIndex}
      />
    </main>
  )
}

export default App
