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
    'f': (val) => ((val  - 273.15) * 1.8 + 32)
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
  'N': {
    name: 'Newton',
    'kgf': (val) => (val  * 0.10204081632),
  },
  'kgf': {
    name: 'Kilograma-força',
    'N': (val) => (val  * 9.8),
  },
  'km/h': {
    name: 'Kilômetro por hora',
    'm/min': (val) => (val / (60/1000) ),
    'm/s': (val) => (val  / (3600/1000)),
    'cm/min': (val) => (val  / (60/100000) ),
    'cm/s': (val) => (val  / (3600/100000) ),
  },
  'kg/m3': {
    name: 'Kilograma por metro cúbico',
    'g/l': (val) => (val  * 1),
    'g/m3': (val) => (val  * 1000),
    'g/ml': (val) => (val  * 0.001),
  },
  'm3/s': {
    name: 'Metro cúbico por segundo',
    'l/h': (val) => (val  * 3600000),
    'l/min': (val) => (val  * 60000),
    'l/s': (val) => (val  * 1000),
  },
}
