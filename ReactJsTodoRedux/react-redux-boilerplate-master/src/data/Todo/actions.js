export function addToLocalStorage(list) {
  return {
    type: "ADD_TO_STORAGE",
    list: list,
  }
}

export function counter(count) {
  return {
    type: "COUNT_PLUS",
    count: count,
  }
}
