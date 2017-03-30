module.exports =  { 
  'c': {
    'f': (val) => (val * 1.8  + 32),
    'k': (val) => (val + 273.15)
  },
  'f': {
    'c': (val) => (val  - 32) / 1.8,
    'k': (val) => (val * 1.8) - 459.67
  },
  'k': {
    'c': (val) => (val  - 273.15),
    'f': (val) => (val * 1.8) - 459.67
  }
}