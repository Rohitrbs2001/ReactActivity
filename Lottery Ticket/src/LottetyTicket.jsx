import { useEffect, useState } from "react";

export default function Lottery() {

    let [lucyDraw, setLuckyDraw] = useState("000");
    let [digitSumState, setDigitSumState] = useState(0);

    let digitSum = (randomNum) => {
        return randomNum
            .toString()         // Convert number to string
            .split('')          // Split into array of digit characters
            .map(Number)        // Convert each digit to a number
            .reduce((a, b) => a + b, 0);  // Sum all digits
    };

    let luckynum = () => {
        let randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        let sum = digitSum(randomNum);

        setLuckyDraw(randomNum);
        setDigitSumState(sum);
        console.log("Ticket:", randomNum, "| Digit Sum:", sum);
    }


    return (
        <>
            <div>
                <h3>Lottery</h3>
                {digitSumState === 15 ? <h3>"congratulation! you have won the lottery of 7 Crore"</h3> : null}
            </div>
            <h4>Lottery Ticket = {lucyDraw}</h4>
            <button onClick={luckynum}>Get New Ticket</button>
        </>
    )
}