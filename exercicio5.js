//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 
//'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora (operacao, a, b){
    if (operacao == '+'){
        return a + b
    } else if (operacao == '-'){
        return a - b
    } else if (operacao == '*'){
        return a * b
    } else if (operacao == '/'){
        return a / b
    } else {
        return ('Operação inválida')
    }
}
console.log('Resultado: ', calculadora('+' , 2 , 3))    
    