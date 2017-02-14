const chai = require('chai')
const expect = chai.expect
const should = chai.shoud
const number = require('../../ferramentas/numeros.js')
const cincoCasas = number.fixDecimal(5)

describe('fixDecimal', () => {
  it('should add decimals for print porpouse', (done) => {
    expect(cincoCasas(1)).to.be === '1.0000'
    done()
  })
})

describe('precision', () => {
  it('should return a Number', (done) => {
    let n = number.precisao(1, 5)
    expect(n).to.be.a('number')
    done()
  })

  it('should set precision to 5', (done) => {
    let n = number.precisao(1, 5)
    expect(n).to.be.eql(1.0000)
    done()
  })

  describe('isNumber', () => {
    it('should verify if is a number', (done) => {
      let n = Number(5)
      let s = 'string'
      expect(number.isNumber(n)).to.be.true
      expect(number.isNumber(s)).to.be.false
      done()
    })
  })
})
