/**
 * Created by duc on 12/07/2017.
 */
class Devision {
    run(a, b){
        if(b === 0)  throw new Error('Devide by Zero');
        return a / b;
    }
}
module.exports = Devision;
