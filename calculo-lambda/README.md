# Calculo Lambda

Calculo lambda é um sistema formal pra representar computações baseado na definicao e aplicacao de funcoes e nele:
- Todas as funcoes sao anonimas
- Todas as funções objetos de ordem elevada, ou seja, podem ser passadas como argumentos e retornadas como funções.
- Permite a combinação de operadores e funções básiacas na geração de operadores mais complexos;
- Pode ser tipada ou não

Alonzo Church inventou o calculo lambda nos anos 30 com o intuito de formalizar a matemática através da noção de funções ao invés da teoria de conjuntos sendo uma representação equivalente á maquina de Turing porém representando computacoes através funções ao inves de maquinas e teve um impacto forte na computação por ser a forma teoria de especificar e implementar linguagens de programação baseadas em funções, aka. linguagens funcionais.

Sendo assim modelo matematico para
- Especificacao e implementacao de linguagens funcionais.
- Representacao de funções computaveis.
- Teoria da Computabilidade.
- Teoria dos tipos.
- Teoria das provas.

### Sintaxe

- O símbolo λ define uma função
- O símbolo . separa os parâmetros do resultado.
- ((MN)L) pode ser escrita MNL por ter precedencia e esquerda.
- Letras diferentes designam variaveis diferentes

Temos então:
```
  λx   .   x + 1   (a)
(head)    (body)  (outra expressao)
         expressão
```

Sendo a cabeça `λx` consistindo no lambda, definindo a função, os seus parametros formais(`x`) e o corpo a expressão `x + y`
Tal exeplo pode ser lido como "Função que recebe `x` a qual adiciona x a 1".

Considere x + y.
Ela pode ser formalizada na notação matematica casualmente atravez de funcoes de um unico paramento

`f(x) = x + y` ou
`g(y) = x + y`

Em javascript:

```javascript
const f =  x -> x + y
const g = y -> x + y
```

Exemplo:

`f(0): 0 + y`
`f(1): 1 + y`

Representacao dessas funcoes na linguagem lambda:

`f = λx.x + y`
`g = λy.x + y`


Sendo assim, `λx.x + y` é equivalenta a função identidade `f(x)=x + y`

E sua aplicação:

`(λx.x + y)(0) = 0 + y` ou
`(λx.x + y)(1) = 1 + y.`

Aplicando λx.x + y no número 0 obtemos `(λx.x + y)(0)` (também escrito como λx.x 0), que resulta na substituição de x para 0 e assim retornando 0 + y, ou y.  

Funcoes de multiplos paramentos podem ser representados em linguagem lambda como:

`h(x, y) = x + y` ou
`k(y, x) = x + y`
 
E sua aplicação:

`h = λxy.x + y` ou
`k = λyx.x + y.`

Porém essas funcoes podem ser representadas como funções que retornam outras funções como valores, ja que todo 
calculo lambda recebe apenas um único parametro.

`h = λx.(λy.(x + y))`

Em que ao aplicamos "a" temos:

```
h(a) = (λx.(λy.(x + y))(a) 
     = λy.(a + y)
```

E aplicando o par "a" e "b" temos:

```
(h(a))(b) = ((λx.(λy.(x + y))(a))(b)
          = (λy.(a + y))(b)
          = a − b
 ```

 Em javascript podemos representar a aplicação parcial de argumentos usando o curry da biblioteca *RamdaJS*:
```javascript
const h =  curry((x, y) -> x + y)
h(a)(b) // a + b
```

### Exemplo

Para exemplificar vamos definir duas funções representando True e False, em que a T retorna o seu primeiro valor e F retorna o seu segundo valor

`T ≡ λab.a   F ≡ λab.b`

Sendo aplicada parcialmente:

`T ≡ λa.λb.a`

Em javascript:

```javascript
const t = curry((a, b) => a)
const f = curry((a, b) => b)
const display = (boleano) => boleano(true, false)

display(t) //true
display(f) //false
```

Já conseguimos sinalizar se algo é verdadeiro ou falso a partir de calculo lambda apenas aplicando a função display(t) ou display(f).
No nosso exemplo, um booleano é uma função, mas como fariamos uma negação?

`NOT ≡ λx.xFT`

NOT é uma função que recebe um booleano e retorna a aplicação do booleano nos parametros F e T.

```javascript
const not = x => x(F, T)

display(not(t))
```

O AND e OR recebem dois booleanos, o AND aplica o primeiro a em b e F(função false) e o or aplica o primeiro a em t(função true) e b.

`AND ≡ λab.abF`
`OR ≡ λab.aTb.`

```javascript
const and = curry((a, b) => a(b , f))
const or = curry((a, b) => a(t, b))

display(and(t)(f)) //false
display(and(t)(t)) //true
display(or(t)(f)) //true
display(not(or(t)(f))) // false
display(not(and(t)(or(t)(f)))) //false
```

E em Scheme, o dialeto LISP criado por Guy Steele ficamos mais próximo ainda da sintaxe do cálculo lambda:

```s
(define T (lambda (a b) a))
(define F (lambda (a b) b))
(define NOT (lambda (x) (x F T)))
(define AND (lambda (b1 b2) (b1 b2 F)))
(define OR (lambda (b1 b2) (b1 T b2)))
``` 

Exemplo sensacional pego (daqui)[http://blog.caelum.com.br/comecando-com-o-calculo-lambda-e-a-programacao-funcional-de-verdade/] e transformado em JS

## Funções Computáveis

No Cálulo Lambda, diz-se que uma função F : N → N é computável se e somente se existir uma expressão-lambda f tal que:

`∀x, y ∈ N, F(x) = y ⇔ f x = β y`

β é chamada *igualdade beta*, serve para estabelecer a equivalênia entre termos de uma equação envolvendo termos lambda

λ-termo ou expressão lambda é definida de forma indutiva sobre um conjunto de identificadores {x, y, z, u, v...}, sendo esses identificadores representações de variaveis:
Sendo assim uma variável (também chamada *átomo*) é um λ-termo.

A linguagem lambda é composta de todos os λ-termos que podem ser construídos sobre um certo conjunto de identificadores e trata-se de uma linguagem om apenas dois operadores ou comandos: **aplicação de função
à argumentos (chamada de função) e abstração (definição de função).**

**Aplicação**: Função é concebida como abstração

`f(x) = a` pode ser escrito como `λa`

`g(x) = x` pode ser escrito como `λx`

**Abstração**: Uma função composta é conhecida como aplicação

`f(3)` pode ser escrito como `λa(3)`

`f(g(x))` pode ser escrito como `(λa)(λx)`


*O símbolo ≡ é usado para denotar a equivalênia sintátia de λ-termos.*

- xyz(yx) ≡ (((xy)z)(yx))
- λx.(uxy) ≡ (λx.((ux)y))
- λu.u(λx.y) ≡ (λu.(u(λx.y)))
- (λu.vuu)zy ≡ (((λu.((vu)u))z)y)
- ux(yz)(λv.vy) ≡ (((ux)(yz))(λv.(vy)))
- (λxyz.xz(yz))uvw ≡ (λx.(λy.(λz.((xz)(yz)))))u)v)w)

### Exemplos 

Dada uma função `λx.x*x*x`
dizemos que `λx.x*x*x(2) é uma aplicação dessa função que reduz em 8`

```javascript
const cube = x => x * x * x //função
cube(2) //aplicação da função para 2 a reduzindo em 8
```

### Comprimento 
O comprimento de um λ-termo M (lgh(M)) é o número total de ocorrênias de átomos em M, em que, para todo átomo a, lgh(a) = 1;
Se M ≡ x(λy.yux) então lgh(M) = 5

lgh(MN) = lgh(M) + lgh(N);
 e lgh(λx.M) = 1 + lgh(M)

## Ocorrencia

Sejam P e Q dois λ-termos. A relação P ocorre em Q (ou ainda, P está
contido em Q, Q contém P ou P é subtermo de Q) é definida de forma indutiva:
- P ocorre em P ;
- Se P oorre em M ou em N , então P ocorre em (MN);
- Se P ocorre em M ou P ≡ x então P oorre em (λx.M).

### Exemplo

No termo ((xy)(λx.(xy))) existem duas ocorrênias de (xy) e três de x.

As ocorrênias de xy em λxy.xy são λxy.xy ≡ (λx.(λy.( xy ))).

Para uma paticular ocorrênia de λx.M em P, a ocorrênia de M é chamada de escopo da ocorrênia de λx à esquerda.

P ≡ (λy.yx(λx.y(λy.z)x))vw
- O escopo do λy mais à esquerda é yx(λx.y(λy.z)x);
- O escopo do λx é y(λy.z)x;
- O escopo do λy mais à direita é z.

## Variaveis Livre e Ligadas

A ocorrênia de uma variável x em um termo P é dita:
- Ligada se ela está no escopo de um λx em P ;
- Ligada e ligadora se e somente se ela é o x em λx;
- Livre caso contrário.

- Se x tem pelo menos uma ocorrênia ligadora em P , x é chamada de variável ligada de P ;
- Se x tem pelo menos uma ocorrênia livre em P , x é chamada variável livre de P ;
- O conjunto de todas as variáveis livres de P chamado FV (P);
- Um termo que não contém variáveis livres é chamado fechado.

### Exemplo

Dada a expressão:

`(λx.x + y)(4)`

Para avalia-lá é necessário saber o valor de y, não é necessário se preocupar com o valor de x pois ele é um parametro formal da expressão. x ocorre ligado ao λx, e será substituido assim que o argumento 4 for aplicado ao argumento. Já o y, não é ligado a nada e assim fica livre na expressão.

`λx.(((ly.(λ + z) 7) + x)`

Nesse exemplo temos x e y ocorrendo ligados e z sendo livre.
Agora considere o termo:

`P ≡ (λy.yx(λx.y(λy.z)x))vw`

- Todos os quatro y são ligados;
- Os y mais à esquerda e mais à direita são ligadores;
- O x mais à esquerda é livre;
- O x central é ligado e ligador;
- O x mais à direita é ligado mas não ligador;
- z, v e w são livres.
- Logo, F V (P) = {x, z, v, w}; x, nesse caso, é uma variável ligada e também livre de P .

## Substituições

Para todo M, N, x, [N/x]M é definido como o resultado da substituição de toda ocorrênia livre de x em M por N.

- [N/x]x ≡ N ;
- [N/x]a ≡ a, para todo átomo a !≡ x;
- [N/x] (PQ) ≡ ([N/x]P[N/x]Q);
- [N/x] (λx.P) ≡ λx.P ;
- [N/x] (λy.P) ≡ λy.P , se x /∈ F V (P);
- [N/x] (λy.P) ≡ λy.[N/x]P , se x ∈ F V (P) e y /∈ F V (N);
- [N/x] (λy.P) ≡ λz.[N/x][z/y]P , se x ∈ FV(P) e y ∈ FV(N).

### Exemplo de substituicões

```
[(λy.xy)/x](λy.x(λx.x))
[(λy.(xy))/x](λy.(x(λx.x))) (Reescrita com todos os parênteses)
λy.([λy.(xy)/x](x(λx.x))) (Aplicação da regra)
λy.([λy.(xy)/x]x)([λy.(xy)/x](λx.x)) (Aplicação da regra)
λy.(λy.(xy))([λy.(xy)/x](λx.x)) (Aplicação da regra)
λy.((λy.(xy))(λx.x)) (Aplicação da regra)
λy.(λy.xy)(λx.x) (Remoção dos parênteses desnecessários)
```

### Conversão α (renomeação)

A conversão-a é o nome dado à operação de mudança de nome (consistente) de um parâmetro formal.

Seja P um termo que contém uma ocorrênia de λx.M e suponha que y /∈ FV(M).*(/∈ = Simbolo de não contem)*
A substituição de: λx.M por λy.[y/x]M é chamada de troca de variável livre, ou conversão alpha em P. Se P pode ser tranformado em Q por meio de uma série finita de conversões alpha, diz-se que P e Q são congruentes e então que P é α-conversível para Q

```
P = (λx.x + 1) 
Q = (λx.y + 1)
```

As duas abstrações são equivalentes e a conversão α-conversão nos permite mudar o nome do parâmetro formal de uma abstração lambda.
sendo denotado como:

`P ≡α Q`

```
λxy.x(xy) ≡ λx.(λy.x(xy))
          ≡ α λx.(λv.x(xv))
          ≡ α λu.(λv.u(uv))
          ≡ λuv.u(uv))
  ```

Para todos P, Q e R:

- (reflexividade) P ≡α P ;
- (transitividade) P ≡α Q, Q ≡α R ⇒ P ≡α R;
- (simetria) P ≡α Q ⇒ Q ≡α P .

### Redução β (aplicação)

A aplicação de um argumento à uma abstração lambda implica na substituição das ocorrências das variáveis correspondentes ao argumento. Sendo que funções também podem ser passadas como algumentos

Um termo da forma:

`(λx.M)N`
é chamado β-redex, e o termo correspondente: 

`[N/x]M`

é chamado o seu contrato.

Se um termo P contém uma ocorrênia de (λx.M)N e a mesma é substituída por [N/x]M , gerando P, diz-se que a ocorrênia redex em P foi contraída e que P β-contrai para P
Denotado:

`P ⊲1β P`


#### Exemplo de Redução β

`λx.y.((λx.x - 3)(y) + x)(5)(6)`
`λy.((λx.x - 3)(y) + 5)(6)`
`((λx.x - 3)(6) + 5)`
`((6 - 3) + 5)`
`8`
 
Observe que o x mais interno não foi substituido na primeira redução, pois estava protegido pelo seu x ligado, já o primeiro x substituiu por 6 apenas seu x ligado.


`(λx.x(xy))N ⊲1β N(Ny)`

`(λx.y)N ⊲1β y`

```
(λx.xxy)(λx.xxy) ⊲1β (λx.xxy)(λx.xxy)y
                ⊲1β (λx.xxy)(λx.xxy)yy
                ⊲1β (λx.xxy)(λx.xxy)yyy
                ⊲1β (λx.xxy)(λx.xxy)yyyy
                etc.
```

## Forma Normal 

- Um termo Q que não possui nenhuma redução-β é chamado de forma normal-β ;
- Se um termo P reduz-β para um termo Q na forma normal-β , então diz-se que Q é uma formal normal-β de P.

### Resumo até agora

**Expressão lambda**: Representa um programa, um algoritmo, um proedimento para produzir um resultado;

**Redução-β**: Representa uma computação, a passagem de um estado de um
programa para o estado seguinte, dentro do processo de geração de
um resultado.

**Forma normal:** Representa um resultado de uma omputação, um valor que não é
passível de novas simplificações ou elaborações.


Baseado no conteudo do [Marcus Ramos (UNIVASF)](http://www.marcusramos.com.br/univasf/tc-2016-2/slides-5.pdf)
e nesses [slides](http://www.inf.ufsc.br/~j.barreto/PF/CalLambda.htm)
