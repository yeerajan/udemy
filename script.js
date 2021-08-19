// console.log("Before if");
// let randomNum = Math.random();
// if(randomNum < 0.5){
//     console.log("Your number is less than 0.5");
    
// } else if(randomNum >= 0.5){
//     console.log("Your number is greater than (OR EQUAL) 0.5");
    
// }
// console.log(randomNum);
// console.log("After if");

// const age = parseInt(prompt("Enter age"));

// if(age < 5){
//     console.log("You are baby. You are free.")
// } else if(age < 10){
//     console.log("You are a child. You pay $10.")
// } else if(age < 65){
//     console.log("You are a adult. You pay $20.")
// } else{
//     console.log("You are a senior. You pay $10.")
// }

// let password = prompt("Please enter a new password.");

// if(password.length >= 6){
//     if(password.indexOf(' ') !== -1){
//         console.log('Password cannot include space');
//     }
//     else{
//         console.log('Password is valid.');
//     }
// }
// else{
//     console.log('Password is too short.');
// }

//let userInput = prompt("Enter something");

// if(" "){
//     console.log("TRUTHY!")
// } else{
//     console.log("FALSY!")
// }


// const day = parseInt(prompt("Enter day"));

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//     case 7:
//         console.log('Weekend');
//         break;
//     default:
//         console.log('Invalid day');
// }

// const animals = ['lions','tigers','bears'];
// for(let i=0; i<animals.length; i++){
//     console.log(i,animals[i]);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(`i is : ${i}.`);
//     for(let j = 1; j < 4; j++){
//         console.log(`    j is ${j}.`);
//     }
// }

// const seatingChart = [
//     ['rajan','raja','pankaj'],
//     ['arunesh','ashish','aakash','narayana'],
//     ['mayank','vaibhav']
// ];
// for(let i=0; i<seatingChart.length; i++){
//     let row = seatingChart[i];
//     console.log(`Row #${i+1}`)
//     for(let j=0; j<row.length; j++){
//         console.log(`    Names is ${row[j]}`);
//     }
// }

// const SECRET = "Rajan@123";
// const guess = prompt("Enter the secret");
// while(guess !== SECRET){
//     guess = prompt("Enter the secret");
// }
// console.log("CONGRATS YOU GOT THE GUESS")

// let targetSum = Math.floor(Math.random()*10);
// let guess = Math.floor(Math.random()*10);
// while(true){
//     guess = Math.floor(Math.random()*10);
//     if(guess === targetSum){
//         console.log(`Correct! Guessed: ${guess} & target was: ${targetSum}`);
//         break;
//     }
//     else{
//         console.log(`Guessed ${guess}...Incorrect!`);
//     }
// }


// Writing a guessing game

// let Maximum = parseInt(prompt("Enter a maximum value"));
// if(!Maximum){
//     Maximum = parseInt(prompt("Please enter a valid number"));
// }
// const targetNum = Math.floor(Math.random()*Maximum)+1;
// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts=1;

// while(parseInt(guess) !== targetNum){
//     if(guess ==='q') break;
//     attempts++;
//     if(guess>targetNum){
//         guess=prompt("Too high! Enter a new guess");
//     } else{
//         guess = prompt("Too low! Enter a new guess");
//     }
// }
// if(guess==='q'){
//     console.log("OK YOU QUIT!");
// } else{
//     console.log("CONGRATS YOU WIN!");
//     console.log(`You got it. It took you ${attempts} guess`);
// }


// for...of loop

// const subreddits = ['table','chair','books','pen'];
// for(let i=0; i<subreddits.length; i++){
//     console.log(`Visit www.reddit.com/r/${subreddits[i]}`);
// }
// for(let i of subreddits){
//     console.log(`Visit www.reddit.com/r/${i}`);
// }

// const seatingChart = [
//     ['rajan','raja','pankaj'],
//     ['arunesh','ashish','aakash','narayana'],
//     ['mayank','vaibhav']
// ];
// for(let row of seatingChart){
//     for(let students of row){
//         console.log(`    Names is ${students}`);
//     }
// }

// let testScores={
//     Rohit:264,
//     Virat:108,
//     Dhawan:75,
//     Jaspreet:20,
//     Rahane:120,
//     Dhoni:79,
//     Chahal:0
// };
// for(let player in testScores){
//     console.log(`${player} scored: ${testScores[player]}`);
// }
// let testScores={
//     Rohit:264,
//     Virat:108,
//     Dhawan:75,
//     Jaspreet:20,
//     Rahane:120,
//     Dhoni:79,
//     Chahal:0
// };
// let sum=0;
// let scores = Object.values(testScores);
// for(let score of scores){
//     sum+=score;
// }
// console.log(`Average score is: ${sum/scores.length}`);














