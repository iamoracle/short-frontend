const element = document.querySelector('.form-input')

let placeholder = element.placeholder

element.placeholder = ''

placeholder = Array.from(placeholder)

let i = 0

const speed = 150

function typing () {
  if (element.value !== '') {
    // pause execution when the value is not empty
    setTimeout(typing, speed)

    return null
  }

  if (i < placeholder.length) {
    element.placeholder += placeholder[i]

    setTimeout(typing, speed)

    i++
  } else {
    element.placeholder = ''

    i = 0

    setTimeout(typing, speed)

    const button = document.querySelector('.form-button')

    const bgColor = button.style.backgroundColor

    button.style.backgroundColor = '#060818aa'

    const color = button.style.color

    button.style.color = 'gray'

    const value = button.value

    button.value = 'click'

    setTimeout(() => {
      button.style.backgroundColor = bgColor

      button.style.color = color

      button.value = value
    }, 750)
  }
}

typing()
