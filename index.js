//1
function areBothSame(num1, num2){
  return num1 == num2
}
// console.log(areBothSame(5,5))
//2
function areBothEqual(num1, num2){
  return num1 === num2
}
// console.log(areBothEqual(2, 2))
//3
function areAllFourEqual(a,b,c,d){
  if (a ===b && b === c && c === d){
      return true 
  }else {
      return false
  }
}
// console.log(areAllFourEqual("2", "2", "2", "2"))

//4
function areAllFourSame(a,b,c,d){
    if (a ==b && b == c && c == d){
      return true 
  }else {
      return false
  }
}
// console.log(areAllFourSame(true, false, 1, "1"))
//5
function areAllFourSameOrEqual(a,b,c,d){
  if (a ===b && b ===c && c ===d){
      return "equal"
  }else if ( a ==b && b ==c && c ==d){
      return "same"
  }else {
      return null
  }
  
}

console.log(areAllFourSameOrEqual(true, true, 1, "1"))
