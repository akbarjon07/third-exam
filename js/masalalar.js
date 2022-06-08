// 1-MASALA
const firstNumber= Number(prompt("x sonini kiriting"));
const secondNumber= Number(prompt("y sonini kiriting"));
const thirdNumber= Number(prompt("z sonini kiriting"));

const array = [];

array.push(firstNumber, secondNumber, thirdNumber);

const sumInput = (a, b) => a + b;
console.log(array.reduce(sumInput));


// 2-MASALA
const genreOfMusic = ["Jazz", "Blues"];

genreOfMusic.push("Rock-n-roll");

genreOfMusic[1] = "classic";

genreOfMusic.shift();

genreOfMusic.unshift("Rap", "Reggae");

console.log(genreOfMusic);


// 3-MASALA
let salaries = {
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800
}

let sum = 0;
for(let item of Object.values(salaries))
sum = sum + item

console.log(sum)


// 4-MASALA
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  let sum1=0
  let sumn=0
  for (let i = 0; i < numStr.length; i++) {
    if (i % 2 === 0){
    sum = sum + numStr[i];
    return sum

    }
    else if (i % 2 === 1){
      sum1 = sum1 + numStr[i];
      return sum1
      }
     else if (numStr.length === 0){
        sumn = null
        return sumn
        }
  }
}

console.log(sumEvens(numStr));


// 5-masala
function getMissingNo(a)
{
    let n = a.length;
    let i, total=1;

    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}

    let arr = [1, 2, 3, 5];
    let newArr=[]
let miss=getMissingNo(arr)
let myFunc = num => Number(num);

var intArr = Array.from(String(miss), myFunc);
let aa=newArr.concat(arr, intArr)
let result=aa.sort(function(a, b){return a - b});
document.write(result)