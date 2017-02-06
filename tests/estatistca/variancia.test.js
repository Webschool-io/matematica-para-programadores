const chai = require('chai')
const expect = chai.expect
const should = chai.should
const variation = require('../../estatistica/src/variancia.js')
const mean  = require('../../estatistica/src/media.js')
const sigma = require('../../estatistica/src/somatorio.js')
const arr = [5,5,5,4,6,9]

describe('Sigma function (somatorio)', () => {
	it('should sum all numbers', (done) => {
		let result = arr.reduce(sigma)
		expect(result).to.be.eql(34)
		done()
	})

	it('should accepct only numbers', (done) => {
    let arr = [5,5,5,4,6,9,'bruxao']
    let result = arr.reduce(sigma)
    expect(result).to.be.eql(34)
    done()
  })
})

describe('Xi - MEAN(X)i:', () => {
  it('expect mean of [5,5,5,4,6,9] to be 5.666666666666667', (done) => {
    let m = mean(arr)
    expect(m).to.be.equal(5.666666666666667)
    done()
  })

  it('expect Xi - MEAN(X)i of [5,5] to be [0,0]', (done) => {
    let arr = [5,5]
    let m = mean(arr)
    let result = variation.diferenca(arr, m)
    expect(result).to.be.eql([0,0])
    done()
  })
})

describe('Denominator', () => {
  it('should return n-1 for sample', (done) => {
    let result = variation.tamanho(arr.length, 'amostra')
    expect(result).to.be.eql(arr.length -1)
    done()
  })

  it('should return n for population', (done) => {
    let result = variation.tamanho(arr.length, 'população')
    expect(result).to.be.eql(arr.length)
    done()
  })

  it('should throw an error if the second argument is empity', (done) => {
    const tamanho = (arr) => variation.tamanho(arr.length)
    expect(tamanho).to.throw(Error)
    done()
  })
})

describe('Variation for sample (amostra)', () => {
  it('should be equal to 3.06667', (done) => {
    let result = variation.variancia(arr, 'amostra')
    expect(result.toFixed(5)).to.be.eql == 3.06667
    done()
  })
})

describe('Variation for population (população)', () => {})

describe('Complex numbers:', () => {
	it('should work with complex numbers')
})