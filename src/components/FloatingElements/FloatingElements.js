// FloatingElements.js - Animaciones GSAP simplificadas
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initAnimations()
})

function initAnimations() {
  // === INICIALIZAR POSICIONES PARA EVITAR SALTOS ===
  gsap.set('.floating-element--vaso', { y: 0 })
  gsap.set('.floating-element--naranja-back', { y: 0 })
  gsap.set('.floating-element--naranja-front', { y: 0 })

  // === ANIMACIÓN DE ENTRADA - Todos aparecen desde abajo ===
  gsap.fromTo(
    '.floating-element',
    {
      opacity: 0,
      y: 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out',
      // Inicializar parallax después de la entrada
      onComplete: () => {
        initParallax()
      },
    }
  )
}

function initParallax() {
  // === PARALLAX SCROLL - Movimiento hacia arriba a diferentes velocidades ===

  // Vasos - velocidad media
  gsap.fromTo(
    '.floating-element--vaso',
    { y: 0 }, // Desde posición inicial
    {
      y: -130,
      scrollTrigger: {
        trigger: '.floating-elements',
        start: 'center bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    }
  )

  // Naranjas traseras - velocidad lenta
  gsap.fromTo(
    '.floating-element--naranja-back',
    { y: 0 }, // Desde posición inicial
    {
      y: -220,
      scrollTrigger: {
        trigger: '.floating-elements',
        start: 'center bottom',
        end: 'bottom top',
        scrub: 2,
      },
    }
  )

  // Naranjas delanteras - velocidad rápida
  gsap.fromTo(
    '.floating-element--naranja-front',
    { y: 0 }, // Desde posición inicial
    {
      y: -480,
      scrollTrigger: {
        trigger: '.floating-elements',
        start: 'center bottom',
        end: 'bottom top',
        scrub: 1,
      },
    }
  )
}

// Refresh en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
