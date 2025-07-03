import Lottery from './Lottery'
import './App.css'
import Ticket from './Ticket';
import { sum } from "./helper"

function App() {


  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // }

  let winCondition = (ticket) => {
    return sum(ticket) ===20;
  }


  return (
    <>
      <div className="lottery">
        <Lottery n={3} winCondition={winCondition} />
        <Lottery n={3} winCondition={winCondition} />
        <Lottery n={3} winCondition={winCondition} />
        {/* <Lottery n={3} winCondition={winCondition} /> */}
      </div>

    </>
  )
}

export default App;
