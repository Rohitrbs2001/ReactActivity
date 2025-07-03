import { useState } from "react";
import "./Lottery.css"
import {genTicket, sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";


export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    };

    return(
        <>
            <div className="ticket">
                <h1>Lottery game!</h1>
                <Ticket ticket={ticket}/>
                
                <Button action={buyTicket}/>
                <h3>{isWinning && "Congratulations, you won!"}</h3>
            </div>
        </>
    )
}