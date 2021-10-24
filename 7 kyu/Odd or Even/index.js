function oddOrEven(array) {
  return array.reduce((acc, el) => acc + el, 0) % 2 === 0 ? 'even' : 'odd';
}
