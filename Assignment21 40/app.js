// Chapter#21-25

// 1. Write a program that takes two user inputs for first and last name 
// using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name. 

//         var firstname = prompt('Enter your firstname')
//         var lastname = prompt('Enter your last name')
//         var fullname = firstname + lastname
//         alert(fullname)

// 2. Write a program to take a user input about his favorite mobile phone
//  model. Find and display the length of user input in your browser 

// var fav = prompt('Enter your favourite mobile name')
// var l = fav.length
// document.write(l)

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .

// var word = 'Pakistani'
// var ind = 'n'
// for(var i = 0; i < word.length ; i++){
//         if(word[i] == ind)
//         alert(i)
// }


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. 

// var word = 'Hello World'
// var ind = word.lastIndexOf('l')
// alert(ind)

// 5. Write a program to find the character at 3rd index in the word 
// “Pakistani” and display the result in your browser. 

//         var word = 'Pakistani'
//         var char = word.charAt(3)
//         alert(char)

// 6. Repeat Q1 using string concat() method. 

// var firstname = prompt('Enter your firstname')
// var lastname = prompt('Enter your last name')
// var fullname =  firstname.concat(lastname)
// alert(fullname)

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser. 

// var word = 'Hyderabad'
// var word2 = 'Islam'
// var newWord = word.replace('Hyder' , word2)
// alert(newWord)

// 8. Write a program to replace all occurrences of “and” in the string 
// with “&” and display the result in your browser. var message = 
// “Ali and Sami are best friends. They play cricket and football 
// together.”; 

// var message = 'Ali and Sami are best friends. They play cricket and football together.' ;
// var newMessage = message.replace(/and/g , '&')
// alert(newMessage)

// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser. 

// var str = '472'
// alert(+str)
// alert(typeof(Number(str)))

// 10. Write a program that takes user input. Convert and show the input 
// in capital letters. 

// var name = prompt('Enter your name')
// var name = name.toUpperCase()
// alert(name)

// 11. Write a program that takes user input. Convert and show the input
//  in title case. 

//  var name = prompt('Enter your name')
//  var name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
//  alert(name)


// 12. Write a program that converts the variable num to string. 
// var num = 35.36 ; Remove the dot to display “3536” display in 
// your browser. 

//  var num = 35.36
//  var r = '.'
//  var num = num.toString()
//  for(i = 0; i < num.length; i++){
//         if(num.slice(i,i+1) == r){
//                 var x = num.slice(0,i)
//                 var y = num.slice(i+1)  
//                 alert(x + y)
//                 break       
//         }
//  }

// 13. Write a program to take user input and store username in a 
// variable. If the username contains any special symbol among 
// [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 

// var username = prompt('Enter your name')
// for(i = 0; i < username.length; i++){
// if(username[i] == '!' || username[i] == '@' || username[i] == '.' || username[i] == ','){
//         alert('Please Enter valid name')
//         break
// }
// }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, 
// “patties”] Write a program to enable “search by user input” 
// in an array. After searching, prompt the user whether the 
// given item is found in the list or not. Note: Perform case 
// insensitive search. Whether the user enters cookie, Cookie,
// COOKIE or coOkIE, program should inform about its 
// availability. Example: 

//         var A = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
//         var search = prompt('what do you want to search')
//         for(i = 0; i < A.length; i++){
//         if(search == A[i] || search == A[i].toUpperCase() || search == A[i].slice(0,1).toUpperCase() + A[i].slice(1).toLowerCase() || search == A[i].slice(0,2).toLowerCase() + A[i].slice(2).toUpperCase()){
//                 alert('Available')
//         }
// }

// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: a. It should 
// contain alphabets and numbers b. It should not start with a
//  number c. It must at least 6 characters long If the password 
//  does not meet above requirements, prompt the user to enter a 
//  valid password. For character codes of a-z, A-Z & 0-9, refer 
//  to ASCII table at the end of this document. 

// var cap;
// var sml;
// var num;
//  var pass = prompt('Set password')
//  for(var i = 0; i < pass.length; i++){
//          if(pass.length < 6){
//                  alert('Password must be atleast 6 word')
//                  break;
//          }
//  }
//  for(var j = 65; j < 91; j++){
//         if(String.fromCharCode(j)){
//                 cap = cap + 1;
//         }
// }
// for(var k = 97; k < 123; k++){
//         if(String.fromCharCode(k)){
//                 sml = sml + 1;
//         }
// }
// for(var l = 48; l < 58; l++){
//         if(String.fromCharCode(l)){
//                 num = num + 1;
//         }
// }
// if(cap > 0 && sml > 0 && num > 0 && pass.length > 5 && ( (pass[0]>String.fromCharCode(64) && pass[0]<String.fromCharCode(91) ) || (pass[0]>String.fromCharCode(96) && pass[0]<String.fromCharCode(123) ) ) ) {
//         alert('password reset')
// }
// else{
//         alert('Please enter valid password')
// }

// 16. Write a program to convert the following string to an array 
// using string split method. var university = “University of Karachi”;
//  Display the elements of array in your browser. 

// var university = 'University of Karachi';
// const myArr = university.split();
// for(var i = 0; i < myArr.length; i++){
//         document.write(myArr[i] + '<br>') 
// }


// 17. Write a program to display the last character of a user input. 

// var inp = prompt('Enter any word')
// var l = inp.length - 1;
// alert(inp[l])

// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in 
//  given string.

// var word = "The quick brown fox jumps over the lazy dog"
// var word2 = "The"
// var flag = 0
// for(var i = 0; i < word.length; i++){
//         if(word.slice(i,i+3) == word2 || word.slice(i,i+3) == word2.toLowerCase())
//                 flag = flag + 1
// }
// alert(flag)


// Chapter#26-30

// 1. Write a program that takes a positive integer from user & display 
// the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  

// var num = prompt('Enter positive integer')
// var numb = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write(num + '<br>')
// document.write(numb + '<br>')
// document.write(floor + '<br>')
// document.write(ceil)

// 2. Write a program that takes a negative floating point number from 
// user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value ofthe number 

// var num = prompt('Enter negative Integer')
// var numb = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write(num + '<br>')
// document.write(numb + '<br>')
// document.write(floor + '<br>')
// document.write(ceil)



// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// var num = prompt("Enter any number")
// if(num < 0){
//         var numb = num * -1
//         document.write('Absolute value of ' + num + ' is ' + numb)
// }
// else{
//         document.write('Absolute value of ' + num + ' is ' + num)
// }

// 4. Write a program that simulates a dice using random() method of 
// JS Math class. Display the value of dice in your browser.: 

// var dice = Math.random()
// dice = dice * 6        
// dice = Math.ceil(dice)
// document.write(dice)


// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your browser 

// var coin = Math.random()
// coin = coin * 2        
// coin = Math.ceil(coin)
// if(coin == 1){
//         document.write('Head')
// }
// else{
//         document.write('Tail')
// }


// 6. Write a program that shows a random number between 1 and 100 
// in your browser. 

// var num = Math.random()
// num = num * 100        
// num = Math.ceil(num)
// document.write('Number beteen 1 and 100 is : ' + num)

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. Possible 
// user inputs can be: 
// a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 

// var weight = prompt('Enter your weight in kilograms ')
// document.write('The weight of user is ' + weight + 'Kilograms')

// 8. Write a program that stores a random secret number from 1 to 10 
// in a variable. Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user. 

// var num = Math.random()
// num = num * 10
// num = Math.ceil(num)
// var numb = prompt("Enter number between 1 to 10")
// if(num == numb){
//         alert('Congratulations number mathched')
// }
// else{
//         alert('Try Again')
// }


// Chapter#31-34

// 1. Write a program that displays current date and time in your browser.

// var d = new Date()
// document.write(d)

// 2. Write a program that alerts the current month in words. 
// For example December. 

// var date = new Date()
// var arr = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
// var month = date.getMonth()
// document.write(arr[month])

// 3. Write a program that alerts the first 3 letters of the current day,
//  for example if today is Sunday then alert will show Sun. 

// var date = new Date()
// var arr = ['sun' , 'mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat']
// var day = date.getDay()
// document.write('Today is : ' + arr[day])

// 4. Write a program that displays a message “It’s Fun day” if its 
// Saturday or Sunday today. 

// var date = new Date()
// var arr = ['sun' , 'mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat']
// var day = date.getDay()
// if(day == 0 || day == 6){
//         document.write('Its Fun day')
// }

// 5. Write a program that shows the message “First fifteen days of the 
// month” if the date is less than 16th of the month else shows 
// “Last days of the month”. 

// var date = new Date()
// var d = date.getDate()
// if(d < 16){
//         document.write('First Fifteen days of the month')
// }
// else{
//         document.write('Last Fifteen days of the month')
// }

// 6. Write a program that determines the minutes since midnight, 
// Jan. 1, 1970 and assigns it to a variable that hasn't been declared 
// beforehand. Use any variable you like to represent the Date object. 

// var date = new Date()
// var mili = date.getTime()
// var min = mili/(1000*60)
// document.write(date + '<br>')
// document.write(mili + ' MilliSeconds <br>')
// document.write(min + ' Minutes ')

// 7. Write a program that tests whether it's before noon and alert 
// “Its AM” else “its PM”. 

// var date = new Date()
// var hour = date.getHours()
// if(hour > 12){
//         alert('Its A.M')
// }
// else{
//         alert('Its P.M')
// }

// 8. Write a program that creates a Date object for the last day of 
// the last month of 2020 and assigns it to variable named laterDate. 

// var laterDate = new Date('December 31, 2020')
// document.write('Laterdate : ' + laterDate)

// 9. Create a date object of the starting date of this Ramadan and 
// alert the number of days past since 1st Ramadan? Note: 1st Ramadan
//  was on June 18, 2015 

// var d = new Date()
// var date = new Date('june 18, 2015')
// var days = d.getTime() - date.getTime()
// days = days / (1000 * 60 * 60 * 24)
// days = Math.floor(days)
// document.write(days + ' Days have passed since 1st Ramzan 2015')

// 10. Write a program that displays in your browser the seconds that
//  elapsed between the reference date and the beginning of 2015. 

// var d = new Date()
// var date = new Date('2015')
// var days = d.getTime() - date.getTime()
// days = days / (1000)
// days = Math.floor(days)
// document.write(days + ' Seconds had passed since 2015')


// 11. Create a Date object for the current date and time. Extract the
//  hours, reset the date object an hour ahead and finally display the
//   date object in your browser. 

// var date = new Date()
// document.write('Current time is : ' + date)
// date.setHours(13)
// document.write('<br> 1 Hour ago it was : ' + date)

// 12. Write a program that creates a date object and show the date in
//  an alert box that is reset to 100 years back? 

// var date = new Date()
// document.write('Current date : ' + date)
// date.setFullYear(1921)
// document.write('<br>1 years ago date : ' + date)

// 13. Write a program to ask the user about his age. Calculate and 
// show his birth year in your browser. 

// var date = new Date()
// date = date.getFullYear()
// var age = prompt('Your age is ')
// document.write('Your age is ' + age)
// age = date - age
// document.write('<br>Your birth year is ' + age)

// 14. Write a program to generate your K-Electric bill in your browser.
//  All the amounts should be rounded off to 2 decimal places. Display 
//  the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) Where, 

// Net Amount Payable (within Due Date) =
//  Number of units * Charges per unit & Gross Amount Payable 
//  (after Due Date) = Net Amount + Late Payment Surcharge 

// document.write('<h1>K-Electric Bill</h1>')
// var cn = 'MUHAMMAD SHAHEER'
// var unit = 295 ;
// var charge = 16;
// var sc = 50;
// var arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// document.write('<br>Customer name : ' + cn)
// var date = new Date()
// var month = date.getMonth()
// document.write('<br>Current Month : ' + arr[month])
// document.write('<br>Number of units : ' + unit)
// document.write('<br>Charges per unit : ' + charge)
// document.write('<br>Net Amount Payable (within due date) ' + charge * unit)
// var c = charge*unit+sc
// document.write('<br>Net Amount Payable (after due date) ' + c)


// Chapter#35-38


// 1. Write a function that displays current date & time in your browser.

        // function date(d){
        //         document.write(d)
        // }      
        // var d = new Date()
        // date(d)

// 2. Write a function that takes first & last name and then it greets 
// the user using his full name. 
 
        // function name(fn , sn){
        //         document.write(fn+sn)
        // }
        // var fn = prompt('First name')
        // var sn = prompt('last name')
        // name(fn , sn)
 
// 3. Write a function that adds two numbers (input by user) and returns
//  the sum of two numbers. 

        // function sum(x,y){
        //         var s = x + y
        //         return s
        // }
        // var a = prompt('first number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // document.write('Sum is : ' + sum(a,b))


// 4. Calculator:  Write a function that takes three arguments num1, 
// num2 & operator & compute the desired operation. Return and show 
// the desired result in your browser. 
 
        // function cal(num1,num2,opr){
        //         if(opr == '*'){
        //                 var res = num1 * num2
        //                 return res
        //         }
        //         else if(opr == '/'){
        //                 var res = num1 / num2
        //                 return res
        //         }
        //         else if(opr == '+'){
        //                 var res = num1 + num2
        //                 return res
        //         }
        //         else if(opr == '-'){
        //                 var res = num1 - num2
        //                 return res
        //         }
        //         else{
        //                 document.write("Invalid operator")
        //         }
        // }
        // var a = prompt('first number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // var c = prompt('Enter operator e.g * , / + - ')
        // var result = cal(a,b,c)
        // document.write(result)

// 5. Write a function that squares its argument. 
 
        // function sqr(x){
        //         document.write('Square of ' + x + ' is ' + x*x)
        // }
        // var a = prompt('Enter any number')
        // sqr(a)

// 6. Write a function that computes factorial of a number. 

        // function fac(x){
        //         var res =  1
        //         for(var i = x; i > 1; i--){
        //                 res = res*i
                       
        //         }
        //         document.write('Factorial of ' + x + ' is ' + res)
        // }
        // var a = prompt('Enter any number')
        // fac(a)

// 7. Write a function that take start and end number as inputs & display 
// counting in your browser. 
 
        // function coun(x,y){
        //         for(var i = x; i <= y; i++){
        //                 document.write(i + '<br>')
        //         }
        // }
        // var a = prompt('Enter starting number of counting')  
        // a = +a
        // var b = prompt('Enter ending number of counting')  
        // b = +b
        // coun(a,b)
 
// 8. Write a nested function that computes hypotenuse of a right angle 
// triangle.  Hypotenuse2 = Base2 + Perpendicular2 Take base and 
// perpendicular as inputs. Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 

        // function sr(b,p){
        //         b = +b*b
        //         p = +p*p
        //         cal(b,p)
        //         function cal(b,p){
        //                 var h = b + p
        //                 h = Math.pow(h , 0.5)
        //                 document.write(h)
        //         }
        // }
        // var a = prompt('First number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // sr(a,b)
        
 
// 9. Write a function that calculates the area of a rectangle.      
// A = width * height     Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 
 
        // function rec(d,h){
        //         var a = d*h
        //         document.write(a + '<br>')
        // }
        // rec(5,2)
        // var a = 9
        // var b = 6
        // rec(a,b)

// 10. Write a JavaScript function that checks whether a passed string 
// is palindrome or not?   A palindrome is word, phrase, or sequence 
// that reads the same backward as forward, e.g., madam. 

        // function pal(s){
        //                 if(s == s.split('').reverse().join('') ){
        //                         document.write('Palindrome word')
        //                 }
                   
        //         }
        // var a = prompt('Enter any word')
        // pal(a)
 
// 11. Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word of the string in upper 
// case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 
// 'The Quick Brown Fox' 

        // function upp(s){
        //         for(var i = 0; i < s.length; i++){
        //                 var sp = charCodeAt(32)
        //                 if(s[i] == sp){
        //                         s[i+1] = s[i+1].toUpperCase()
        //                 }
        //        document.write(s[i])
        //         }
        
        // }
        // var a = prompt('Enter sentence')
        // upp(a)
 
// 12. Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string.  EXAMPLE STRING : 
// 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 
 
// 13. Write a JavaScript function that accepts two arguments, a string 
// and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample 
// arguments : 'JSResourceS.com', 'o'  
 
        // function check(s,c){
        //         var flag = 0
        //         for(var i = 0; i < s.length; i++){
        //                 if(s[i] == c){
        //                         flag = flag + 1
        //                 }
        //         }
        //         document.write(flag)
        // }
        // var s = prompt('Sentence')
        // var c = prompt('character')
        // check(s,c)
 
 
 
// 14. The Geometrizer Create 2 functions that calculate properties of a 
// circle, using the definitions here. Create a function called 
// calcCircumference: • Pass the radius to the function. • Calculate 
// the circumference based on the radius, and output "The circumference 
// is NN". Create a function called calcArea: • Pass the radius to the 
// function. • Calculate the area based on the radius, and output "The 
// area is NN". 
 
// Circumference of circle    =     2πr Area of circle       =     πr2

        // function calcCircumference(r){
        //         document.write('The circumference of a circle is ' + (2*3.142*r))
        // }
        // function calcArea(r){
        //         document.write('<br>The area is ' + (3.142*r*r))
        // }
        // var out = prompt('radius')  
        // calcCircumference(out)
        // calcArea(out)



// Chapter#38-42

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 

        // function power(a,b){
        //         var r = Math.pow(a, b)
        //         document.write(r)
        // }
        // var a = prompt('Suare of ')
        // a = +a
        // var b = prompt('power')
        // b = +b
        // power(a,b)

// 2. Any year is entered through the keyboard. Write a 
// function to determine whether the year is a leap year or not. Leap 
// years ..., 2012, 2016, 2020, … 

        // function lyear(y){
        //         if(y % 4 == 0){
        //                 document.write(y + ' is leap year')
        //         }
        //         else{
        //                 document.write(y + ' is Not a leap year')
        //         }
        // }
        // var year = prompt('Enter any year')
        // lyear(year)

// 3. If the lengths of the sides of a triangle are denoted by a, b, 
// and c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 

        // function s(a,b,c){
        //         var s = (a + b + c) / 2 
        //         area(s)
        //         function area(p){
        //                 var area = s * (s - a) * (s - b) * (s - c)
        //                 document.write('Area of a triangle is ' + area)
        //         }
        // }
        // s(2,3,3)

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these marks. 
// there should be 3 functions one is the mainFunction and other are 
// for average and percentage. Call those functions from mainFunction 
// and display result in mainFunction. 
 
        // function mainFunction(m,e,u){
        //         var sum = m + u + e
        //         document.write('Avergae marks is ' + average(sum))
        //         document.write('<br>Percentage is ' + percentage(sum))
        //         function average(sum){
        //                 var avg = sum / 3
        //                 return avg
        //         } 
        //         function percentage(sum){
        //                 var per = sum / 300 * 100
        //                 return per
        //         }
        // }
        // var math = +prompt('Marks of math')
        // var eng = +prompt('Marks of english')
        // var urdu = +prompt('Marks of urdu') 
        // mainFunction(math,eng,urdu)

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code
//  for single character as of now. 
 
        // function index(a,c){
        //         for(var i = 0; i < a.length; i++){
        //                 if(a[i] == c){
        //                         document.write('Index of ' + c + ' is ' + i)
        //                 }
        //         }
        // }
        // var a = prompt('Enter words')
        // var b = prompt('Index of')
        // index(a,b)

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 

        // function vowel(a){
        //         for(var i = 0; i < a.length; i++){
        //                 if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' || a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U'){
        //                         continue
        //                 }
        //                 document.write(a[i])
        //         }
        // }
        // var sen = prompt('Enter sentence')
        // vowel(sen)
 
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 

// “Pleases read this application and give me gratuity” Such occurrences
//  are ea, ea, ui. 
 

        // function twoVowel(a){
        //         for(var i = 0; i < a.length; i++){
        //                 if( (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' || a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U') && (a[i+1] == 'a' || a[i+1] == 'e' || a[i+1] == 'i' || a[i+1] == 'o' || a[i+1] == 'u' || a[i+1] == 'A' || a[i+1] == 'E' || a[i+1] == 'I' || a[i+1] == 'O' || a[i+1] == 'U') ){
        //                         document.write(a[i] + a[i+1] + '<br>')
        //                 }
        //         }
        // }
        // var sen = prompt('Enter sentence')
        // twoVowel(sen)


// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this distance 
// in meters, feet, inches and centimeters. 
 
        // function meter(km){
        //         var metre = km * 1000
        //         document.write(metre + ' meters <br>')
        // }
        // function inch(km){
        //         var metre = km * 1000 * 36
        //         document.write(metre + ' inches <br>')
        // }
        // function feet(km){
        //         var metre = km * 1000 * 3 
        //         document.write(metre + ' feets <br>')
        // }
        // function centimeters(km){
        //         var metre = km * 1000 * 100
        //         document.write(metre + ' centimeters <br>')
        // }
        // var km = +prompt("Enter kilometer beteen to cities ")
        // meter(km)
        // inch(km)
        // feet(km)
        // centimeters(km)

// 9. Write a program to calculate overtime pay of employees. Overtime 
// is paid at the rate of Rs. 12.00 per hour for every hour worked 
// above 40 hours. Assume that employees do not work for fractional 
// part of an hour. 

        // function salery(hour){
        //         if(hour > 40){
        //                 hour = hour - 40
        //         var overtime = hour * 12
        //         document.write('Overtime amount is RS#' + overtime)
        //         }
        // }
        // var s = +prompt('working hour')
        // salery(s)
 
// 10. A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in 
// hundreds, find the total number of currency notes of each 
// denomination the cashier will have to give to the withdrawer. 

        // function bank(amount){
        //         var hun = amount / 100
        //         hun = Math.floor(hun)
        //         var f = amount % 100
        //         var fifty = f / 50
        //         fifty = Math.floor(fifty)
        //         var t = f % 50
        //         var ten = t / 10
        //         ten = Math.floor(ten)
        //         document.write(hun + ' Hundreds notes<br>' + fifty + ' Fiftys notes <br>' + ten + ' Tens notes')

        // }
        // var cash = +prompt('Enter Amount')
        // bank(cash)