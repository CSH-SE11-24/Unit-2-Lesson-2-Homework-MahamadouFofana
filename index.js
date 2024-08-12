// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let ranWord = "Computer"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let guess = prompt("Guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (ranWord.includes(guess)) {
  console.log("Good Job, That is correct!")
}
else {
  console.log("Incorrect, That isn't a correct letter!")
}

// Prompt the user to guess the word 
let wordGuess = prompt("Guess the word")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user

if (ranWord === wordGuess) {
  console.log("Congratulations, That is the word!")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter

while (attempts <= 9) {
  console.log(attempts)
  attempts++
  if (ranWord.includes(guess)) {
    console.log("Good Job, That is correct!")
  }
  else {
    console.log("Incorrect, That isn't a correct letter!")
  }
  if (ranWord === wordGuess) {
    console.log("Congratulations, That is the word! It took you " + attempts + "attempts. ")
  }

}
