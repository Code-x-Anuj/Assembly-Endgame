import React from "react"
import { clsx } from "clsx"
import {languages} from "./languages.js"
import {getFarewellText, getRandomWord } from "./utils.js" 
import Confetti from "react-confetti"
// console.log(getRandomWord())


export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = React.useState( ()=> getRandomWord())
  const [guessedLetter, setGuessedLetter] = React.useState([])
  const currectWordLettersArr = currentWord.split("");
  
  // set new word for a new game
  function setNewWord() {
    setGuessedLetter([])
    setCurrentWord(getRandomWord() )
  }
  console.log(currentWord)

  const wrongGuessedArr = guessedLetter.filter(ele => (!currentWord.includes(ele))  )
  const wrongGuessedCount = wrongGuessedArr.length
  const isGameWon = currectWordLettersArr.every((letter) => guessedLetter.includes(letter) )
  const isGameLost = wrongGuessedCount >= languages.length-1 ;
  const isGameOver = isGameWon || isGameLost
  const latestGuessedLetter = guessedLetter[(guessedLetter.length-1)]
  

  
// to display the letters of word & show answer word if game lost
  const theWordIs = currectWordLettersArr.map((letter, index) => 
    {
      const isCorrectGuessed = guessedLetter.includes(letter) || isGameLost
      return(
      <h2 key={index} className={clsx("word",{letterShowed:isGameLost && !guessedLetter.includes(letter) })} >
        {isCorrectGuessed? letter.toUpperCase() : ""}
      </h2> )
    }
  )
  // console.log(theWordIs)
  
// to set the clicked letter to guessedLetter
  function getLetter(e) {
    const letter = e.target.value
    setGuessedLetter(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]) 
  }
  // console.log(guessedLetter);
  // display keyboard & it's functionality 
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const inputKeys = alphabet.split("").map((key)=>{
    // check if letter been guessed or not
    const isGuessed = guessedLetter.includes(key) 
    // check if guessed letter is correct or not(it should be guessed =true)
    const isCorrect = isGuessed && currentWord.includes(key)
    const isWrong = isGuessed && !currentWord.includes(key)
    return(
    <button key={key} 
      className= {clsx("keys",{green: isCorrect, red: isWrong})}
      value={key} 
      onClick={getLetter} 
      disabled = {isGameOver}
      aria-label={`Letter ${key}`}
      aria-disabled = { guessedLetter.includes(key)}
    >
      {key.toUpperCase()}
    </button>
    )
  }) 
  // displaying the language
  const myLanguages = languages.map((lang, index )=> {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    const lostLangClass = clsx("chips",{lost: index < wrongGuessedCount})
    return(
      <span
        className= {lostLangClass}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })
  // console.log(myLanguages)
  // to show farewell msg for every Language eliminated
  function farewell() {
    if (guessedLetter.length >=1 ) {
      const latestGuessedLetter = guessedLetter[(guessedLetter.length-1)]
      const toShowFarewell = !currectWordLettersArr.includes(latestGuessedLetter)
      return toShowFarewell;
    }
    return false ;
  }
  
  return (
        <main>
          {
            isGameWon && <Confetti
              recycle = {false}
              numberOfPieces={1000}
            />
          }
            <header>
              <h1>Assembly: Endgame</h1>
              <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!
              </p>
            </header>

            <section className= {clsx("game-status",
                {green: isGameWon,
                red : isGameLost,
                farewell: !isGameOver && farewell()} )
              }
              aria-live="polite"
              role="status"
            >
              <h2>{isGameWon && "You win!" } 
                {isGameLost && "Game Over!"} 
                {farewell() && !isGameOver && getFarewellText(languages[wrongGuessedCount-1].name) } 
              </h2>
              <p>{isGameWon && "Well done! 🎉"}
                {isGameLost && "You lose! Better start learning Assembly 😭"} 
              </p>
            </section>

            <section className="lang-section">
              {myLanguages}
            </section>

            <section className={clsx("the-word" )}>
             {theWordIs}
            </section>
            
            {/* Combined visually-hidden aria-live region for status updates accessibilty */}
            <section
              className="sr-only"
              aria-live="polite"
              role="status"
            >
              <p>
                {currectWordLettersArr.includes(latestGuessedLetter) ? 
                  `Correct! The letter ${latestGuessedLetter} is in the word.` :
                  `Sorry, the letter ${latestGuessedLetter} is not in the word,`
                }
                You have {(languages.length-1)-wrongGuessedCount} attempts left.
              </p>
              <p>
                Current word: {
                  currectWordLettersArr.map(letter => 
                    guessedLetter.includes(letter) ? letter + "." : "blank"
                  ).join(" ")
                }
              </p>
            </section>

            <section className="keyboard">
              {inputKeys}
            </section>
            
            {isGameOver && <button onClick={()=>{setNewWord()}} className="new-game">New Game</button>}
        </main>
    )
}

