const imgs = Array.from(document.querySelectorAll('.slider-container img'))

const slider_count = imgs.length

let slide_number = 1
const curr_slide = document.getElementById('slider-number')
const nextButton = document.getElementById('next')
const prevtButton = document.getElementById('prev')
const indicator = document.getElementById('indicator')
nextButton.addEventListener('click', nextSlide)
prevtButton.addEventListener('click', prevSlide)

function nextSlide() {
  if (nextButton.classList.contains('disabled')) {
    return
  }
  slide_number++
  manageImages()
}

function prevSlide() {
  if (prevtButton.classList.contains('disabled')) {
    return
  }
  slide_number--
  manageImages()
}

function manageImages() {
  removeAllActive()
  checker()
  imgs[slide_number - 1].classList.add('active')
  bullet[slide_number - 1].classList.add('active')
}

const pagination = document.createElement('ul')
for (let i = 0; i < slider_count; i++) {
  const li = document.createElement('li')
  li.setAttribute('data-index', i + 1)
  li.appendChild(document.createTextNode(i + 1))
  pagination.append(li)
  li.addEventListener('click', removeAllActive)
  li.addEventListener('click', addActive)
}
indicator.append(pagination)
const bullet = Array.from(document.querySelectorAll('ul li'))
bullet[0].classList.add('active')

function removeAllActive() {
  imgs.forEach((img) => {
    img.classList.remove('active')
  })
  document.querySelectorAll('ul li').forEach((item) => {
    item.classList.remove('active')
  })
}

function checker() {
  curr_slide.innerHTML = `Slide #${slide_number} of ${slider_count}`
  if (slide_number === 1) {
    prevtButton.classList.add('disabled')
  } else {
    prevtButton.classList.remove('disabled')
  }
  if (slide_number === slider_count) {
    nextButton.classList.add('disabled')
  } else {
    nextButton.classList.remove('disabled')
  }
}

function addActive() {
  document.getElementById(this.dataset.index).classList.add('active')
  slide_number = +this.dataset.index
  bullet[slide_number - 1].classList.add('active')
  checker()
}
