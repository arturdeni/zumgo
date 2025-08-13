// QueEs.js - Animación GSAP para el SVG de la sección "¿Qué es?"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initQueEsAnimation()
})

function initQueEsAnimation() {
  const strokePath = document.querySelector('#que-es-ellipse-stroke')

  if (strokePath) {
    const length = strokePath.getTotalLength()

    // Estado inicial: trazo oculto por dash
    gsap.set(strokePath, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    // Timeline con scrub: se "dibuja" el trazo
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.que-es__note',
        start: 'top 85%',
        end: 'top 60%',
        scrub: 2, // Añade un poco de suavizado (1-3 son buenos valores)
        toggleActions: 'play none none reverse', // Se revierte al salir hacia arriba
      },
      defaults: { ease: 'none' },
    })

    // Animación del trazo
    tl.fromTo(
      strokePath,
      { strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 0.8 }
    )
  }
}

// Refresh ScrollTrigger en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
