import type { KepTipus } from '../adat'
import '../css/KisKep.css'

interface KepProps {
  kepem: KepTipus
  index: number
  kivalasztott: boolean
  onKivalaszt: () => void
}

export default function KisKep({
  kepem,
  index,
  kivalasztott,
  onKivalaszt,
}: KepProps) {
  return (
    <button
      className={`kisKep ${kivalasztott ? 'kivalasztott' : ''}`}
      type="button"
      onClick={onKivalaszt}
      aria-label={`Show portrait ${index + 1}`}
      aria-pressed={kivalasztott}
    >
      <img src={kepem.kep} alt="" />
    </button>
  )
}
