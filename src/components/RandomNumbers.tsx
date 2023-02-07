import { useState } from "react"
import NumberBox from "./NumberBox"

const RandomNumbers = () => {

    const [number, setNumber] = useState(returnNumber())
    let numArr = String(number).split("")
    const [firstNumber, setFirstNumber] = useState(numArr[0])
    const [secondNumber, setSecondNumber] = useState(numArr[1])
    const [thirdNumber, setThirdNumber] = useState(numArr[2])
    const [numberTyped, setNumberTyped] = useState("")


    function handleChange(event: React.ChangeEvent) {
        const value = (event.target as HTMLInputElement).value
        if (numArr.length === 2) {
            if (value.length === 1) {
                if (firstNumber === value) {
                    setNumberTyped(value)
                }
            } else {
                if (secondNumber === value.split("")[1]) {
                    setNumberTyped(value)
                    setTimeout(() => {
                        let newNumber = returnNumber()
                        // let newNumber = number + 1
                        numArr = String(newNumber).split("")
                        setFirstNumber(() => numArr[0])
                        setSecondNumber(() => numArr[1])
                        setNumber(() => newNumber)
                        setNumberTyped("")
                    }, 500);
                }
            }
        } else {
            setThirdNumber(() => numArr[2])
            if (value.length === 1) {
                if (firstNumber === value) {
                    setNumberTyped(value)
                }
            } else if (value.length === 2) {
                if (secondNumber === value.split("")[1]) {
                    setNumberTyped(value)
                }
            } else {
                if (thirdNumber === value.split("")[2]) {
                    setNumberTyped(value)
                    setTimeout(() => {
                        let newNumber = returnNumber()
                        // let newNumber = number + 1
                        numArr = String(newNumber).split("")
                        setFirstNumber(() => numArr[0])
                        setSecondNumber(() => numArr[1])
                        setThirdNumber(() => numArr[2])
                        setNumber(() => newNumber)
                        setNumberTyped("")
                    }, 500);
                }
            }
        }
    }

    function returnNumber() {
        return Math.floor(Math.random() * 90 + 10)
    }



    return (
        <div className="App">
            <div className='gameBox'>
                {numArr.map((digit, index) => {
                    return <NumberBox key={index} number={Number(digit)} />
                })}
            </div>
            <div className='gameBoxBottom'>

                <input type='text' maxLength={String(number).length} value={numberTyped} onChange={handleChange} />
            </div>


        </div>
    );

}

export default RandomNumbers