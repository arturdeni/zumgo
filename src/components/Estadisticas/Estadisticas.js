// Estadisticas.js - Animación GSAP simple para los bloques
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initEstadisticasAnimation()
})

function initEstadisticasAnimation() {
  // === CONFIGURACIÓN INICIAL ===
  // Establecer estado inicial de los bloques (invisible y desplazados hacia abajo)
  gsap.set('.estadisticas__block', {
    opacity: 0,
    y: 60, // Desplazados 60px hacia abajo
  })

  // === ANIMACIÓN DE ENTRADA ===
  gsap.to('.estadisticas__block', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2, // Cada bloque aparece con 0.2s de retraso
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.estadisticas__grid',
      start: 'top 85%', // Cuando el grid esté al 85% del viewport
      end: 'top 85%', // Solo se ejecuta una vez
      toggleActions: 'play none none none', // Solo reproduce, no reversa
    },
  })
}

// Refrescar ScrollTrigger en resize para mantener posiciones correctas
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
