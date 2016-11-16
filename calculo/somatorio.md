# Somatório

Vamos considerar a seguinte soma:

```
1³ + 2³ + 3³ + 4³ + 5³ + 6³ + 7³ + 8³ + 9³ + 10³ 
```

Uma forma abreviada de escrever esta soma é utilizando o símbolo [Sigma](https://pt.wikipedia.org/wiki/%CE%A3), que compõe o operador matemático denominado Somatório. 

![](http://turing.com.br/material/funcional_py/_images/soma-cubo.png)

"x = 1" e 10 são os limites inferior e superior, respectivamente, e "x³" é a expressão. Lemos "somatório de x = 1 até 10 de x ao cubo". Vocês notaram que o somatório nada mais é que um laço for? Possui uma variável que inicia em um número e vai até um outro número e executa uma instrução a cada repetição.

Legal, mas como a gente pode trazer isso pra mais próximo de nós?

```
for(x=1;x<=10;x++){
    soma += x**3;
}
```
Esse laço inicia em 1 e repete até que "x" seja igual a 10, atribuindo à variável "soma" o cubo de "x" a cada repetição. 

Caso queira testar online, você pode usar o [repl.it](https://repl.it/languages/babel), basta colar o código e mandar executar clicando em "run".


### Material para estudo

- [Somatórios: propriedades e exercícios](http://wwmat.mat.fc.ul.pt/aninf/2003_2/aninf2/notas/somatorios/)