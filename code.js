//change all function into arrow function
const code = Deno.readTextFileSync("./input.js");
const regExpForFun = /\s*function\s*(\w+)\s*(\((\w*)\))/g;
const regExpForvarFun = /const\s*(\w+)\s*=\s*function.*\s*(\((\w*)\))/g;
const regExps = [regExpForFun, regExpForvarFun];
const format = "\nconst $1 = $2 => ";

const arrowFun = regExps.reduce(
  (arrowFun, regExp) => arrowFun.replace(regExp, format),
  code,
);

Deno.writeTextFileSync("./input.js", arrowFun);
