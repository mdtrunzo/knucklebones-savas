import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header-main">
      <h1 className="sr-only">Knucklebones Game</h1>
      <Link
        to="/#instructions"
        className="a-how-to-play"
        id="how-to-play-button"
        target="_blank"
      >
        <svg
          role="img"
          aria-label="question mark icon"
          viewBox="0 0 72 72"
          width="72"
          height="72"
        >
          <use href="#symbol-question-mark"></use>
        </svg>
        <span>How to Play</span>
      </Link>
    </header>
  )
}

export default Header
