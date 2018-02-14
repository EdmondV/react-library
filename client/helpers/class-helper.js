export const removeClass = (selector, id) => {
  document.querySelector(`${selector}${id}`).classList.remove('hidden')
}

export const addClass = (selector, id) => {
  document.querySelector(`${selector}${id}`).classList.add('hidden')
}
