import './style.css'

// Marque dans le menu la section en cours de lecture : la dernière dont
// le haut a franchi le tiers supérieur de l'écran. En bas de page, la
// dernière section, souvent trop courte pour y arriver, l'emporte.
const liens = document.querySelectorAll('[data-nav] a')
const sections = document.querySelectorAll('main section[id]')

function marquerSectionActive() {
  const enBas = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
  let active = sections[0]
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= window.innerHeight / 3) active = section
  }
  if (enBas) active = sections[sections.length - 1]

  for (const lien of liens) {
    if (lien.hash === `#${active.id}`) {
      lien.setAttribute('aria-current', 'true')
    } else {
      lien.removeAttribute('aria-current')
    }
  }
}

window.addEventListener('scroll', marquerSectionActive, { passive: true })
marquerSectionActive()
