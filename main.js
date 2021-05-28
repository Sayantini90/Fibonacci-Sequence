function fibSequence(iterations) {

  const result = [0];
  let previous1 = 0;
  let previous2 = 1;
  // let previous = 0;

  for (let i = 0; i < iterations-1; i ++) {
    
    const ans = previous1 + previous2;
    previous2 = previous1;
    previous1 = ans;

    result.push(ans);
  }

  return result; 
}

console.log(fibSequence(10));