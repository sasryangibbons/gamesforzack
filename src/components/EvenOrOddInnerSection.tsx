import { useState } from "react"
import NumberBox from "./NumberBox"

const EvenOrOddInnerSection = ({ isEven }: { isEven: boolean }) => {

    const [number, setNumber] = useState(isEven ? 2 : 1)
    const [numbersArray, setNumbersArray] = useState<number[]>([number])
    useState(String(number).split(""))
    let numArr = String(number + 2).split("")
    const [firstNumber, setFirstNumber] = useState(numArr[0])
    const [secondNumber, setSecondNumber] = useState(numArr[1])
    const [thirdNumber, setThirdNumber] = useState(numArr[2])
    const [numberTyped, setNumberTyped] = useState("")


    function handleChange(event: React.ChangeEvent) {
        const value = (event.target as HTMLInputElement).value
        if (numArr.length === 1) {
            if (firstNumber === value) {
                setNumberTyped(() => value)
                setTimeout(() => {
                    // let newNumber = returnNumber()
                    let newNumber = number + 2
                    numArr = String(newNumber + 2).split("")
                    setFirstNumber(() => numArr[0])
                    setSecondNumber(() => numArr[1])
                    setThirdNumber(() => numArr[2])
                    setNumber(() => newNumber)
                    setNumberTyped("")
                    setNumbersArray(current => current.concat(newNumber))
                }, 500);
            }
        }
        else if (numArr.length === 2) {
            if (value.length === 1) {
                if (firstNumber === value) {
                    setNumberTyped(() => value)
                }
            } else {
                if (secondNumber === value.split("")[1]) {
                    setNumberTyped(value)
                    setTimeout(() => {
                        // let newNumber = returnNumber()
                        let newNumber = number + 2
                        numArr = String(newNumber + 2).split("")
                        setFirstNumber(() => numArr[0])
                        setSecondNumber(() => numArr[1])
                        setNumber(() => newNumber)
                        setNumberTyped("")
                        setNumbersArray(current => current.concat(newNumber))
                    }, 500);
                }
            }
        } else if (numArr.length === 3) {
            setThirdNumber(() => numArr[2])
            if (value.length === 1) {
                if (firstNumber === value) {
                    setNumberTyped(() => value)
                }
            } else if (value.length === 2) {
                if (secondNumber === value.split("")[1]) {
                    setNumberTyped(value)
                }
            } else {
                if (thirdNumber === value.split("")[2]) {
                    setNumberTyped(() => value)
                    setTimeout(() => {
                        // let newNumber = returnNumber()
                        let newNumber = number + 2
                        numArr = String(newNumber + 2).split("")
                        setFirstNumber(() => numArr[0])
                        setSecondNumber(() => numArr[1])
                        setThirdNumber(() => numArr[2])
                        setNumber(() => newNumber)
                        setNumberTyped("")
                        setNumbersArray(current => current.concat(newNumber))
                    }, 500);
                }
            }
        }


    }


    return (
        <div className="App">

            <div className='gameBox'>
                {numbersArray.map((number, index) => {
                    const nummArr = String(number).split("")
                    return <NumberBox key={index} number={(number)} />
                })
                }

            </div>
            <div className='gameBoxBottom'>

                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={String(number + 2).length} value={numberTyped} onChange={handleChange} />
            </div>


        </div>
    );

}

export default EvenOrOddInnerSection