// FAQs.js - Funcionalidad de acordeón para preguntas frecuentes
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function () {
  initFAQs()
  initFAQsAnimations()
})

function initFAQs() {
  const faqItems = document.querySelectorAll('.faq-item')

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-item__trigger')
    const content = item.querySelector('.faq-item__content')

    // Estado inicial - todos cerrados
    content.style.maxHeight = '0px'

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open')

      // Cerrar todos los otros FAQs (comportamiento acordeón)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains('is-open')) {
          closeFAQ(otherItem)
        }
      })

      // Toggle del FAQ actual
      if (isOpen) {
        closeFAQ(item)
      } else {
        openFAQ(item)
      }
    })
  })
}

function openFAQ(item) {
  const content = item.querySelector('.faq-item__content')
  const answer = item.querySelector('.faq-item__answer')

  item.classList.add('is-open')

  // Calcular la altura real del contenido
  const scrollHeight = answer.scrollHeight + 48 // 48px = padding total (24px top + 24px bottom)

  // Animar la apertura
  gsap.to(content, {
    maxHeight: scrollHeight + 'px',
    duration: 0.4,
    ease: 'power2.out',
  })
}

function closeFAQ(item) {
  const content = item.querySelector('.faq-item__content')

  item.classList.remove('is-open')

  // Animar el cierre
  gsap.to(content, {
    maxHeight: '0px',
    duration: 0.3,
    ease: 'power2.in',
  })
}

function initFAQsAnimations() {
  // === ANIMACIÓN DE ENTRADA DE LOS FAQS ===
  gsap.fromTo(
    '.faq-item',
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1, // Cada FAQ aparece con 0.1s de diferencia
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faqs__list',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )

  // === ANIMACIÓN DE ENTRADA DEL TÍTULO Y SUBTÍTULO ===
  gsap.fromTo(
    ['.faqs__title', '.faqs__subtitle'],
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.faqs__content',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    }
  )

  // === ANIMACIÓN DE ENTRADA DE LAS IMÁGENES (solo desktop) ===
  if (window.innerWidth >= 768) {
    gsap.fromTo(
      '.faqs__image',
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faqs__images',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }
}

// Refresh ScrollTrigger en resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})

// Manejar cambios de tamaño para recalcular alturas de FAQs abiertos
window.addEventListener('resize', () => {
  const openFAQs = document.querySelectorAll('.faq-item.is-open')

  openFAQs.forEach((item) => {
    const content = item.querySelector('.faq-item__content')
    const answer = item.querySelector('.faq-item__answer')
    const scrollHeight = answer.scrollHeight + 48

    content.style.maxHeight = scrollHeight + 'px'
  })
})
