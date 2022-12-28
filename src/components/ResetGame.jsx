import { useContext } from 'react'
import DataContext from '../context/DataContext'

function ResetGame() {
  const { handleMutation, id } = useContext(DataContext)

  return (
    <div className="reset-game">
      <div
        className="reset-game-button"
        onClick={() => handleMutation({ variables: { id } })}
      >
        RESET GAME
      </div>
    </div>
  )
}

export default ResetGame
