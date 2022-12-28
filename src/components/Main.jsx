import Game from './Game'
import Turn from './Turn'
import TotalScore from './TotalScore'
// import ResetGame from './ResetGame'
import Header from './Header'
import useHooks from '../controllers'

function Main() {
  const { useComponents } = useHooks()
  const { useMainComponent } = useComponents()
  
  useMainComponent()

  return (
    <main>
      <Header />
      <Turn />
      <Game />
      <TotalScore />
      {/* <ResetGame /> */}
    </main>
  )
}

export default Main
