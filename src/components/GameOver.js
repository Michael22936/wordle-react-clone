import React, { useContext } from 'react'

function GameOver() {

    const {gameOver, setGameOver} = useContext();

  return (
    <div className='gameOver'>
        <h3></h3>
    </div>
  )
}

export default GameOver