import React from "react"
import { clsx } from "clsx"
import {languages} from "./languages.js"
// console.log(languages)


export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetter, setGuessedLetter] = React.useState([])
  // console.log(currentWord)
  const theWord = currentWord.split("");
  console.log(theWord)

  const theWordIs = theWord.map((letter, index) => 
  {
    const isCorrectGuessed = guessedLetter.includes(letter)
    return(
    <h2 key={index} className="word" >
      {isCorrectGuessed? letter.toUpperCase() : ""}
    </h2> )
  }
  )
  // console.log(theWordIs)
  

  function getLetter(e) {
    const letter = e.target.value
    // console.log(letter)
    
    setGuessedLetter(prevLetters => 
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]) 
  }
  console.log(guessedLetter);
    
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const inputKeys = alphabet.split("").map((key)=>{
    // check if letter been guessed or not
    const isGuessed = guessedLetter.includes(key) 
    // check if guessed letter is correct or not(it should be guessed =true)
    const isCorrect = isGuessed && currentWord.includes(key)
    const isWrong = isGuessed && !currentWord.includes(key)
    return(
    <button key={key} className= {clsx("keys",{green: isCorrect, red: isWrong})}
      value={key} onClick={getLetter} >
      {key.toUpperCase()}
    </button>
    )
  }) 

  const myLanguages = languages.map(lang => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return(
      <span
        className="chips"
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })
  // console.log(myLanguages)
  
  return (
        <main>
            <header>
              <h1>Assembly: Endgame</h1>
              <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!
              </p>
            </header>
            <section className="game-status">
              <h2>You win!</h2>
              <p>Well done! 🎉</p>
            </section>
            <section className="lang-section">
              {myLanguages}
            </section>
            <section className="the-word">
              {theWordIs}
            </section>
            <section className="keyboard">
              {inputKeys}
            </section>

            <button className="new-game">New Game</button>
        </main>
    )
}

