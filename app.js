/*async function myFunction()
{
    const data = await fetch("https://fakestoreapi.com/products?limit=5")
    const res = await data.json();
    console.log(res)
}
myFunction()

const numbers = [1, 2, 3, 4]
const num=numbers.reduce(function(accumulator,currentItem)
{
    return accumulator+currentItem;
});
console.log(num)

function app(...value)
{
    console.log(value)
}
app(1,2,3,4,5,6)


const arr=[1,2,3,4]
let arr1=[6,7,8, ...arr]
console.log(arr1)


const nestedArrays = [[20,30],["Code","Sweetly"],[true,"Grace"],];

const data= nestedArrays.reduce(function(accumulator,currentItem){
    return [...accumulator,...currentItem];
},[10]);
console.log(data)

setTimeout(
    function(color) {
        console.log("My best color is "+color+".");
    },
    3000,
    "white"
);

setInterval((color)=>{
    console.log("My best color is "+color+".")

},
3000,
"red"

)

const items= [{"id":1,"name":"abc","dept":"ece"},{"id":2,"name":"def","dept":"ece"}]
items.map((item)=>{
    console.log(`this is ${item.name} from ${item.dept} department`)

})


// ARRAR DESTRUCTION

const arr2 =[1,2,3,4]
let arr3=arr2
console.log(arr3)

let[n1,...n3]=["a","b","c"]
const[,...website]=[1,2,3];
console.log(website)
console.log(n1)

const [firstname="aa",lastname="bb"]=["cc"]
console.log(firstname)
console.log(lastname)


let firstName="abc"
let websitee="code"

const profile = {
    name: "def",
    dept: "ECE",
    id : 1
}
console.log(profile.name)
let{name, dept,id}=profile
console.log(name,dept,id)
*/
function isPrime(number) { 
	if (number <= 1) { 
		return false; 
	} 
	for (let i = 2; i <= Math.sqrt(number); i++) { 
		if (number % i === 0) { 
			return false; 
		} 
	} 
	return true; 
} 


console.log(isPrime(5)); 
console.log(isPrime(4)); 
console.log(isPrime(11)); 
console.log(isPrime(21));