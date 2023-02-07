import { useState } from "react"
import NumberBox from "./NumberBox"

const Letters = () => {
    const abcStr = "abcdefghijklmnopqrstuvwxyz"
    const abcArr = abcStr.toUpperCase().split("")
    const [letter, setLetter] = useState(abcArr[0])
    const [typedLetterArray, setTypedLetterArray] = useState<string[]>([letter])
    const [letterTyped, setLetterTyped] = useState("")


    function handleChange(event: React.ChangeEvent) {
        const value = (event.target as HTMLInputElement).value.toUpperCase()
        if (abcArr.indexOf(value) === abcArr.indexOf(letter) + 1) {
            setLetterTyped(value)
            setTimeout(() => {
                const newArr = typedLetterArray.concat(value)
                setTypedLetterArray(() => newArr)
                setLetterTyped("")
                setLetter(value)
            }, 500);
        }
    }


    return (
        <div className="App">

            <div className='gameBox'>
                {typedLetterArray.map((letter, index) => {
                    return <NumberBox key={index} number={letter} />
                })
                }
            </div>
            <div className='gameBoxBottom'>

                <input type='text' maxLength={1} value={letterTyped} onChange={handleChange} />
            </div>


        </div>
    );

}

export default Letters