const chai = require('chai')
const expect = chai.expect
const should = chai.should
const deviation = require('../../estatistica/src/desvioPadrao.js')
const numbers = require('../../ferramentas/numeros.js')

describe('Sample standart deviation', () => {
  it('should be correct', (done) => {
    const arr = [5,5,5,4,6,9]
    let result = deviation(arr, 'amostra')
    expect(numbers.precisao(result, 5)).to.be.eql(1.75119)
    done()
  })
})

describe('Population standart deviation', () => {
  it('should be correct', (done) => {
    const arr = [5,5,5,4,6,9]
    let result = deviation(arr, 'população')
    expect(numbers.precisao(result, 5)).to.be.eql(1.59861)
    done()
  })
})
