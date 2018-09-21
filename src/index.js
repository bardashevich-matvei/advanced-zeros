module.exports = function getZerosCount(number, base) {
  var second_base=base, result=Number.MAX_VALUE;
  var firstZeros = (base) => {
    var count = 0, i = Math.floor(number/base);
    while (i>0){
      count += i;
      i = Math.floor(i/base);
    }
    return count;
  };
  var secondZeros = (base) =>{
    var count = 0;
    while (second_base%base===0){
      second_base = second_base/base;
      count++;
    }
    return count;
  }
  for (var i = 2; i <= base; i++) { 
    if (second_base % i !== 0) continue; 
    var zeros1 = firstZeros(i), zeros2 = secondZeros(i); 
    result = Math.min(Math.floor(zeros1 / zeros2), result); 
  }
  return result;
}