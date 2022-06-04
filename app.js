const calculator = document.querySelector('.calculator__body')
const input = document.querySelector('.calculator__input')
const greyButtons = document.querySelectorAll('.grey')
const orangeButtons = document.querySelectorAll('.orange')
const numbers = document.querySelectorAll(  '.number')

// Запятая
const zap = document.querySelector('.special-number')

let actions = {
  array: [],
  isDivision: false,

  division: (e1, e2) => {
    return +e1/+e2
  },

  isMult: false,

  mult: (e1, e2) => {
    return +e1 * +e2
  },

  isAdd: false, //$ '+'

  add: (e1, e2) => {
    return +e1 + +e2
  },

  isSub: false, //$ '-'

  sub: (e1, e2) => {
    return +e1 - +e2
  },

  // allFunction(e1, e2, method) {
  //   return eval(+e1  +method  +e2)
  // }
}

// !ДОДЕЛАТЬ
const functions = (key) => {
   actions.array.push(input.value)
   input.value = actions.allFunction(actions.array[0], actions.array[1], '-')
   actions.array.length = 0
  actions[key] = !actions[key]
}

const method = () => {
  let values = Object.values(actions)
  let indexNeed = values.indexOf(true)
  let keys  = Object.keys(actions)[indexNeed]
  //$ console.log(actions[keys] = !actions[keys]) меняет значение

  return keys 
}

method()


// AC

const ac = Array.from(greyButtons).filter((e) => {
  return e.innerText === 'AC'
})

greyButtons.forEach(e => {
  if (e.innerText === 'AC') {
    e.addEventListener('click', () => {
      input.value = '0'
      orangeButtons[0].classList.remove('active')
      orangeButtons[1].classList.remove('active')
      orangeButtons[2].classList.remove('active')
      orangeButtons[3].classList.remove('active')
      orangeButtons[4].classList.remove('active')
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

orangeButtons.forEach(e => {
  if (e.innerText === '×') {
    e.addEventListener('click', () => {
      e.classList.add('active')
      let value1 = input.value
      actions.array.push(value1)
      actions.isMult = !actions.isMult
    })
  }

  if (e.innerText === '-') {
    e.addEventListener('click', () => {
      e.classList.add('active')
      let value1 = input.value
      actions.array.push(value1)
      actions.isDivision = !actions.isDivision
    })
  }

  if (e.innerText === '+') {
    e.addEventListener('click', () => {
      e.classList.add('active')
      let value1 = input.value
      actions.array.push(value1)
      actions.isAdd = !actions.isAdd
    })
  }

  if (e.innerText === '÷') {
    e.addEventListener('click', () => {
      e.classList.add('active')
      let value1 = input.value
      actions.array.push(value1)
      actions.isDivision = !actions.isDivision
    })
  }

  if (e.innerText === '=') {
    e.addEventListener('click', () => {
      
      // ! To do
      // let key = method()

      // functions(key)

      if (actions.isDivision) {
        actions.array.push(input.value)
        input.value = actions.division(actions.array[0], actions.array[1])
        actions.array.length = 0
        actions.isDivision = !actions.isDivision
      }
      else if (actions.isAdd) {
        actions.array.push(input.value)
        input.value = actions.add(actions.array[0], actions.array[1])
        actions.array.length = 0
        actions.isAdd = !actions.isAdd
      }
      else if (actions.isMult) {
        actions.array.push(input.value)
        input.value = actions.mult(actions.array[0], actions.array[1])
        actions.array.length = 0
        actions.isMult = !actions.isMult
      }
      else if (actions.isSubtraction) {
        actions.array.push(input.value)
        input.value = actions.sub(actions.array[0], actions.array[1])
        actions.array.length = 0
        actions.isSubtraction = !actions.isSubtraction
      }
    })
  }
})

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
    if (
      // actions.isDivision || actions.isAdd || actions.isMult || actions.isSubtraction && 
      // Object.values(actions).includes(true) && 
      input.value === actions.array[0]
      ) {
      // !ДОДЕЛАТЬ через метод массива
      console.log(input.value === actions.array[0])
      console.log('working1')
      orangeButtons[0].classList.remove('active')
      orangeButtons[1].classList.remove('active')
      orangeButtons[2].classList.remove('active')
      orangeButtons[3].classList.remove('active')
      orangeButtons[4].classList.remove('active')
      input.value = e.innerText
    }
    else if (
      // actions.isDivision || actions.isAdd || actions.isMult || actions.isSubtraction 
      // Object.values(actions).includes(true)
      // && 
      input.value.length > 1) {
      console.log('working2')
      input.value += e.innerText
    }
    else if (input.value == 0 || input.value == 'NaN') {
      input.value = e.innerText
      console.log('working3')

    }
    else {
      console.log('working4')
      input.value += e.innerText
    } 
    
    // input.value == 0 ? input.value = e.innerText : e.innerText == ',' ? input.value += e.innerText : input.value += e.innerText
  })
}) 


