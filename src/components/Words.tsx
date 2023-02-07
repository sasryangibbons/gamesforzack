import { useState } from "react";
import NumberBox from "./NumberBox";

var randomWords = require('random-words');

const Words = () => {

    const [word, setWord] = useState(randomWords({ exactly: 1, maxLength: 5, formatter: (word: string) => word.toUpperCase() })[0])
    const [letter, setLetter] = useState(word[0])
    const [letterNumber, setLetterNumber] = useState(0)
    const [wordTyped, setWordTyped] = useState("")



    // function handleChange(event: React.ChangeEvent) {
    //     const value = (event.target as HTMLInputElement).value
    //     if (numArr.length === 2) {
    //         if (value.length === 1) {
    //             if (firstNumber === value) {
    //                 setNumberTyped(value)
    //             }
    //         } else {
    //             if (secondNumber === value.split("")[1]) {
    //                 setNumberTyped(value)
    //                 setTimeout(() => {
    //                     let newNumber = returnNumber()
    //                     // let newNumber = number + 1
    //                     numArr = String(newNumber).split("")
    //                     setFirstNumber(() => numArr[0])
    //                     setSecondNumber(() => numArr[1])
    //                     setNumber(() => newNumber)
    //                     setNumberTyped("")
    //                 }, 500);
    //             }
    //         }
    //     } else {
    //         setThirdNumber(() => numArr[2])
    //         if (value.length === 1) {
    //             if (firstNumber === value) {
    //                 setNumberTyped(value)
    //             }
    //         } else if (value.length === 2) {
    //             if (secondNumber === value.split("")[1]) {
    //                 setNumberTyped(value)
    //             }
    //         } else {
    //             if (thirdNumber === value.split("")[2]) {
    //                 setNumberTyped(value)
    //                 setTimeout(() => {
    //                     let newNumber = returnNumber()
    //                     // let newNumber = number + 1
    //                     numArr = String(newNumber).split("")
    //                     setFirstNumber(() => numArr[0])
    //                     setSecondNumber(() => numArr[1])
    //                     setThirdNumber(() => numArr[2])
    //                     setNumber(() => newNumber)
    //                     setNumberTyped("")
    //                 }, 500);
    //             }
    //         }
    //     }
    // }

    function handleChange(event: React.ChangeEvent) {


        const size = (event.target as HTMLInputElement).value.length
        const value = (event.target as HTMLInputElement).value.toUpperCase().substring(size - 1)

        if (letter === value) {
            setWordTyped(wordTyped => wordTyped + value)
            setLetterNumber(letterNumber => letterNumber++)
            setLetter((letter: string) => word[letterNumber + size])
            if (size === word.length) {
                setTimeout(() => {
                    const newWord = randomWords({ exactly: 1, maxLength: 5, formatter: (word: string) => word.toUpperCase() })[0]
                    setWord((word: string) => newWord)
                    setWordTyped("")
                    setLetterNumber(letterNumber => 0)
                    setLetter(newWord[0])
                }, 500);
            }
        }
    }




    return (
        <div className="App">
            <div className='gameBox wordGameBox'>
                {word.split("").map((digit: string, index: number) => {
                    return <NumberBox key={index} number={digit} />
                })}
            </div>
            <div className='gameBoxBottom'>

                <input className="wordInput" type='text' maxLength={word.length} value={wordTyped} onChange={handleChange} />
            </div>


        </div>
    );

}

export default Words;