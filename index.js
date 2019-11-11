let studentList = [
  { name: 'Schulz', firstName: 'Robert', hTMLClass: 'item15', seat: 15 },
  { name: 'Seeliger', firstName: 'Marcel', hTMLClass: 'item6', seat: 6 },
  { name: 'Gfrörer', firstName: 'Sara', hTMLClass: 'item14', seat: 14 },
  { name: 'Starsy', firstName: 'Julia', hTMLClass: 'item8', seat: 8 },
  { name: 'Suhlmann', firstName: 'Friederike', hTMLClass: 'item7', seat: 7 },
  { name: 'Schrieber', firstName: 'Anja', hTMLClass: 'item11', seat: 11 },
  { name: 'Kloth', firstName: 'Britta', hTMLClass: 'item17', seat: 17 },
  { name: 'Reisswig', firstName: 'Johanna', hTMLClass: 'item16', seat: 16 },
  { name: 'Lang', firstName: 'Joshua', hTMLClass: 'item9', seat: 9 },
  { name: 'König', firstName: 'Maje', hTMLClass: 'item12', seat: 12 },
  {
    name: 'Seydlitz',
    firstName: 'Philipp von',
    hTMLClass: 'item1',
    seat: 1
  },
  { name: 'Dayan', firstName: 'Davut', hTMLClass: 'item4', seat: 4 },
  {
    name: 'Bartolovic Resch',
    firstName: 'Ivana',
    hTMLClass: 'item10',
    seat: 10
  },
  { name: 'Chodak', firstName: 'Krystian', hTMLClass: 'item2', seat: 2 },
  { name: 'Niemann', firstName: 'Marilena', hTMLClass: 'item5', seat: 5 },
  { name: 'Bozhinova', firstName: 'Rayna', hTMLClass: 'item13', seat: 13 },
  { name: 'Wisbar', firstName: 'Annemarie', hTMLClass: 'item3', seat: 3 }
]

let protocolDates = [
  '2019-10-1',
  '2019-10-2',
  '2019-10-7',
  '2019-10-8',
  '2019-10-9',
  '2019-10-10',
  '2019-10-14',
  '2019-10-15',
  '2019-10-16',
  '2019-10-17',
  '2019-10-21',
  '2019-10-22',
  '2019-10-23',
  '2019-10-24',
  '2019-10-28',
  '2019-10-29',
  '2019-10-30',
  '2019-11-4',
  '2019-11-6',
  '2019-11-7',
  '2019-11-11',
  '2019-11-12',
  '2019-11-13',
  '2019-11-14',
  '2019-11-18',
  '2019-11-19',
  '2019-11-20',
  '2019-11-21'
]

const showNamesBtn = document.querySelector('.js-showNamesBtn')
const shuffleBtn = document.querySelector('.js-shuffleBtn')
const nameListBtn = document.querySelector('.js-nameListBtn')
const namelist = document.querySelector('.js-namelist')
const names = document.querySelectorAll('.item__span')
const students = document.querySelectorAll('.item')

const today = makeDateString(new Date())

sortAlphabethicly(studentList)
createList(studentList)
renderList(studentList, today)

shuffleBtn.addEventListener('click', () => {
  placeStudents()
})

names.forEach(name => {
  showNamesBtn.addEventListener('click', () => {
    name.classList.toggle('active')
    showNamesBtn.textContent === 'Show names'
      ? (showNamesBtn.textContent = 'Hide names')
      : (showNamesBtn.textContent = 'Show names')
  })
})

nameListBtn.addEventListener('click', () => {
  namelist.toggleAttribute('hidden')
  nameListBtn.textContent === 'Show list'
    ? (nameListBtn.textContent = 'Hide list')
    : (nameListBtn.textContent = 'Show list')
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
  const recorder = findRecorder(studentList, today)
  let m = array.length
  let t
  let i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  const recorderSeat = array[recorder.seat - 1]
  let count = 0
  array.forEach(item => {
    if (item === 'i17') {
      item = recorderSeat
      array[count] = recorderSeat
    }
    count++
  })
  array[recorder.seat - 1] = 'i17'
  return array
}

function placeStudents() {
  const newArray = shuffle(gridAreaArray)
  students.forEach(
    (student, index) => (student.style.gridArea = newArray[index])
  )
}

function sortAlphabethicly(list) {
  list.sort((a, b) => (a.name > b.name ? 1 : -1))
}

function makeDateString(date) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const dateString = year + '-' + month + '-' + day
  return dateString
}

function createList(list) {
  let counter = 0
  loop(list)
  counter > protocolDates.length - 1 || loop(list)

  function loop(list) {
    list.forEach(student => {
      student.name = student.name
      student.firstName = student.firstName
      counter > protocolDates.length - 1 ||
        (student.date = student.date
          ? (student.date = student.date + ', ' + protocolDates[counter])
          : (student.date = ' -----  ' + protocolDates[counter]))
      counter++
    })
  }
}

function renderList(list, today) {
  list.forEach(student => {
    const test = student.date.includes(today)
    const el = document.createElement('li')
    el.textContent = student.firstName + ' ' + student.name + ' ' + student.date
    if (test) {
      el.style.background = 'red'
    }
    namelist.appendChild(el)
  })
}

function findRecorder(list, today) {
  list.forEach(student => {
    const test = student.date.includes(today)
    if (test) {
      recorder = student
    }
  })
  return recorder
}
