
import {DolarALibra, LibraADolar, total} from './conversor.js'
import { log } from 'node:console';

async function opp(){
const dolar = parseFloat(await total('cantidad de dolares'));
const libra = parseFloat(await total('cantidad de libras'));

const resultadod= DolarALibra(dolar);
const resultadol= LibraADolar(libra);

console.log(`conversion dolares a libras: ${resultadod}`);
console.log(`conversion libras a dolares: ${resultadol}`);
}

opp();