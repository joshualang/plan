const button = document.querySelector('.showNamesBtn')
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

let gridAreaArray = [
  'i1',
  'i2',
  'i3',
  'i4',
  'i5',
  'i6',
  'i7',
  'i8',
  'i9',
  'i10',
  'i11',
  'i12',
  'i13',
  'i14',
  'i15',
  'i16',
  'i17'
]

function shuffle(array) {
  var m = array.length,
    t,
    i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

const students = document.querySelectorAll('.item')

function placeStudents() {
  const newArray = shuffle(gridAreaArray)
  console.log(newArray)
  students.forEach(
    (student, index) => (student.style.gridArea = newArray[index])
  )
}

const shuffleBtn = document.querySelector('.shuffleBtn')

shuffleBtn.addEventListener('click', () => {
  placeStudents()
})
