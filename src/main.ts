interface User {
  name: string;
  id: number | string;
  age?:number
}
const user1:User = {
  name: "Hayes",
  id: 0,

};
const user2:User = {
  name: "falak",
  id: 1,
  age:12
};
// console.log(user1,user2)
type nos=number | string 
type person = {
  name:string 
  id:nos,
  age?:number
}
const p1:person = {
  name:"falak",
  id:12,
}

// --------------------------------
// interface
interface per  {
     name:string
     age:number
}
interface student extends per {
  roll:number,
  id:number,
  studyAtClass:number
}

const per1:per ={
  name:'falak',
  age:123
}
const student1:student = {
      roll:1,
      id:201,
      studyAtClass:12,
      age:12,
      name:"shakib"
}

// console.log(per1,student1);



// Type example 
type Square = {
  color: string;
  sideLength: number;
};

type ColoredSquare = Square & { backgroundColor: string };
const shap1:Square = {
  color:'red',
  sideLength:43
}
const shap2:ColoredSquare = {
     color:"blue",
     sideLength:12,
     backgroundColor:'black'
}

// margin decleare  call 
// Interface example

interface User1 {
  name: string;
}

interface User1 {
  age: number;
}
const myUser: User1 = {
  name: "John",
  age: 30,
};


// Type example
// Type example
type Point = {
  x: number;
}&  {
  y: number;
};

const myPoint: Point = {
  x: 5,
  y: 10,
};

let obj2:{name:string,age:number}={
     name : 'falak',
     age: 123
}

// Function declaration with type annotation
function  display(name:string):string{
  // console.log(`${name} is a good boy`)
  return "this is a display function"
}
const funWork=display('falak');
// console.log(funWork);

const sum = (a:number,b:number):string=>{
    //  console.log('sum = ',a+b);
     return 'working with sum'
}
sum(2,3)

// Generics:
function backSameType<t>(a:t):{}|t{
 // console.log(a)
  if(false)return a
  return [1,2,3,4,56,6,78,89,2,1,1,1,1];
}

const a=backSameType({
  name:"falak",
  age:12
});
// console.log(a,typeof a);

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Alternatively:
let strLength2: number = (<string>someValue).length;



// Generic function to reverse an array
// T can be primitive type not direct object or array
// function reverse<T>(arr: T[]): T[] {
//   return arr.reverse();
// }
function reverse<a>(arr:a[]):a[]{
     return arr.reverse();
}
// Usage
let numbers: number[] = [1, 2, 3, 4, 5];
let reversedNumbers = reverse(numbers);
// console.log(reversedNumbers)
let strings: string[] = ["apple", "banana", "cherry"];
let reversedStrings = reverse(strings);
// console.log(reversedStrings);

// IN CLASS  : Generic Classes
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// Usage
let numberBox = new Box<number>(10);
// console.log(numberBox.getValue()); // Output: 10

let stringBox = new Box<string>("Hello");
// console.log(stringBox.getValue()); // Output: Hello

///////////Enumssssssssssssssss/////////////////
// Define an enum for role
enum Role {
  Admin = "admin",
  User = "user",
}
// console.log(Role);

// Define a type for user with enum role
type OurUser = {
  name: string;
  age: number;
  role: Role; // Using enum for role
}

// Function to check if a user's name can be changed
function canChangeName(user: OurUser): string {
  // Users with the Admin role can change their names
  if (user.role === Role.Admin) {
    return `${user.name} is admin.`;
  } else {
    return `${user.name} is User`;
  }
}

// Example usage
const OurUser1: OurUser = {
  name: "John",
  age: 25,
  role: Role.Admin,
};

const OurUser2: OurUser = {
  name: "Alice",
  age: 30,
  role: Role.User,
};

// console.log(canChangeName(OurUser1)); // Output: "John is admitted."
// console.log(canChangeName(OurUser2)); // Output: "Alice is not admitted."



// ===========================DOM==========================

/////////////////////getElementById//////////////////////
// const myDiv=document.getElementById("myDiv");
// console.log("myDiv => ",myDiv);
// console.log("myDiv => ",myDiv);
// console.log("myDiv => innerHTML :",myDiv?.innerHTML);
// console.log("myDiv => innerText:",myDiv?.innerText);
// console.log("myDiv => textContent",myDiv?.textContent);


// let elementsByClass = document.getElementsByClassName("oldClass");
// console.log(elementsByClass); // Output: 1

// // Selecting elements by tag name
// let elementsByTag = document.getElementsByTagName("li");
// console.log(elementsByTag); // Output: 3

// for(let i=0;i<elementsByTag.length;i++){
//      elementsByTag[i].innerText="new number "+i; 
// }

    // Selecting elements using querySelectorAll
    // var elementsByQuery = document.querySelectorAll(".paragraph");
    // console.log(elementsByQuery.length); // Output: 2



            // Modifying element content
            // const divElement : HTMLElement | null = document.getElementById("myDiv");

            // if(divElement){
            //   console.log(divElement)
            // divElement.innerText = "New Content";
         
            // // Modifying element attributes
            // divElement.setAttribute("class", "newClass amiOasi");
            // console.log(divElement)
            // }

            // var newElement = document.createElement("div");
            // newElement.innerText = "New div Element ";
            // document.body.appendChild(newElement);
    

             // Removing an element
        // let  parent1 = document.body;
        // console.log(parent1)
        // let child = document.getElementById("myDiv");
        // console.log(child)
        // {child &&  parent1.removeChild(child);}
        //  child = document.getElementById("myDiv");
        //  console.log(child);
          


         // Event handling
         
         let button=document.getElementById("clickBnt")
         console.log(button)
       {button &&  button.addEventListener("click", function() {
            //  alert("Button Clicked!");
            console.log('click')
            let cntStr =document.getElementById("cnt")?.innerText;
            console.log(cntStr)
            console.log(typeof(cntStr))
            if(typeof(cntStr)==="string"){
               let cnt=parseInt(cntStr);
               console.log(cnt);
               cnt++;
               const newCnt =String(cnt);
               console.log('new str ',newCnt);
               console.log(cnt);
               cntStr=newCnt;
               const last=document.getElementById("cnt")
               if(last){
                last.innerText=newCnt
               }
            }else{
              alert('count text not string ')
            }
           
            
        
  
            // console.log(cntStr)
         });
      }