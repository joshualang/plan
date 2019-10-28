const button = document.querySelector('button')
const names = document.querySelectorAll('.item__span')

names.forEach(names => {
  button.addEventListener('click', () => {
    names.classList.toggle('active')
    if (button.textContent === 'Show names') {
      button.textContent = 'Hide names'
    } else {
      button.textContent = 'Show names'
    }
  })
})
