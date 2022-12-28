import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'

function CreateGameModal() {
  const { finalBoard, id } = useContext(DataContext)
  const [none, setNone] = useState('none')
  const [linkURL, setLinkURL] = useState('')
  const [copied, setCopied] = useState('Copy')

  useEffect(() => {
    if (finalBoard?.player2_connected) {
      setNone('none')
    } else {
      setNone('flex')
    }

    setLinkURL(`${window.location.origin}/game/${id}`)
  }, [finalBoard.player2_connected, id])

  const copyLink = async () => {
    await navigator.clipboard.writeText(linkURL).then(() => {
      setCopied('Copied!')
    })

    setTimeout(() => {
      setCopied('Copy')
    }, 2000)
  }

  return (
    <div
      className="dialog"
      id="create-game-modal"
      role="dialog"
      aria-labelledby="create-game-title"
      style={{ display: none }}
    >
      <div className="dialog-inner">
        <h2 className="dialog-title" id="create-game-title">
          Invite Opponent
        </h2>
        <fieldset className="dialog-fieldset">
          <legend className="dialog-legend">
            Send this link to the second player.
          </legend>
          <input
            className="dialog-input"
            id="input-create-game"
            type="text"
            readOnly
            value={linkURL}
          />
          <button
            className="dialog-button"
            id="button-create-game"
            type="button"
            onClick={copyLink}
          >
            {copied}
          </button>
        </fieldset>
        <p className="dialog-message">
          Waiting for opponent
          <svg className="spinner" viewBox="0 0 50 50" width="50" height="50">
            <use href="#symbol-spinner"></use>
          </svg>
        </p>
      </div>
    </div>
  )
}

export default CreateGameModal
