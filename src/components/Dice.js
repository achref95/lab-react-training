import { useState, useEffect } from "react"
import Dicezero from "../assets/images/dice-empty.png"
import Diceone from "../assets/images/dice1.png"
import Dicetwo from "../assets/images/dice2.png"
import Dicethree from "../assets/images/dice3.png"
import Dicefour from "../assets/images/dice4.png"
import Dicefive from "../assets/images/dice5.png"
import Dicesix from "../assets/images/dice6.png"

const Dice = () => {
    const diceArray = [Dicezero, Diceone, Dicetwo, Dicethree, Dicefour, Dicefive, Dicesix]

    const [dice, setDice] = useState(Dicezero)

    const D = () => {
        setDice(Dicezero)
    }
    useEffect(() => {
        if (dice === Dicezero) {
            setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceArray.length)
            setDice(diceArray[randomIndex])
          }, 1000)
        }
      }, [dice])

  return (
    <div>
       <img src={dice} alt="Dice" onClick={D} style={{ cursor: "pointer", height: "200px", width: "200px"  } } />
    </div>
  )
}

export default Dice
