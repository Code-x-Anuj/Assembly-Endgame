import React from "react"
import {languages} from "./languages.js"
// console.log(languages)


export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = React.useState("react")
  console.log(currentWord)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const inputKeys = alphabet.toUpperCase().split("").map((key)=>{
    return(
    <button key={key} className="keys">
      {key}
    </button>
    )
  }) 

  const theWord = currentWord.toUpperCase().split("");
  console.log(theWord)
  const theWordIs = theWord.map((letter, index) => 
  {
    return(
    <h2 key={index} className="word" >
      {letter}
    </h2> )
  }
  )
  console.log(theWordIs)

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
        </main>
    )
}

