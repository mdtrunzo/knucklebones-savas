import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function RedirectUser() {
  const navigate = useNavigate()

  const handleStartNewGame = () => {
    navigate('/')
  }
  useEffect(() => {
    document.querySelector('body').classList.remove('game')
    document.querySelector('body').classList.add('homepage')
  }, [])
  useEffect(() => {
    const cells = { wide: 28, tall: 24 }
    const wave = 6000
    const interval = 5000
    const delay = wave / (cells.wide * cells.tall)
    const tiles = document.querySelectorAll('.homepage .p-tile')

    const roll = () => {
      tiles.forEach((tile, i) => {
        setTimeout(() => {
          let rotate = tile.querySelector('.p-rotate')
          let currentRotation = parseInt(rotate.style.getPropertyValue('--r'))
          let deltaRotation = Math.floor(Math.random() * 2) * 2 - 1
          rotate.style.setProperty('--r', currentRotation + deltaRotation)
        }, delay * i)
      })
    }

    const animateHomepagePattern = () => {
      if (!window.matchMedia('(prefers-reduced-motion)').matches) {
        roll()
        setInterval(() => {
          roll()
        }, wave + interval)
      }
    }

    animateHomepagePattern()
  }, [])

  return (
    <main>
      <div
        className="dialog"
        id="game-over-modal"
        role="dialog"
        aria-labelledby="game-over-title"
        style={{ display: 'flex' }}
      ></div>
      <div className="redirect-user">
        <header className="homepage-header">
          <h1>Knucklebones</h1>
          <p>This room is full!</p>
          <button
            className="dialog-button"
            id="button-new-game"
            type="button"
            onClick={handleStartNewGame}
          >
            Start a New Game
          </button>
        </header>
      </div>
    </main>
  )
}

export default RedirectUser
