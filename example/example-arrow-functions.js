function add(a, b) {
  return a+b;
}

console.log("Normal add: ", add(1, 2));

addStatement = (a, b) => {
  return a + b;
}

console.log("arrow-add-statement: ", addStatement(1, 3));

addExp = (a, b) => a + b;

console.log("Add expression: ", addExp(1, 3) + 1);
