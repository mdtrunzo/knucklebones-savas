import { createContext, useEffect, useState } from 'react'
import { useSubscription, useMutation } from '@apollo/client'
import {
  GET_GAME,
  RESET_GAME,
  SET_GAME_OVER,
  SET_ROLLED_NUMBER
} from '../api/Queries'
import { useParams } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const { id } = useParams()
  const { loading, data } = useSubscription(GET_GAME)
  const [diceNumber, setDiceNumber] = useState('')
  const [gameBoardOne, setGameBoardOne] = useState([[],[],[]])
  const [gameBoardTwo, setGameBoardTwo] = useState([[],[],[]])
  const [finalBoard, setFinalBoard] = useState('')
  const [finalArr, setFinalArr] = useState([])
  const [finalArrTwo, setFinalArrTwo] = useState([])
  const [finalArrThree, setFinalArrThree] = useState([])
  const [finalArrFour, setFinalArrFour] = useState([])
  const [finalArrFive, setFinalArrFive] = useState([])
  const [finalArrSix, setFinalArrSix] = useState([])
  const [total, setTotal] = useState('')
  const [totalTwo, setTotalTwo] = useState('')
  const [playerOneTurn, setPlayerOneTurn] = useState('')
  const [playerTwoTurn, setPlayerTwoTurn] = useState('')
  const [none, setNone] = useState('none')
  const [doubleOne, setDoubleOne] = useState('')
  const [doubleTwo, setDoubleTwo] = useState('')
  const [doubleThree, setDoubleThree] = useState('')
  const [doubleFour, setDoubleFour] = useState('')
  const [doubleFive, setDoubleFive] = useState('')
  const [doubleSix, setDoubleSix] = useState('')
  const [doubleSeven, setDoubleSeven] = useState('')
  const [doubleEight, setDoubleEight] = useState('')
  const [doubleNine, setDoubleNine] = useState('')
  const [doubleTen, setDoubleTen] = useState('')
  const [doubleEleven, setDoubleEleven] = useState('')
  const [doubleTwelve, setDoubleTwelve] = useState('')
  const [doubleThirteen, setDoubleThirteen] = useState('')
  const [doubleFourteen, setDoubleFourteen] = useState('')
  const [doubleFifteen, setDoubleFifteen] = useState('')
  const [doubleSixteen, setDoubleSixteen] = useState('')
  const [doubleSeventeen, setDoubleSeventeen] = useState('')
  const [doubleEighteen, setDoubleEighteen] = useState('')
  const [tripleOne, setTripleOne] = useState('')
  const [tripleTwo, setTripleTwo] = useState('')
  const [tripleThree, setTripleThree] = useState('')
  const [tripleFour, setTripleFour] = useState('')
  const [tripleFive, setTripleFive] = useState('')
  const [tripleSix, setTripleSix] = useState('')
  const [tilesOne, setTilesOne] = useState('')
  const [tilesTwo, setTilesTwo] = useState('')

  const [handleMutation, { loading: loadingReset }] = useMutation(RESET_GAME)
  const [handleGameOver] = useMutation(SET_GAME_OVER)
  const [handleRolledNumber] = useMutation(SET_ROLLED_NUMBER)

  //Background change
  useEffect(() => {
    document.querySelector('body').classList.remove('homepage')
    document.querySelector('body').classList.add('game')
  }, [])

  //Generate random dice number
  const generateNumber = () => {
    const getRandomNumber = () => {
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      if (randomNumber === diceNumber) {
        return getRandomNumber()
      }
      return randomNumber
    } 
    const number = getRandomNumber()
    handleRolledNumber({variables:{ id, number }})
  }

  //Set board arrays for the game
  useEffect(() => {
    // Get the gameboard from DB matching the ID from Params
    if (data) {
      const finalBoard = data?.game.find((item) => item.id === id)
      //Set board from DB
      const one = [
        [
          finalBoard?.player1_tile1,
          finalBoard?.player1_tile2,
          finalBoard?.player1_tile3,
        ],
        [
          finalBoard?.player1_tile4,
          finalBoard?.player1_tile5,
          finalBoard?.player1_tile6,
        ],
        [
          finalBoard?.player1_tile7,
          finalBoard?.player1_tile8,
          finalBoard?.player1_tile9,
        ],
      ]

      const two = [
        [
          finalBoard?.player2_tile1,
          finalBoard?.player2_tile2,
          finalBoard?.player2_tile3,
        ],
        [
          finalBoard?.player2_tile4,
          finalBoard?.player2_tile5,
          finalBoard?.player2_tile6,
        ],
        [
          finalBoard?.player2_tile7,
          finalBoard?.player2_tile8,
          finalBoard?.player2_tile9,
        ],
      ]

      setPlayerOneTurn(finalBoard?.playerOneTurn)
      setPlayerTwoTurn(finalBoard?.playerTwoTurn)
      setGameBoardOne(one)
      setGameBoardTwo(two)
      setDiceNumber(finalBoard?.rolled_number)
      setFinalBoard(finalBoard)
    }
  }, [data, id])

  //Game Logic
  useEffect(() => {
    if (finalBoard && !finalBoard.isGameOver) {
      //Array 1 Gameboard1
      if (gameBoardOne[0][0] === gameBoardOne[0][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[0][0] + gameBoardOne[0][1]) * 2
        newSum = result + gameBoardOne[0][2]

        if (gameBoardOne[0][0] !== 0 && gameBoardOne[0][1] !== 0) {
          setDoubleOne(true)
        } else {
          setDoubleOne(false)
        }

        setFinalArr(newSum)
      }
      if (gameBoardOne[0][0] === gameBoardOne[0][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[0][0] + gameBoardOne[0][2]) * 2
        newSum = result + gameBoardOne[0][1]

        if (gameBoardOne[0][0] !== 0 && gameBoardOne[0][2] !== 0) {
          setDoubleTwo(true)
        } else {
          setDoubleTwo(false)
        }

        setFinalArr(newSum)
      }
      if (gameBoardOne[0][1] === gameBoardOne[0][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[0][1] + gameBoardOne[0][2]) * 2
        newSum = result + gameBoardOne[0][0]

        if (gameBoardOne[0][1] !== 0 && gameBoardOne[0][2] !== 0) {
          setDoubleThree(true)
        } else {
          setDoubleThree(false)
        }

        setFinalArr(newSum)
      }
      if (
        gameBoardOne[0][0] === gameBoardOne[0][1] &&
        gameBoardOne[0][0] === gameBoardOne[0][2]
      ) {
        let result = 0
        result =
          (gameBoardOne[0][0] + gameBoardOne[0][1] + gameBoardOne[0][2]) * 3

        const notZero = gameBoardOne[0]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardOne[0]?.every((item) => {
          return item === gameBoardOne[0][0]
        })

        if (checkTriple && !notZero) {
          setTripleOne('triple')
        } else {
          setTripleOne('')
        }

        setFinalArr(result)
      }
      if (
        gameBoardOne[0][0] !== gameBoardOne[0][1] &&
        gameBoardOne[0][0] !== gameBoardOne[0][2] &&
        gameBoardOne[0][1] !== gameBoardOne[0][2]
      ) {
        setFinalArr(gameBoardOne[0].reduce((a, b) => a + b))
      }

      //Array 2 gameBoardTwo
      if (gameBoardOne[1][0] === gameBoardOne[1][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[1][0] + gameBoardOne[1][1]) * 2
        newSum = result + gameBoardOne[1][2]

        if (gameBoardOne[1][0] !== 0 && gameBoardOne[1][1] !== 0) {
          setDoubleFour(true)
        } else {
          setDoubleFour(false)
        }

        setFinalArrTwo(newSum)
      }
      if (gameBoardOne[1][0] === gameBoardOne[1][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[1][0] + gameBoardOne[1][2]) * 2
        newSum = result + gameBoardOne[1][1]

        if (gameBoardOne[1][0] !== 0 && gameBoardOne[1][2] !== 0) {
          setDoubleFive(true)
        } else {
          setDoubleFive(false)
        }

        setFinalArrTwo(newSum)
      }
      if (gameBoardOne[1][1] === gameBoardOne[1][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[1][1] + gameBoardOne[1][2]) * 2
        newSum = result + gameBoardOne[1][0]

        if (gameBoardOne[1][1] !== 0 && gameBoardOne[1][2] !== 0) {
          setDoubleSix(true)
        } else {
          setDoubleSix(false)
        }

        setFinalArrTwo(newSum)
      }
      if (
        gameBoardOne[1][0] === gameBoardOne[1][1] &&
        gameBoardOne[1][0] === gameBoardOne[1][2]
      ) {
        let result = 0
        result =
          (gameBoardOne[1][0] + gameBoardOne[1][1] + gameBoardOne[1][2]) * 3

        const notZero = gameBoardOne[1]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardOne[1]?.every((item) => {
          return item === gameBoardOne[1][0]
        })

        if (checkTriple && !notZero) {
          setTripleTwo('triple')
        } else {
          setTripleTwo('')
        }

        setFinalArrTwo(result)
      }
      if (
        gameBoardOne[1][0] !== gameBoardOne[1][1] &&
        gameBoardOne[1][0] !== gameBoardOne[1][2] &&
        gameBoardOne[1][1] !== gameBoardOne[1][2]
      ) {
        setFinalArrTwo(gameBoardOne[1].reduce((a, b) => a + b))
      }

      // Array 3 Gameboard3
      if (gameBoardOne[2][0] === gameBoardOne[2][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[2][0] + gameBoardOne[2][1]) * 2
        newSum = result + gameBoardOne[2][2]

        if (gameBoardOne[2][0] !== 0 && gameBoardOne[2][1] !== 0) {
          setDoubleSeven(true)
        } else {
          setDoubleSeven(false)
        }

        setFinalArrThree(newSum)
      }
      if (gameBoardOne[2][0] === gameBoardOne[2][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[2][0] + gameBoardOne[2][2]) * 2
        newSum = result + gameBoardOne[2][1]

        if (gameBoardOne[2][0] !== 0 && gameBoardOne[2][2] !== 0) {
          setDoubleEight(true)
        } else {
          setDoubleEight(false)
        }

        setFinalArrThree(newSum)
      }
      if (gameBoardOne[2][1] === gameBoardOne[2][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardOne[2][1] + gameBoardOne[2][2]) * 2
        newSum = result + gameBoardOne[2][0]

        if (gameBoardOne[2][1] !== 0 && gameBoardOne[2][2] !== 0) {
          setDoubleNine(true)
        } else {
          setDoubleNine(false)
        }

        setFinalArrThree(newSum)
      }
      if (
        gameBoardOne[2][0] === gameBoardOne[2][1] &&
        gameBoardOne[2][0] === gameBoardOne[2][2]
      ) {
        let result = 0
        result =
          (gameBoardOne[2][0] + gameBoardOne[2][1] + gameBoardOne[2][2]) * 3

        const notZero = gameBoardOne[2]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardOne[2]?.every((item) => {
          return item === gameBoardOne[2][0]
        })

        if (checkTriple && !notZero) {
          setTripleThree('triple')
        } else {
          setTripleThree('')
        }

        setFinalArrThree(result)
      }
      if (
        gameBoardOne[2][0] !== gameBoardOne[2][1] &&
        gameBoardOne[2][0] !== gameBoardOne[2][2] &&
        gameBoardOne[2][1] !== gameBoardOne[2][2]
      ) {
        setFinalArrThree(gameBoardOne[2].reduce((a, b) => a + b))
      }

      if (finalArr || finalArrTwo || finalArrThree) {
        setTotal(finalArr + finalArrTwo + finalArrThree)
      }

      //Board 2
      // Array 1
      if (gameBoardTwo[0][0] === gameBoardTwo[0][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[0][0] + gameBoardTwo[0][1]) * 2
        newSum = result + gameBoardTwo[0][2]

        if (gameBoardTwo[0][0] !== 0 && gameBoardTwo[0][1] !== 0) {
          setDoubleTen(true)
        } else {
          setDoubleTen(false)
        }

        setFinalArrFour(newSum)
      }
      if (gameBoardTwo[0][0] === gameBoardTwo[0][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[0][0] + gameBoardTwo[0][2]) * 2
        newSum = result + gameBoardTwo[0][1]

        if (gameBoardTwo[0][0] !== 0 && gameBoardTwo[0][2] !== 0) {
          setDoubleEleven(true)
        } else {
          setDoubleEleven(false)
        }

        setFinalArrFour(newSum)
      }
      if (gameBoardTwo[0][1] === gameBoardTwo[0][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[0][1] + gameBoardTwo[0][2]) * 2
        newSum = result + gameBoardTwo[0][0]

        if (gameBoardTwo[0][1] !== 0 && gameBoardTwo[0][2] !== 0) {
          setDoubleTwelve(true)
        } else {
          setDoubleTwelve(false)
        }

        setFinalArrFour(newSum)
      }
      if (
        gameBoardTwo[0][0] === gameBoardTwo[0][1] &&
        gameBoardTwo[0][0] === gameBoardTwo[0][2]
      ) {
        let result = 0
        result =
          (gameBoardTwo[0][0] + gameBoardTwo[0][1] + gameBoardTwo[0][2]) * 3

        const notZero = gameBoardTwo[0]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardTwo[0]?.every((item) => {
          return item === gameBoardTwo[0][0]
        })

        if (checkTriple && !notZero) {
          setTripleFour('triple')
        } else {
          setTripleFour('')
        }

        setFinalArrFour(result)
      }
      if (
        gameBoardTwo[0][0] !== gameBoardTwo[0][1] &&
        gameBoardTwo[0][0] !== gameBoardTwo[0][2] &&
        gameBoardTwo[0][1] !== gameBoardTwo[0][2]
      ) {
        setFinalArrFour(gameBoardTwo[0].reduce((a, b) => a + b))
      }

      // Array 2
      if (gameBoardTwo[1][0] === gameBoardTwo[1][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[1][0] + gameBoardTwo[1][1]) * 2
        newSum = result + gameBoardTwo[1][2]

        if (gameBoardTwo[1][0] !== 0 && gameBoardTwo[1][1] !== 0) {
          setDoubleThirteen(true)
        } else {
          setDoubleThirteen(false)
        }

        setFinalArrFive(newSum)
      }
      if (gameBoardTwo[1][0] === gameBoardTwo[1][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[1][0] + gameBoardTwo[1][2]) * 2
        newSum = result + gameBoardTwo[1][1]

        if (gameBoardTwo[1][0] !== 0 && gameBoardTwo[1][2] !== 0) {
          setDoubleFourteen(true)
        } else {
          setDoubleFourteen(false)
        }

        setFinalArrFive(newSum)
      }
      if (gameBoardTwo[1][1] === gameBoardTwo[1][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[1][1] + gameBoardTwo[1][2]) * 2
        newSum = result + gameBoardTwo[1][0]

        if (gameBoardTwo[1][1] !== 0 && gameBoardTwo[1][2] !== 0) {
          setDoubleFifteen(true)
        } else {
          setDoubleFifteen(false)
        }

        setFinalArrFive(newSum)
      }
      if (
        gameBoardTwo[1][0] === gameBoardTwo[1][1] &&
        gameBoardTwo[1][0] === gameBoardTwo[1][2]
      ) {
        let result = 0
        result =
          (gameBoardTwo[1][0] + gameBoardTwo[1][1] + gameBoardTwo[1][2]) * 3

        const notZero = gameBoardTwo[1]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardTwo[1]?.every((item) => {
          return item === gameBoardTwo[1][0]
        })

        if (checkTriple && !notZero) {
          setTripleFive('triple')
        } else {
          setTripleFive('')
        }

        setFinalArrFive(result)
      }
      if (
        gameBoardTwo[1][0] !== gameBoardTwo[1][1] &&
        gameBoardTwo[1][0] !== gameBoardTwo[1][2] &&
        gameBoardTwo[1][1] !== gameBoardTwo[1][2]
      ) {
        setFinalArrFive(gameBoardTwo[1].reduce((a, b) => a + b))
      }

      // Array 3
      if (gameBoardTwo[2][0] === gameBoardTwo[2][1]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[2][0] + gameBoardTwo[2][1]) * 2
        newSum = result + gameBoardTwo[2][2]

        if (gameBoardTwo[2][0] !== 0 && gameBoardTwo[2][1] !== 0) {
          setDoubleSixteen(true)
        } else {
          setDoubleSixteen(false)
        }

        setFinalArrSix(newSum)
      }
      if (gameBoardTwo[2][0] === gameBoardTwo[2][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[2][0] + gameBoardTwo[2][2]) * 2
        newSum = result + gameBoardTwo[2][1]

        if (gameBoardTwo[2][0] !== 0 && gameBoardTwo[2][2] !== 0) {
          setDoubleSeventeen(true)
        } else {
          setDoubleSeventeen(false)
        }

        setFinalArrSix(newSum)
      }
      if (gameBoardTwo[2][1] === gameBoardTwo[2][2]) {
        let result = 0
        let newSum = 0
        result = (gameBoardTwo[2][1] + gameBoardTwo[2][2]) * 2
        newSum = result + gameBoardTwo[2][0]

        if (gameBoardTwo[2][1] !== 0 && gameBoardTwo[2][2] !== 0) {
          setDoubleEighteen(true)
        } else {
          setDoubleEighteen(false)
        }

        setFinalArrSix(newSum)
      }
      if (
        gameBoardTwo[2][0] === gameBoardTwo[2][1] &&
        gameBoardTwo[2][0] === gameBoardTwo[2][2]
      ) {
        let result = 0
        result =
          (gameBoardTwo[2][0] + gameBoardTwo[2][1] + gameBoardTwo[2][2]) * 3

        const notZero = gameBoardTwo[2]?.flat().some((item) => item === 0)
        const checkTriple = gameBoardTwo[2]?.every((item) => {
          return item === gameBoardTwo[2][0]
        })

        if (checkTriple && !notZero) {
          setTripleSix('triple')
        } else {
          setTripleSix('')
        }

        setFinalArrSix(result)
      }
      if (
        gameBoardTwo[2][0] !== gameBoardTwo[2][1] &&
        gameBoardTwo[2][0] !== gameBoardTwo[2][2] &&
        gameBoardTwo[2][1] !== gameBoardTwo[2][2]
      ) {
        setFinalArrSix(gameBoardTwo[2].reduce((a, b) => a + b))
      }

      if (finalArrFour || finalArrFive || finalArrSix) {
        setTotalTwo(finalArrFour + finalArrFive + finalArrSix)
      }
      const notZeroPlayerOne = gameBoardOne?.flat().some((item) => item === 0)
      const notZeroPlayerTwo = gameBoardTwo?.flat().some((item) => item === 0)

      if(!notZeroPlayerOne || !notZeroPlayerTwo) {
        handleGameOver({ variables: { id } })
      }

      const concatArr = gameBoardOne[0]
        ?.concat(gameBoardOne[1])
        .concat(gameBoardOne[2])
      setTilesOne(concatArr.filter((item) => item === 0))

      const concatArrTwo = gameBoardTwo[0]
        ?.concat(gameBoardTwo[1])
        .concat(gameBoardTwo[2])
      setTilesTwo(concatArrTwo.filter((item) => item === 0))

      return
    }
  }, [
    finalBoard,
    playerOneTurn,
    gameBoardOne,
    gameBoardTwo,
    finalArr,
    finalArrTwo,
    finalArrThree,
    finalArrFour,
    finalArrFive,
    finalArrSix,
    total,
    totalTwo,
    handleGameOver,
    id,
  ])

  return (
    <DataContext.Provider
      value={{
        loading,
        data,
        finalArr,
        finalArrTwo,
        finalArrThree,
        finalArrFour,
        finalArrFive,
        finalArrSix,
        gameBoardOne,
        gameBoardTwo,
        finalBoard,
        total,
        totalTwo,
        generateNumber,
        diceNumber,
        playerOneTurn,
        playerTwoTurn,
        setPlayerOneTurn,
        setPlayerTwoTurn,
        handleMutation,
        loadingReset,
        id,
        none,
        setNone,
        handleGameOver,
        doubleOne,
        doubleTwo,
        doubleThree,
        doubleFour,
        doubleFive,
        doubleSix,
        doubleSeven,
        doubleEight,
        doubleNine,
        doubleTen,
        doubleEleven,
        doubleTwelve,
        doubleThirteen,
        doubleFourteen,
        doubleFifteen,
        doubleSixteen,
        doubleSeventeen,
        doubleEighteen,
        tripleOne,
        tripleTwo,
        tripleThree,
        tripleFour,
        tripleFive,
        tripleSix,
        tilesOne,
        tilesTwo,
        setTotal,
        setTotalTwo
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext