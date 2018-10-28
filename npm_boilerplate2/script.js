class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(`Hello, my name is ${name}`)
  }
}

async function doAsyncOp() {
  let val = await asyncOperation()
  return val
}

import * as math from 'lib/math.js'
import { sum, pi } from 'lib/math.js'