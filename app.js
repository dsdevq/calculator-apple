const calculator = document.querySelector('.calculator__body')
const input = document.querySelector('.calculator__input')
const greyButtons = document.querySelectorAll('.grey')
const orangeButtons = document.querySelectorAll('.orange')
const numbers = document.querySelectorAll(  '.number')

// Запятая
const zap = document.querySelector('.special-number')

let actions = {
  array: [],
  primaryAction: null,
  somethingIsHappening: false,
  value1: null,
  value2: null,

  '÷func': (e1, e2) => {
    return +e1/+e2
  },

  '×func': (e1, e2) => {
    return +e1 * +e2
  },

  '+func': (e1, e2) => {
    return +e1 + +e2
  },

  '-func': (e1, e2) => {
    return +e1 - +e2
  },
  // allFunction(e1, e2, method) {
  //   return eval(+e1  +method  +e2)
  // }
}

// !ДОДЕЛАТЬ

// ОПРЕДЕЛЯЕТ ВЫБРАННЫЙ МЕТОД "="
const step4 = () => {
  actions.value2 = input.value
  input.value = actions.primaryAction(actions.value1, actions.value2)
  actions.value1 = input.value
  // $ меняет значение
}


// AC

const ac = Array.from(greyButtons).filter((e) => {
  return e.innerText === 'AC'
})

greyButtons.forEach(e => {
  if (e.innerText === 'AC') {
    e.addEventListener('click', () => {
      clearAC(orangeButtons)
    })
  }
  else if (e.innerText === '+/-') {
    e.addEventListener('click', () => {
      input.value = parseFloat(input.value) * (-1)
    })
  }
  else if (e.innerText === '%') {
    e.addEventListener('click', () => {
      input.value = (parseFloat(input.value) * (0.01))
    })
  }
})

// TODO: check

function step2(element) {
  clearButtons(orangeButtons)
  element.classList.add('active')
  actions.value1 = input.value
  actions.primaryAction = actions[`${element.innerText}func`]
  actions.somethingIsHappening = !actions.somethingIsHappening
  console.log(actions.somethingIsHappening)
}

orangeButtons.forEach(e => {
  e.innerText === '=' ? e.addEventListener('click', () => {
      step4()
  }) :  e.addEventListener('click', () => {
      step2(e)
  })
})

function clearAC(array) {
  array.forEach(e => {
    e.classList.remove('active')
  })
  input.value = '0'
  actions.value1 = actions.value2 = null
}

function clearButtons(array) {
  array.forEach(e => {
    e.classList.remove('active')
  })
}

const methodFunction = (method) => {

}

zap.addEventListener('click', () => {
  if (input.value.length && !input.value.includes(zap.innerText)) {
    input.value += zap.innerText
  }
})

numbers.forEach(e => {
  e.addEventListener('click', () => {
    // TODO: handle
    if (actions.somethingIsHappening) {
      // !ДОДЕЛАТЬ через метод массива
      console.log(input.value === actions.array[0])
      console.log('working1')
      orangeButtons[0].classList.remove('active')
      orangeButtons[1].classList.remove('active')
      orangeButtons[2].classList.remove('active')
      orangeButtons[3].classList.remove('active')
      orangeButtons[4].classList.remove('active')
      input.value = e.innerText
      actions.somethingIsHappening = !actions.somethingIsHappening
    }
    else if (input.value !== '0') {
      console.log('working2')
      input.value += e.innerText
    }
    else input.value = e.innerText
  })
}) 


