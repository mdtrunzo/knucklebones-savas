import DataContext from '../context/DataContext'
import { useContext, useEffect, useState } from 'react'

function TotalScore() {
  const {
    total,
    totalTwo,
    finalArr,
    finalArrTwo,
    finalArrThree,
    finalArrFour,
    finalArrFive,
    finalArrSix,
  } = useContext(DataContext)
  const [changeTotal, setChangeTotal] = useState('')
  const [changeTotalTwo, setChangeTotalTwo] = useState('')

  useEffect(() => {
    setChangeTotal(total)
    setChangeTotalTwo(totalTwo)

    if (finalArr === 0 && finalArrTwo === 0 && finalArrThree === 0) {
      setChangeTotal(0)
    }
    if (finalArrFour === 0 && finalArrFive === 0 && finalArrSix === 0) {
      setChangeTotalTwo(0)
    }
  }, [
    total,
    totalTwo,
    finalArr,
    finalArrTwo,
    finalArrThree,
    finalArrFour,
    finalArrFive,
    finalArrSix,
  ])

  return (
    <section className="section-total-score" role="status">
      <h2>Total Score</h2>
      {total ? (
        <p className="p-score you">
          <span className="sr-only">Your Score:</span> {changeTotal}
        </p>
      ) : (
        <p className="p-score you">
          <span className="sr-only">Your Score:</span> 0
        </p>
      )}
      {totalTwo ? (
        <p className="p-score opponent">
          <span className="sr-only">Opponent's Score:</span> {changeTotalTwo}
        </p>
      ) : (
        <p className="p-score opponent">
          <span className="sr-only">Opponent's Score:</span> 0
        </p>
      )}
    </section>
  )
}

export default TotalScore
