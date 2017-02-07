module.exports =  { 
  'c': {
    name: 'Celsius',
    'f': (val) => (val * 1.8  + 32),
    'k': (val) => (val + 273.15)
  },
  'f': {
    name: 'Fahreneit',
    'c': (val) => (val  - 32) / 1.8,
    'k': (val) => (val * 1.8) - 459.67
  },
  'K': {
    name: 'Kelvin',
    'c': (val) => (val  - 273.15),
    'f': (val) => (val * 1.8) - 459.67
  },
  'cal': {
    name: 'Caloria',
    'J': (val) => (val  * 4.184),
  },
  'torr': {
    name: 'Torr',
    'atm': (val) => (val  * 0.001315785918),
  },
  'atm': {
    name: 'ATM',
    'torr': (val) => (val  / 0.001315785918),
  },
  'km/h': {
    name: 'Kilômetro por hora',
    'm/min': (val) => (val / (60/1000) ),
    'm/s': (val) => (val  / (3600/1000)),
    'cm/min': (val) => (val  / (60/100000) ),
    'cm/s': (val) => (val  / (3600/100000) ),
  }
}
