// CTA.js - Animaciones GSAP simples para elementos flotantes del CTA
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initCTAAnimations()
})

function initCTAAnimations() {
  // === MOVIMIENTO CON SCROLL ===
  // Izquierda se mueve hacia arriba
  gsap.to('.cta__floating--oranges-left', {
    y: 100,
    scrollTrigger: {
      trigger: '.cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  })

  // Derecha se mueve hacia abajo
  gsap.to('.cta__floating--oranges-right', {
    y: -220,
    scrollTrigger: {
      trigger: '.cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  })

  // === ZOOM EN HOVER ===
  const floatingContainers = document.querySelectorAll('.cta__floating')

  floatingContainers.forEach((container) => {
    const img = container.querySelector('img')

    container.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.1, duration: 0.3, ease: 'power2.out' })
    })

    container.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.3, ease: 'power2.out' })
    })
  })
}

// Refresh ScrollTrigger en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
