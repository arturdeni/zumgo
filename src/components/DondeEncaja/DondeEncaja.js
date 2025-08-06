// DondeEncaja.js - Animaciones GSAP para los items
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initDondeEncajaAnimations()
})

function initDondeEncajaAnimations() {
  // === ANIMACIÓN DE ENTRADA ESCALONADA ===
  gsap.fromTo(
    '.donde-encaja__item',
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15, // Cada item aparece con 0.15s de diferencia
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.donde-encaja__grid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

// Refresh ScrollTrigger en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
