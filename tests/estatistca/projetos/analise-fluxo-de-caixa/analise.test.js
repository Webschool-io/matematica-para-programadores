const chai = require('chai')
const expect = chai.expect
const should = chai.should
const deviation = require('../../../../estatistica/src/desvioPadrao.js')
const mean = require('../../../../estatistica/src/media.js')
const analysis = require('../../../../estatistica/projetos/analise-fluxo-de-caixa/analise.js')

describe('Curva de Gauss', () => {
  it('should return the curve based on mean and deviation', (done) => {
    let sample = analysis.INFO_TREINO
    let m = mean(sample)
    let d = deviation(sample, 'amostra')
    let curve = analysis.gauss(m, d)
    expect(curve).to.not.be.null
    expect(curve[0].maior).to.be.eql(m)
    expect(curve[0].menor).to.be.eql(m)
    done()
  })
})

describe('Treino:', (treino) => {
  it('deve retornar a média.', (done) => {
    const INFO_TREINO = [5,5,5,5,5]
    const treino = analysis.aprender(INFO_TREINO)
    expect(treino).to.not.be.null
    expect(treino).to.not.be.undefined
    expect(treino).to.be.a('object')
    expect(treino.media).to.not.be.undefined
    expect(treino).to.have.property('media')
    expect(treino.media).to.be.eql(5)
    done()
  })

  it('deve retornar o desvio padrão', (done) => {
    const INFO_TREINO = [5,5,5,5,5]
    const treino = analysis.aprender(INFO_TREINO)
    expect(treino).to.not.be.null
    expect(treino).to.not.be.undefined
    expect(treino).to.be.a('object')
    expect(treino.desvio).to.not.be.undefined
    expect(treino).to.have.property('desvio')
    expect(treino.desvio).to.be.eql(0)
    done()    
  })

  it('deve retornar a curva de gauss', (done) => {
    const INFO_TREINO = [5,5,5,5,5]
    const treino = analysis.aprender(INFO_TREINO)
    expect(treino).to.not.be.null
    expect(treino).to.not.be.undefined
    expect(treino).to.be.a('object')
    expect(treino.gauss).to.not.be.undefined
    expect(treino).to.have.property('gauss')
    expect(treino.gauss).to.be.a('array')
    done()    
  })
})

describe('Análise:', () => {
    it('deve identificar uma anomalia segundo sua rigidez', (done) => {
        const INFO_TREINO = [3,5,7,4,5]
        const dados = [4,5,6,7, 19, 13]
        const result = analysis.analise(INFO_TREINO, dados)
        expect(result).to.not.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.a('array')
        // TODO: Verificar se todos os elementos do array são objetos e suas propriedades
        done()
    })
})
