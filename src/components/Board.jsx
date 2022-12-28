import BoardOne from './BoardOne'
import BoardTwo from './BoardTwo'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import Spinner from './Spinner'

function Board() {
  const { loadingReset } = useContext(DataContext)

  return (
    <section className="section-board">
      <h2 className="sr-only">Game Board</h2>

      {loadingReset ? (
        <Spinner />
      ) : (
        <ol className="ol-lanes" aria-label="lanes">
          <li className="li-lane">
            <section className="section-lane">
              <h3 className="sr-only">Lane </h3>
              <BoardOne />
              <BoardTwo />
            </section>
          </li>
        </ol>
      )}
    </section>
  )
}

export default Board
