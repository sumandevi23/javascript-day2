            // Level = 1 //

let challenge= "30 Days of Javascript"
console.log(challenge)   //  30 Days of Javascript
let stringlength = challenge.length
console.log(stringlength)  // 21
console.log(challenge.toUpperCase()) // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase())  // 30 days of javascript
console.log(challenge.substring(0,2))    // 30
console.log(challenge.slice(2,21))       // Days of Javascript
console.log(challenge.includes('script'))  // true
console.log(challenge.split(','))     // [ '30 Days of Javascript' ]
console.log(challenge.split(' '))     // [ '30', 'Days', 'of', 'Javascript' ]
console.log(challenge.replace('Javascript','python'))   // 30 Days of python
console.log(challenge.charAt('15'))    // s
console.log(challenge.charCodeAt(11))   // 74
console.log(challenge.indexOf('a'))   // 4
console.log(challenge.lastIndexOf('a'))   // 14
console.log(challenge.trim())   //30 Days of Javascript   // This is cover space both side
console.log(challenge.startsWith('30'))   // true
console.log(challenge.endsWith('Javascript'))   // true
console.log(challenge.match(/a/g))   // [ 'a', 'a', 'a' ] 
let firstPart = '30 Days of', secondPart = 'JavaScript';
console.log(firstPart.concat(secondPart));  // 30 Days ofJavaScript
console.log(challenge.repeat('2'))    // 30 Days of Javascript30 Days of Javascript



let str = 'You cannot end a sentence with because because because is a conjunction'
console.log(str.indexOf('because'))    // 31
console.log(str.lastIndexOf('because'))  // 47
console.log(str.search('because'))     // 31





let cmpy = ('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon')
console.log(cmpy.split())    // [ 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ]


                                     // Level = 2 

let quote =  "'There is no exercise better for the heart than reaching down and lifting people up.' 'by John Holmes teaches us to help one another.'"   
console.log(quote)    // 'There is no exercise better for the heart than reaching down and lifting people up.' 'by John Holmes teaches us to help one another.'

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2)  // Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.

let num1 = '10'
let num2 = 10
console.log(num1==num2) // true

// let numOne = '9.8'
// let numTwo = 10
// let numOneFloat = parseInt(numOne)
// let numTwoFloat = parseInt(numTwo)
// console.log(numOneFloat)

let a = 'python jargon'
console.log(a.match(/on/g))  // [ 'on', 'on' ]

let b = 'I hope this course is not full of jargon'
console.log(b.search('jargon'))  // 34

let c = Math.floor(Math.random()*100)+1
console.log(c)      // 70
let d = Math.floor(Math.random()* 51) + 50
console.log(d)     // 91
let e = Math.floor(Math.random()*255) +1
console.log(e)     // 180

//let string = Math.floor(Math.random() * JavaScript.length)
//console.log(string)    


console.log("1\t1\t1\t1\t1")     // 1	1	1	1	1
console.log("2\t1\t2\t4\t8")     // 2	1	2	4	8
console.log("3\t1\t3\t9\t27")    // 3	1	3	9	27
console.log("4\t1\t4\t16\t64")   // 4	1	4	16	64
console.log("5\t1\t5\t25\t125")  // 5	1	5	25	125

let p= "You cannot end a sentence with because because because is a conjunction"
console.log(p.substr(30,25))    // because because because 


                   // Level - 3 //


let text = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(text.match(/love/gi))     // [ 'Love', 'love', 'love' ]

 let number = 'You cannot end a sentence with because because because is a conjunction'
 console.log(number.match(/because/g))    // [ 'because', 'because', 'because' ]

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^A-Za-z0-9?' ']/gim,''))        // I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher? This 30DaysOfJavaScript is also the result of love of teaching

const string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryPerMonth = (string.substr(8,5))
let annual = (string.substr(41,6))
let onlineCoursePerMonth = (string.substr(66,7))

// // console.log(onlineCoursePerMonth);

let slpm=parseInt(salaryPerMonth*12)
let anl=parseInt(annual)
let onCPM=parseInt(onlineCoursePerMonth*12)
console.log(slpm+anl+onCPM);        // o/p = 250000











