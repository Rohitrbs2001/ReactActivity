import { useState } from "react";

export default function Ludoboard(){
    let [Moves, setMoves] = useState({ blue:0, yellow: 0, red: 0, green: 0});

    let updateBlue = () =>{
        console.log(`moves.blue = ${Moves.blue}`);
        setMoves( (preMoves)=>{
            return {...Moves, blue: Moves.blue +1};
        });
    };

    let updateYellow = () =>{
        console.log(`moves.yellow = ${Moves.yellow}`);
        setMoves( (preMoves)=>{
            return {...Moves, yellow: Moves.yellow +1};
        });
    };

    let updateRed = () =>{
        console.log(`moves.red = ${Moves.red}`);
        setMoves( (preMoves)=>{
            return {...Moves, red: Moves.red +1};
        });
    };

    let updateGreen = () =>{
        console.log(`moves.green = ${Moves.green}`);
        setMoves( (preMoves)=>{
            return {...Moves, green: Moves.green +1};
        });
    };
    return(
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>Blue moves = {Moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {Moves.yellow}</p>
                <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
                <p>Red moves = {Moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
                <p>Green moves = {Moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}