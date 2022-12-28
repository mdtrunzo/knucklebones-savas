import { useContext, useEffect, useRef } from 'react'
import DataContext from '../context/DataContext'
import useHooks from '../controllers'

function Turn() {
  const {
    diceNumber,
    generateNumber,
    playerOneTurn,
    finalBoard,
    playerTwoTurn,
  } = useContext(DataContext)
  const ref = useRef()
  const { useSession } = useHooks()
  const { uid } = useSession()

  useEffect(() => {
    if (finalBoard.player1 === uid && playerOneTurn) {
      generateNumber()
    } else if (finalBoard.player2 === uid && playerTwoTurn) {
      generateNumber()
    }
    // eslint-disable-next-line
  }, [playerOneTurn, playerTwoTurn])

  // Animations
  useEffect(() => {
    if (ref) {
      setTimeout(() => {
        ref.current?.classList.remove('out')
      }, 300)
    }
  })

  return (
    <section className="section-current-turn">
      <h2 className="sr-only">Current Turn</h2>
      <div className="div-current-turn" role="alert">
        {diceNumber &&
          ((finalBoard.player1 === uid && playerOneTurn) ||
            (finalBoard.player2 === uid && playerTwoTurn)) && (
            <p
              className={`${
                playerOneTurn ? 'you' : 'opponent'
              } p-current-turn out`}
              ref={ref}
            >
              <span className="span-whose-turn">Your Turn.</span>
              <span className="current-roll">
                You rolled a{' '}
                <span
                  className={`current-roll-value ${
                    playerOneTurn ? 'you' : 'opponent'
                  }`}
                >
                  {diceNumber}
                </span>
                .
              </span>
              <svg
                role="presentation"
                viewBox="0 0 90 90"
                width="90"
                height="90"
              >
                <use
                  className="use-die opponent"
                  href={`#symbol-die-${diceNumber}`}
                ></use>
              </svg>
            </p>
          )}

        {diceNumber &&
          ((finalBoard.player1 === uid && !playerOneTurn) ||
            (finalBoard.player2 === uid && !playerTwoTurn)) && (
            <p
              className={`p-current-turn ${
                finalBoard.player1 === uid && !playerOneTurn
                  ? 'opponent'
                  : 'you'
              } out`}
              ref={ref}
            >
              <span className="span-whose-turn">{`Player's ${
                finalBoard.player1 === uid && !playerOneTurn ? 'Two' : 'One'
              } Turn.`}</span>
              <span className="current-roll">
                They've rolled a{' '}
                <span
                  className={`current-roll-value ${
                    finalBoard.player1 === uid && !playerOneTurn
                      ? 'opponent'
                      : 'you'
                  }`}
                >
                  {diceNumber}
                </span>
                .
              </span>
              <svg
                role="presentation"
                viewBox="0 0 90 90"
                width="90"
                height="90"
              >
                <use
                  className="use-die opponent"
                  href={`#symbol-die-${diceNumber}`}
                ></use>
              </svg>
            </p>
          )}
      </div>
    </section>
  )
}

export default Turn
