export function hasClass(el, className) {
  return el.classList.contains(className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) return
  el.classList.add(className)
}
