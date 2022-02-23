let count = 0

const buttons = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const button = e.currentTarget.classList;
    if (button.contains('decrease')) {
      count--
    } else if (button.contains('increase')) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = 'blue'
    } else if (count < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }
    value.textContent = count
  })
})