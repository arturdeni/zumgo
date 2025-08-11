// Contact.js - Funcionalidad del formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
  initContactForm()
})

function initContactForm() {
  const form = document.getElementById('contactForm')
  if (!form) return

  // Agregar event listeners
  form.addEventListener('submit', handleFormSubmit)

  // Validación en tiempo real
  const inputs = form.querySelectorAll('.contact__input')
  inputs.forEach((input) => {
    input.addEventListener('blur', validateField)
    input.addEventListener('input', clearErrors)
  })
}

function handleFormSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)

  // Validar todos los campos
  if (!validateForm(form)) {
    showError('Por favor, completa todos los campos requeridos correctamente.')
    return
  }

  // Obtener datos del formulario
  const data = {
    nombre: formData.get('nombre'),
    apellidos: formData.get('apellidos'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    motivo: formData.get('motivo'),
    mensaje: formData.get('mensaje'),
  }

  // Simular envío (aquí irá la lógica real más adelante)
  simulateFormSubmit(form, data)
}

function validateForm(form) {
  let isValid = true
  const requiredFields = form.querySelectorAll('[required]')

  requiredFields.forEach((field) => {
    if (!validateField({ target: field })) {
      isValid = false
    }
  })

  return isValid
}

function validateField(event) {
  const field = event.target
  const value = field.value.trim()
  let isValid = true

  // Limpiar errores previos
  clearFieldError(field)

  // Validar campo requerido
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'Este campo es requerido')
    isValid = false
  }

  // Validaciones específicas por tipo
  if (value && field.type === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(value)) {
      showFieldError(field, 'Introduce un email válido')
      isValid = false
    }
  }

  if (value && field.type === 'tel') {
    const phonePattern = /^[+]?[\d\s\-\(\)]{9,}$/
    if (!phonePattern.test(value)) {
      showFieldError(field, 'Introduce un teléfono válido')
      isValid = false
    }
  }

  return isValid
}

function clearErrors(event) {
  const field = event.target
  clearFieldError(field)
}

function showFieldError(field, message) {
  field.classList.add('has-error')

  // Crear o actualizar mensaje de error
  let errorElement = field.parentNode.querySelector('.field-error')
  if (!errorElement) {
    errorElement = document.createElement('span')
    errorElement.className = 'field-error'
    errorElement.style.cssText = `color: var(--color-white);`
    field.parentNode.appendChild(errorElement)
  }
  errorElement.textContent = message
}

function clearFieldError(field) {
  field.classList.remove('has-error')
  const errorElement = field.parentNode.querySelector('.field-error')
  if (errorElement) {
    errorElement.remove()
  }
}

function showError(message) {
  // Crear notificación de error temporal
  const errorDiv = document.createElement('div')
  errorDiv.className = 'contact-error-message'
  errorDiv.textContent = message
  errorDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-orange);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius-lg);
    z-index: 1000;
    font-family: var(--font-family-helvetica-regular);
    box-shadow: var(--shadow-lg);
  `

  document.body.appendChild(errorDiv)

  // Eliminar después de 3 segundos
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.parentNode.removeChild(errorDiv)
    }
  }, 3000)
}

function showSuccess(message) {
  // Crear notificación de éxito temporal
  const successDiv = document.createElement('div')
  successDiv.className = 'contact-success-message'
  successDiv.textContent = message
  successDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-mint);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius-lg);
    z-index: 1000;
    font-family: var(--font-family-helvetica-regular);
    box-shadow: var(--shadow-lg);
  `

  document.body.appendChild(successDiv)

  // Eliminar después de 4 segundos
  setTimeout(() => {
    if (successDiv.parentNode) {
      successDiv.parentNode.removeChild(successDiv)
    }
  }, 4000)
}

function simulateFormSubmit(form, data) {
  // Agregar clase de loading
  form.classList.add('is-loading')

  // Simular retraso de envío
  setTimeout(() => {
    form.classList.remove('is-loading')

    // Mostrar mensaje de éxito
    showSuccess('¡Gracias por contactarnos! Te responderemos pronto.')

    // Limpiar formulario
    form.reset()

    // Log de los datos (para desarrollo)
    console.log('Datos del formulario:', data)

    // Aquí irá la lógica real de envío de email más adelante
    // Por ejemplo: sendEmail(data)
  }, 1500) // Simular 1.5 segundos de envío
}

// Función placeholder para el envío real (implementar más adelante)
function sendEmail(data) {
  // TODO: Implementar envío real del email
  // Opciones: EmailJS, Formspree, Netlify Forms, etc.
  console.log('Enviando email con datos:', data)
}
