



// // failed attempt ===========================
// //Global variables
// //====================
// // create an array of words 
// const word = ['plumbus', "shleem", 'gazorpians', 'jerryboree', 'meeseeks', 'microverse', 'wubalubadubdub', 'poopybutthole', 'shleemypants', 'squanchy', 'unity', 'zigerions', 'dinglebop', 'grumbo', 'fleeb'];
// // choose word randomly
// let randNum = Math.floor(Math.random() * word.length);
// let chosenWord = word[randNum];
// let rightChar = [];
// let wrongChar = [];
// let blanks = [];

// //dom manip
// let underScoreDom = document.getElementsByClassName('underscore');

// //main
// //===================================
// console.log(chosenWord);
// // create underscores based on word length
// let generateUnderscore = () => {
//     for (let i = 0; i < chosenWord.length; i++) {
//         blanks.push('_');
//     }
//     return blanks;
// }

// //get users guess 
// document.addEventListener('keypress', (event) => {
//     let keyword = String.fromCharCode(event.keyCode);
//     //if user guess is right
//     if (chosenWord.indexOf(keyword) > -1) {
//         //add to rightLetter array
//         rightChar.push(keyword);
//         docblanks [0].innerHTML = blanks.join(' ');  
//         //replace underscore w/ letter 
//         blanks[chosenWord.indexOf(keyword)] = keyword;
//         //checks if word matches guess
//          if (blanks.join('') == chosenWord) {
//             alert('you win');
//         }
//     }
//     else {
//         wrongChar.push(keyword);
//     }
// }); 
// underScoreDom[0].innerHTML = generateUnderscore().join(' ');;

// // end failed attempt

//GLOBAL VARIABLES
//---------------------------------------

var doubleEntry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var words =['plumbus', "shleem", 'gazorpians', 'jerryboree', 'meeseeks', 'microverse', 'wubalubadubdub', 'poopybutthole', 'shleemypants', 'squanchy', 'unity', 'zigerions', 'dinglebop', 'grumbo', 'fleeb'];
var randomWord = "";
var wordChars = [];
var numBlanks = 0;
var blanksAndWin =[];
var wrongChars = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
function reset()
{
	
	randomWord = words[Math.floor(Math.random() * words.length)];
	wordChars = randomWord.split('');
	numBlanks = wordChars.length;
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongChars =[];
	blanksAndWin =[];
	doubleEntry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	test=false;
	startGame();
}
function startGame()
{
	
	randomWord = words[Math.floor(Math.random() * words.length)];
	wordChars = randomWord.split('');
	numBlanks = wordChars.length;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongChars =[];
	blanksAndWin =[];
	doubleEntry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	//Populate blanks
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndWin.push('_');
		document.getElementById('wordToGuess').innerHTML = blanksAndWin;
	}

	document.getElementById('wordToGuess').innerHTML = blanksAndWin.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('winCounter').innerHTML = winCount;
	document.getElementById('lossCounter').innerHTML = loseCount;
	document.getElementById('wrongGuesses').innerHTML = wrongChars;
}

function compareLetters(userKey)
{
				
				if(randomWord.indexOf(userKey) > -1)
				{ 
					for(var i = 0; i < numBlanks; i++)
					{
						if(wordChars[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndWin[i] = userKey;
							document.getElementById('wordToGuess').innerHTML = blanksAndWin.join(' ');
						}	
					}
				}
				else
				{
					wrongChars.push(userKey);
					guessesLeft--;

					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongChars;

				}
			
			
		
}
function winLose()
{
	
	if(rightGuessCounter === numBlanks)
	{
		winCount++;
		document.getElementById('winCounter').innerHTML = winCount;
		alert('You Win');
		reset();
	}
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById('lossCounter').innerHTML = loseCount;
		alert('You Lose');
		reset();
	}
}

//MAIN
//---------
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleEntry.length; i++)
	{	
		if(letterGuessed === doubleEntry[i] && test === true)
		{
			var spliceDword = doubleEntry.splice(i,1);
			
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}