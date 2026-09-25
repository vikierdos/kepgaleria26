import type { KepTipus } from '../adat'
import KisKep from './KisKep'
import '../css/Galeria.css'

interface GaleriaProps {
  lista: KepTipus[]
  kivalasztottIndex: number
  onKivalaszt: (index: number) => void
}

export default function Galeria({
  lista,
  kivalasztottIndex,
  onKivalaszt,
}: GaleriaProps) {
  return (
    <div className="galeria" aria-label="Portrait gallery">
      {lista.map((kep, index) => (
        <KisKep
          key={kep.id}
          kepem={kep}
          index={index}
          kivalasztott={index === kivalasztottIndex}
          onKivalaszt={() => onKivalaszt(index)}
        />
      ))}
    </div>
  )
}
