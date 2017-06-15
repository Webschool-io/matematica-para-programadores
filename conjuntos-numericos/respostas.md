# Respostas

**Os seguintes numeros reais são numeros irracionais ou racionais?**
**a)Math.sqrt(8)/2**
Irracional
**b)-4 * PI**
-4 * Pi não pode ser representado matematicamente em dois numeros inteiros.
**c)5,0**
5,0 pode ser representado matematicamente como 5/1 então é racional.
**d)0,325**
0,325 pode ser representado matematicamente como 325/1000.
**e)7,77777**
É racional.

**Escreva em javascript o sub-conjunto dos inteiros(Z) em que todos os valores são positivos menores de 100.**
`[...Array(99).keys()]`

**Escreva em javascript o sub-conjunto dos inteiros(Z) em que todos os valores são positivos, não nulos, multiplos de 3 e menores de 100.**
`[...Array(99).keys()].slice(1).filter(x => x % 3 == 0)`