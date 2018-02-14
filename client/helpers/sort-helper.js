export const sortBooks = (field, order='asc') => {
  return function compareBooks(eventA, eventB) {
    let sorted = []
    order === 'asc'
    ? sorted = eventA[field].toLowerCase() > eventB[field].toLowerCase()
    : sorted = eventA[field].toLowerCase() < eventB[field].toLowerCase()
    return sorted
  }
}
