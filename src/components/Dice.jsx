import dice1 from '../assets/dice-1.svg'
import dice2 from '../assets/dice-2.svg'
import dice3 from '../assets/dice-3.svg'
import dice4 from '../assets/dice-4.svg'
import dice5 from '../assets/dice-5.svg'
import dice6 from '../assets/dice-6.svg'

function Dice({ side }) {
  return (
    <>
      {side === 1 && <img src={dice1} className="dice" alt="Dice 1" />}
      {side === 2 && <img src={dice2} className="dice" alt="Dice 2" />}
      {side === 3 && <img src={dice3} className="dice" alt="Dice 3" />}
      {side === 4 && <img src={dice4} className="dice" alt="Dice 4" />}
      {side === 5 && <img src={dice5} className="dice" alt="Dice 5" />}
      {side === 6 && <img src={dice6} className="dice" alt="Dice 6" />}
    </>
  )
}

export default Dice
