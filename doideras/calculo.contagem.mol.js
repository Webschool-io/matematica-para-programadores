const casasComTempo = Array.from({length: 23}, (k, v) => 3+v).map( (el, i) => {
  const tempo = el * el 
  return tempo
})



const qntdades = casasComTempo.map((casa, i) => (i+1)*100 )

const qntdadesPeloTempo = qntdades.map((el, i) => el*casasComTempo[i] )

console.log('qntdadesPeloTempo', qntdadesPeloTempo)

/**

mol = 6^23

6^1 = [0...9] = 10s
6^2 = [10...99]

*/