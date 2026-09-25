import type { KepTipus } from '../adat'
import '../css/NagyKep.css'

interface KepProps {
  kepem: KepTipus
  onElozo: () => void
  onKovetkezo: () => void
}

export default function NagyKep({ kepem, onElozo, onKovetkezo }: KepProps) {
  return (
    <section className="nagyKep">
      <div className="nagyKep-kepkeret">
        <button
          className="nagyKep-nyil nagyKep-nyil--bal"
          type="button"
          onClick={onElozo}
          aria-label="Previous portrait"
        >
          ‹
        </button>

        <img src={kepem.kep} alt="Selected historical portrait" />

        <button
          className="nagyKep-nyil nagyKep-nyil--jobb"
          type="button"
          onClick={onKovetkezo}
          aria-label="Next portrait"
        >
          ›
        </button>
      </div>

      <p>{kepem.leiras}</p>
    </section>
  )
}
