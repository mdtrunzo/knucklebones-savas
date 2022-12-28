import { useContext, useState, useEffect } from 'react'
import Spinner from './Spinner'
import DataContext from '../context/DataContext'
import { useMutation } from '@apollo/client'
import {
  SET_DICE_NUMBER,
  SET_DICE_NUMBER_EIGHT,
  SET_DICE_NUMBER_EIGHTEEN,
  SET_DICE_NUMBER_ELEVEN,
  SET_DICE_NUMBER_FIFTEEN,
  SET_DICE_NUMBER_FIVE,
  SET_DICE_NUMBER_FOUR,
  SET_DICE_NUMBER_FOURTEEN,
  SET_DICE_NUMBER_NINE,
  SET_DICE_NUMBER_SEVEN,
  SET_DICE_NUMBER_SEVENTEEN,
  SET_DICE_NUMBER_SIX,
  SET_DICE_NUMBER_SIXTEEN,
  SET_DICE_NUMBER_TEN,
  SET_DICE_NUMBER_THIRTEEN,
  SET_DICE_NUMBER_THREE,
  SET_DICE_NUMBER_TWELVE,
  SET_DICE_NUMBER_TWO,
  SWITCH_TURN,
} from '../api/Queries'
import useHooks from '../controllers'

function BoardOne() {
  const {
    loading,
    gameBoardOne,
    gameBoardTwo,
    finalArr,
    finalArrTwo,
    finalArrThree,
    diceNumber,
    playerOneTurn,
    doubleOne,
    doubleTwo,
    doubleThree,
    doubleFour,
    doubleFive,
    doubleSix,
    doubleSeven,
    doubleEight,
    doubleNine,
    tripleOne,
    tripleTwo,
    tripleThree,
    id,
    total,
    totalTwo,
    tilesOne,
    finalBoard,
  } = useContext(DataContext)

  const { useSession } = useHooks()
  const { uid } = useSession()

  const [handleMutation] = useMutation(SET_DICE_NUMBER)
  const [handleMutation2] = useMutation(SET_DICE_NUMBER_TWO)
  const [handleMutation3] = useMutation(SET_DICE_NUMBER_THREE)
  const [handleMutation4] = useMutation(SET_DICE_NUMBER_FOUR)
  const [handleMutation5] = useMutation(SET_DICE_NUMBER_FIVE)
  const [handleMutation6] = useMutation(SET_DICE_NUMBER_SIX)
  const [handleMutation7] = useMutation(SET_DICE_NUMBER_SEVEN)
  const [handleMutation8] = useMutation(SET_DICE_NUMBER_EIGHT)
  const [handleMutation9] = useMutation(SET_DICE_NUMBER_NINE)
  const [handleMutation10] = useMutation(SET_DICE_NUMBER_TEN)
  const [handleMutation11] = useMutation(SET_DICE_NUMBER_ELEVEN)
  const [handleMutation12] = useMutation(SET_DICE_NUMBER_TWELVE)
  const [handleMutation13] = useMutation(SET_DICE_NUMBER_THIRTEEN)
  const [handleMutation14] = useMutation(SET_DICE_NUMBER_FOURTEEN)
  const [handleMutation15] = useMutation(SET_DICE_NUMBER_FIFTEEN)
  const [handleMutation16] = useMutation(SET_DICE_NUMBER_SIXTEEN)
  const [handleMutation17] = useMutation(SET_DICE_NUMBER_SEVENTEEN)
  const [handleMutation18] = useMutation(SET_DICE_NUMBER_EIGHTEEN)
  const [handleSwitchTurn] = useMutation(SWITCH_TURN)
  const [none, setNone] = useState('none')

  useEffect(() => {
    if (playerOneTurn) {
      setNone('flex')
    } else {
      setNone('none')
    }
  }, [playerOneTurn])

  const handleActionLaneOne = (diceNumber, id) => {
    const filteredArr = gameBoardTwo[0].filter((dice) => dice !== diceNumber)
    const newArr = filteredArr.filter((item) => item !== 0)

    if (newArr.length === 0) {
      handleMutation10({ variables: { diceNumber: 0, id } })
      handleMutation11({ variables: { diceNumber: 0, id } })
      handleMutation12({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 1) {
      handleMutation10({ variables: { diceNumber: newArr[0], id } })
      handleMutation11({ variables: { diceNumber: 0, id } })
      handleMutation12({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 2) {
      handleMutation10({ variables: { diceNumber: newArr[0], id } })
      handleMutation11({ variables: { diceNumber: newArr[1], id } })
      handleMutation12({ variables: { diceNumber: 0, id } })
    }
  }

  const handleActionLaneTwo = (diceNumber, id) => {
    const filteredArr = gameBoardTwo[1].filter((dice) => dice !== diceNumber)
    const newArr = filteredArr.filter((item) => item !== 0)

    if (newArr.length === 0) {
      handleMutation13({ variables: { diceNumber: 0, id } })
      handleMutation14({ variables: { diceNumber: 0, id } })
      handleMutation15({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 1) {
      handleMutation13({ variables: { diceNumber: newArr[0], id } })
      handleMutation14({ variables: { diceNumber: 0, id } })
      handleMutation15({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 2) {
      handleMutation13({ variables: { diceNumber: newArr[0], id } })
      handleMutation14({ variables: { diceNumber: newArr[1], id } })
      handleMutation15({ variables: { diceNumber: 0, id } })
    }
  }

  const handleActionLaneThree = (diceNumber, id) => {
    const filteredArr = gameBoardTwo[2].filter((dice) => dice !== diceNumber)
    const newArr = filteredArr.filter((item) => item !== 0)

    if (newArr.length === 0) {
      handleMutation16({ variables: { diceNumber: 0, id } })
      handleMutation17({ variables: { diceNumber: 0, id } })
      handleMutation18({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 1) {
      handleMutation16({ variables: { diceNumber: newArr[0], id } })
      handleMutation17({ variables: { diceNumber: 0, id } })
      handleMutation18({ variables: { diceNumber: 0, id } })
    }
    if (newArr.length === 2) {
      handleMutation16({ variables: { diceNumber: newArr[0], id } })
      handleMutation17({ variables: { diceNumber: newArr[1], id } })
      handleMutation18({ variables: { diceNumber: 0, id } })
    }
  }

  //Background pattern animations
  useEffect(() => {
    const cells = { wide: 28, tall: 24 }
    const maskTransition = 1000
    const tiles = document.querySelectorAll('.p-tile')
    const mask = document.querySelector('.p-mask')
    const maskGroup = document.querySelector('.p-mask-g')
    let ratio = 0.5

    if (tilesOne.length === 0) {
      if (total > totalTwo) {
        ratio = 1
      } else if (totalTwo > total) {
        ratio = 0
      } else {
        ratio = 0.5
      }
    } else {
      let scoreMultiplier = 0
      if (totalTwo > total) {
        scoreMultiplier = 1 - total / totalTwo
      } else if (total > totalTwo) {
        scoreMultiplier = -1 + totalTwo / total
      }
      let range = (9 - tilesOne.length) * (0.5 / 9)
      ratio = 0.5 + scoreMultiplier * range
    }

    let tilesArray = [...tiles]
    let division = cells.wide * cells.tall * ratio
    let playerTurn = 'opponent'
    let flex = playerTurn === 'you' ? 'concave' : 'convex'
    tilesArray.forEach((tile, i) => {
      let rotate = tile.querySelector('.p-rotate')
      let currentRotation = parseInt(rotate.style.getPropertyValue('--r'))
      let deltaRotation = Math.floor(Math.random() * 2) * 2 - 1
      let delayOffset = Math.abs(division - i)
      let delay = 5 * delayOffset + maskTransition / 2
      window.setTimeout(() => {
        rotate.style.setProperty('--r', currentRotation + deltaRotation)
      }, delay)
    })
    let x = (Math.round(ratio * cells.wide) / cells.wide) * 100 - 50
    maskGroup.style.transform = `translateX(${x}%)`
    mask.classList.add(flex)
    window.setTimeout(() => {
      mask.classList.remove(flex)
    }, maskTransition / 2)
  }, [tilesOne, total, totalTwo])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="section-side you">
            <h4 className="sr-only" id="heading-undefined">
              {' '}
              Player's One Side of Lane
            </h4>

            <div
              className={`li-cell ${tripleOne ? 'triple' : ''} ${
                doubleOne ? 'double' : ''
              } ${doubleTwo ? 'double' : ''}`}
            >
              {gameBoardOne[0][0] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[0][0]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[0][0]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-button">
                  {finalBoard.player1 === uid && (
                    <button
                      className="button-add-die"
                      style={{ cursor: 'pointer', display: none }}
                      onClick={(e) => {
                        handleActionLaneOne(diceNumber, id)
                        handleMutation({ variables: { diceNumber, id } })
                        handleSwitchTurn({
                          variables: {
                            playerOneTurn: false,
                            playerTwoTurn: true,
                            id,
                          },
                        })
                      }}
                    >
                      <span className="sr-only">Add die to lane 1</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleOne ? 'triple' : ''} ${
                doubleOne ? 'double' : ''
              } ${doubleThree ? 'double' : ''}`}
            >
              {gameBoardOne[0][1] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[0][1]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[0][1]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[0][1] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneOne(diceNumber, id)
                          handleMutation2({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[0][0] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneOne(diceNumber, id)
                          handleMutation2({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleOne ? 'triple' : ''} ${
                doubleTwo ? 'double' : ''
              } ${doubleThree ? 'double' : ''}`}
            >
              {gameBoardOne[0][2] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[0][2]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[0][2]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[0][2] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneOne(diceNumber, id)
                          handleMutation3({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[0][1] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneOne(diceNumber, id)
                          handleMutation3({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p
              className="p-subscore"
              role="status"
              aria-labelledby="heading-lane-2,3,button,4,4,4-player-2"
            >
              <span className="sr-only">Score:</span> {finalArr}
            </p>
          </section>

          <section className="section-side you">
            <h4 className="sr-only" id="heading-undefined">
              {' '}
              Player's One Side of Lane
            </h4>

            <div
              className={`li-cell ${tripleTwo ? 'triple' : ''} ${
                doubleFour ? 'double' : ''
              } ${doubleFive ? 'double' : ''}`}
            >
              {gameBoardOne[1][0] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[1][0]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[1][0]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-button">
                  {finalBoard.player1 === uid && (
                    <button
                      className="button-add-die"
                      style={{ cursor: 'pointer', display: none }}
                      onClick={() => {
                        handleActionLaneTwo(diceNumber, id)
                        handleMutation4({ variables: { diceNumber, id } })
                        handleSwitchTurn({
                          variables: {
                            playerOneTurn: false,
                            playerTwoTurn: true,
                            id,
                          },
                        })
                      }}
                    >
                      <span className="sr-only">Add die to lane 1</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleTwo ? 'triple' : ''}${
                doubleFour ? 'double' : ''
              } ${doubleSix ? 'double' : ''} `}
            >
              {gameBoardOne[1][1] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[1][1]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[1][1]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[1][1] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneTwo(diceNumber, id)
                          handleMutation5({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[1][0] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneTwo(diceNumber, id)
                          handleMutation5({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleTwo ? 'triple' : ''} ${
                doubleFive ? 'double' : ''
              } ${doubleSix ? 'double' : ''}`}
            >
              {gameBoardOne[1][2] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[1][2]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[1][2]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[1][2] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneTwo(diceNumber, id)
                          handleMutation6({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[1][1] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneTwo(diceNumber, id)
                          handleMutation6({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p
              className="p-subscore"
              role="status"
              aria-labelledby="heading-lane-2,3,button,4,4,4-player-2"
            >
              <span className="sr-only">Score:</span> {finalArrTwo}
            </p>
          </section>

          <section className="section-side you">
            <h4 className="sr-only" id="heading-undefined">
              {' '}
              Player's One Side of Lane
            </h4>

            <div
              className={`li-cell ${tripleThree ? 'triple' : ''} ${
                doubleSeven ? 'double' : ''
              } ${doubleEight ? 'double' : ''}`}
            >
              {gameBoardOne[2][0] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[2][0]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[2][0]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-button">
                  {finalBoard.player1 === uid && (
                    <button
                      className="button-add-die"
                      style={{ cursor: 'pointer', display: none }}
                      onClick={() => {
                        handleActionLaneThree(diceNumber, id)
                        handleMutation7({ variables: { diceNumber, id } })
                        handleSwitchTurn({
                          variables: {
                            playerOneTurn: false,
                            playerTwoTurn: true,
                            id,
                          },
                        })
                      }}
                    >
                      <span className="sr-only">Add die to lane 1</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleThree ? 'triple' : ''} ${
                doubleSeven ? 'double' : ''
              } ${doubleNine ? 'double' : ''}`}
            >
              {gameBoardOne[2][1] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[2][1]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[2][1]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[2][1] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneThree(diceNumber, id)
                          handleMutation8({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[2][0] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneThree(diceNumber, id)
                          handleMutation8({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 2</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={`li-cell ${tripleThree ? 'triple' : ''} ${
                doubleEight ? 'double' : ''
              } ${doubleNine ? 'double' : ''}`}
            >
              {gameBoardOne[2][2] ? (
                <div className="cell-content cell-die">
                  <span className="sr-only">{gameBoardOne[2][2]}</span>
                  <svg
                    role="presentation"
                    viewBox="0 0 90 90"
                    width="90"
                    height="90"
                  >
                    <use href={`#symbol-die-${gameBoardOne[2][2]}`}></use>
                  </svg>
                </div>
              ) : (
                <div className="cell-content cell-die">
                  {finalBoard.player1 === uid && gameBoardOne[2][2] > 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneThree(diceNumber, id)
                          handleMutation9({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                  {finalBoard.player1 === uid && gameBoardOne[2][1] >= 1 && (
                    <div className="cell-content cell-button">
                      <button
                        className="button-add-die"
                        style={{ cursor: 'pointer', display: none }}
                        onClick={() => {
                          handleActionLaneThree(diceNumber, id)
                          handleMutation9({ variables: { diceNumber, id } })
                          handleSwitchTurn({
                            variables: {
                              playerOneTurn: false,
                              playerTwoTurn: true,
                              id,
                            },
                          })
                        }}
                      >
                        <span className="sr-only">Add die to lane 3</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p
              className="p-subscore"
              role="status"
              aria-labelledby="heading-lane-2,3,button,4,4,4-player-2"
            >
              <span className="sr-only">Score:</span> {finalArrThree}
            </p>
          </section>
        </>
      )}
    </div>
  )
}

export default BoardOne
