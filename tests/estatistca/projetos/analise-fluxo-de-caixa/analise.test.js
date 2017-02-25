const chai = require('chai')
const expect = chai.expect
const should = chai.should
const deviation = require('../../../../estatistica/src/desvioPadrao.js')
const mean = require('../../../../estatistica/src/media.js')
const analysis = require('../../../../estatistica/projetos/analise-fluxo-de-caixa/analise.js')


describe('Curva de Gauss', () => {
  it('should return the curve based on mean and deviation', (done) => {
    let sample = [1,5,6,7,8,9]

    let m = mean(sample)
    let d = deviation(sample, 'amostra')
    let curve = analysis.gauss(m, d)
    expect(curve).not.be.null
    expect(curve[0].maior).to.be.eql(m)
    done()
  })
})
