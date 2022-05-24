
//Welcome H1 main heading
const mainHeadEL=document.getElementById("mainHead-el")
mainHeadEL.textContent="Welcome"

//variables
let i=0
let localstr=""
let d
let n
let t
let sum=0
//Increment button
const btnEL=document.getElementById("btn-el")
btnEL.addEventListener("click",function(){
   
    i=i+10000

    d=new Date()
    n=d.toLocaleDateString()
    t=d.toLocaleTimeString()
    mainHeadEL.textContent="Dollar : "+i + " $ " +sum
    // +n+" "+t
   

})

//list ul
let textEl=document.getElementById("text-el")
textEl.innerHTML=`<li>
                     Amount :
                  </li>`



//Save button
let saveEl=document.getElementById("savebtn-el")
saveEl.addEventListener("click",function(){

    sum=i
    sum=sum+i

    textEl.innerHTML+=`<li>
                            ${i} $ ${n} ${t} 
                        </li>`
    // localStorage.setItem("hello",i)
    // localstr=localStorage.getItem("hello")

   

    // localNum=JSON.parse(localstr)
    // localNum+=i

    // console.log(localNum)

    // console.log(typeof localstr)

})



//Clear button
const clearbtnEl=document.getElementById("clearbtn-el")
clearbtnEl.addEventListener("click",function(){
    
    mainHeadEL.textContent="Welcome "
    i=0

})

// let nameSa="sanjai";
// console.log(nameSa);
// function helpOne(todos){


//     console.log(todos+200) ;  return todos+220 +"wow"


// }
// let fineHelp=helpOne(100);
// console.log(helpOne(100))
// console.log(typeof fineHelp)


function addNumms(num1=1,num2=2){

    return num1+num2

}
 console.log(addNumms())
 console.log(typeof addNumms())


 const addNums=(num1)=>num1+100


console.log(addNums(5))
console.log(typeof addNums())