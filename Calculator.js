/**
 * Created by duc on 12/07/2017.
 */
const Addition = require('./Addition');
const Subtraction = require('./Subtraction');
const Devision = require('./Devision');
const Multiplycation = require('./Multiplycation');

class Calculator {
    constructor(){
        this.listOperator = new Map();
    }
    calculate(operatorName, a, b){
        try{
            return this.listOperator.get(operatorName).run(a, b);
        }catch (e){
            console.log(e + '');
            return Infinity;
        }

    }
    addOperator(operatorName,operator) {
        this.listOperator.set(operatorName, operator);
    }
}

let calculator = new Calculator();

calculator.addOperator("+",new Addition);
calculator.addOperator("-",new Subtraction);
calculator.addOperator("*",new Multiplycation);
calculator.addOperator("/",new Devision);

console.log(process.argv)
console.log(calculator.calculate(process.argv[3],parseInt(process.argv[2]), parseInt(process.argv[4])));
