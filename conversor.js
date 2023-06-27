import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
export function DolarALibra(dolar){

    return  dolar * 0.78;
 //   resultadod = dolar.toFixed(2);
   // return resultadod;
}


export function LibraADolar(libra){

  return  libra / 0.78;
    //resultadol = libra.toFixed(2);
  //  return resultadol;
}

export function total(question) {
    return new Promise((resolve) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
    });
    });
}