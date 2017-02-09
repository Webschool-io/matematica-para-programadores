const chai = require('chai')
const expect = chai.expect
const should = chai.shoud
const numeros = require('../../ferramentas/numeros.js')

describe('fixDecimal', () => {
  it('should throw error if not Number')

  it('should add decimals', (done) => {
    let cincoCasas = numeros.fixDecimal(5)
    expect(cincoCasas(1)).to.be === 1.0000
    done()
  })
})
