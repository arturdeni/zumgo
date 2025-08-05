// FloatingElements.js - Animaciones GSAP simplificadas
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initAnimations()
})

function initAnimations() {
  // === ANIMACIÓN DE ENTRADA - Todos aparecen desde abajo ===
  gsap.fromTo(
    '.floating-element',
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3,
    }
  )

  // === PARALLAX SCROLL - Movimiento hacia arriba a diferentes velocidades ===

  // Vasos - velocidad media
  gsap.to('.floating-element--vaso', {
    y: -130,
    scrollTrigger: {
      trigger: '.floating-elements',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  })

  // Naranjas traseras - velocidad lenta
  gsap.to('.floating-element--naranja-back', {
    y: -220,
    scrollTrigger: {
      trigger: '.floating-elements',
      start: 'center bottom',
      end: 'bottom top',
      scrub: 2,
    },
  })

  // Naranjas delanteras - velocidad rápida
  gsap.to('.floating-element--naranja-front', {
    y: -480,
    scrollTrigger: {
      trigger: '.floating-elements',
      start: 'center bottom',
      end: 'bottom top',
      scrub: 1,
      markers: true,
    },
  })
}

// Refresh en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
