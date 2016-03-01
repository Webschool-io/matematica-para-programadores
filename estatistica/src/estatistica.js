function padrao(valor) {
  return (li,i,N,Fant,fmd,h) => {
    return li+((i*(N/valor)-Fant)/fmd)*h;
  }
}

var quartis = padrao(4);
var resultado = quartis(745,3,96,56,17,55)
