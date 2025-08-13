// Contact.js - Funcionalidad del formulario de contacto con variables de entorno

document.addEventListener('DOMContentLoaded', function () {
  initContactForm()
  initEmailJS()
})

// Configuración de EmailJS usando variables de entorno
function initEmailJS() {
  // Obtener la Public Key desde variables de entorno
  const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY

  if (!publicKey) {
    console.error('EmailJS Public Key no configurada')
    return
  }

  emailjs.init(publicKey)
}

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

async function handleFormSubmit(event) {
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

  // Enviar email real
  await sendEmailReal(form, data)
}

// FUNCIÓN PRINCIPAL: Envío real del email
async function sendEmailReal(form, data) {
  // Obtener credenciales desde variables de entorno
  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID

  if (!serviceId || !templateId) {
    console.error('EmailJS Service ID o Template ID no configurados')
    showError('Error de configuración. Contacta al administrador.')
    return
  }

  // Agregar clase de loading
  form.classList.add('is-loading')

  // Deshabilitar botón de submit
  const submitButton = form.querySelector('button[type="submit"]')
  const originalButtonText = submitButton.textContent
  submitButton.disabled = true
  submitButton.textContent = 'Enviando...'

  try {
    // Preparar datos para EmailJS
    const templateParams = {
      from_name: `${data.nombre} ${data.apellidos}`,
      from_email: data.email,
      phone: data.telefono || 'No especificado',
      subject: data.motivo || 'Consulta desde web Zumgo',
      message: data.mensaje || 'Sin mensaje específico',
      to_email: 'hola@zumgojuice.com',
    }

    // Enviar email usando EmailJS con variables de entorno
    const response = await emailjs.send(
      serviceId, // Service ID desde .env
      templateId, // Template ID desde .env
      templateParams
    )

    console.log('Email enviado exitosamente:', response)

    // Mostrar mensaje de éxito
    showSuccess(
      '¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos pronto.'
    )

    // Limpiar formulario
    form.reset()
  } catch (error) {
    console.error('Error al enviar email:', error)

    // Mostrar mensaje de error específico
    if (error.text) {
      showError(`Error al enviar el mensaje: ${error.text}`)
    } else {
      showError(
        'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.'
      )
    }
  } finally {
    // Restaurar estado del formulario
    form.classList.remove('is-loading')
    submitButton.disabled = false
    submitButton.textContent = originalButtonText
  }
}

// === FUNCIONES DE VALIDACIÓN ===
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
    errorElement.style.cssText = `
      color: var(--color-white);
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    `
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

// === NOTIFICACIONES ===
function showError(message) {
  showNotification(message, 'error')
}

function showSuccess(message) {
  showNotification(message, 'success')
}

function showNotification(message, type) {
  // Crear notificación
  const notificationDiv = document.createElement('div')
  notificationDiv.className = `contact-notification contact-notification--${type}`
  notificationDiv.textContent = message

  const backgroundColor =
    type === 'success' ? 'var(--color-mint)' : 'var(--color-orange)'

  notificationDiv.style.cssText = `
    position: fixed;
    will-change: transform;
    top: 20px;
    right: 20px;
    background: ${backgroundColor};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    z-index: 1000;
    font-family: var(--font-family-helvetica-regular);
    box-shadow: var(--shadow-lg);
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
  `

  // Agregar animación CSS si no existe
  if (!document.querySelector('#notification-styles')) {
    const styleSheet = document.createElement('style')
    styleSheet.id = 'notification-styles'
    styleSheet.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `
    document.head.appendChild(styleSheet)
  }

  document.body.appendChild(notificationDiv)

  // Eliminar después de 5 segundos
  setTimeout(() => {
    if (notificationDiv.parentNode) {
      notificationDiv.style.animation = 'slideInRight 0.3s ease-out reverse'
      setTimeout(() => {
        if (notificationDiv.parentNode) {
          notificationDiv.parentNode.removeChild(notificationDiv)
        }
      }, 300)
    }
  }, 5000)
}
