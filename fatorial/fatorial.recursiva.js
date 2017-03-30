
module.exports = () => {
  const fat = (x) => (!x) ? 1 : x*fat(x-1)
  return fat
}

