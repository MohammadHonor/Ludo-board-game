import React from 'react'
import './diceBox.css'
export const DiceBox = () => {

  const diceRoll = () => {
    let min = 1;
    let max = 6
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className='diceBox' onClick={diceRoll}>
      <div className='inner-container'>
        🎲
      </div>
    </div>
  )
}
