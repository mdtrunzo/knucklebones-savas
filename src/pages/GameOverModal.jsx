import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import useHooks from '../controllers'

function GameOverModal() {
  const { finalBoard, handleMutation, id, total, totalTwo, setTotal, setTotalTwo } =
    useContext(DataContext)
  const [none, setNone] = useState('none')
  const { useSession } = useHooks()
  const { uid } = useSession()

  useEffect(() => {
    if (finalBoard?.isGameOver) {
      setNone('flex')
    } else {
      setNone('none')
    }
  }, [finalBoard])

  const handleStartNewGame = async () => {
    setNone('none')
    await setTotal(0)
    await setTotalTwo(0)
    await handleMutation({ variables: { id } })
  }

  return (
    <>
      {none === 'flex' && (
        <div
          className="dialog"
          id="game-over-modal"
          role="dialog"
          aria-labelledby="game-over-title"
          style={{ display: none }}
        >
          <div className="dialog-inner" id="game-over-inner">
            {total > totalTwo &&
              (finalBoard.player1 === uid ? (
                <h2 className="dialog-title" id="game-over-title">
                  You Won!
                </h2>
              ) : (
                <h2 className="dialog-title" id="game-over-title">
                  You Lost!
                </h2>
              ))}
            {total < totalTwo &&
              (finalBoard.player1 === uid ? (
                <h2 className="dialog-title" id="game-over-title">
                  You Lost!
                </h2>
              ) : (
                <h2 className="dialog-title" id="game-over-title">
                  You Won!
                </h2>
              ))}
            {total === totalTwo && (
              <h2 className="dialog-title" id="game-over-title">
                It's a tie!
              </h2>
            )}

            <p className="p-dialog-score" id="game-over-score">
            <span class="sr-only">{total}</span>
            <span class="sr-only">{totalTwo}</span>
              <span className="span-dialog-score you" id="game-over-score-you">
                {total}
              </span>
              <span> – </span>
              <span
                className="span-dialog-score opponent"
                id="game-over-score-opponent"
              >
                {totalTwo}
              </span>
            </p>
            <button
              className="dialog-button"
              id="button-new-game"
              type="button"
              onClick={handleStartNewGame}
            >
              Start a New Game
            </button>
          </div>
          <p
            className="game-over-waiting"
            id="game-over-waiting"
            style={{ display: 'none' }}
          >
            Waiting for opponent
            <svg className="spinner" viewBox="0 0 50 50" width="50" height="50">
              <use href="#symbol-spinner"></use>
            </svg>
          </p>
        </div>
      )}
    </>
  )
}

export default GameOverModal
