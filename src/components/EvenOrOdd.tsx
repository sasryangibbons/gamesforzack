import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { dispatchStore, RootState } from "../store"

import { appActions } from "../store/appStore"
import EvenOrOddInnerSection from "./EvenOrOddInnerSection"


const EvenOrOddPreScreen = ({ select }: { select: (n: any) => void }) => {
    const options = ['Even', 'Odd']
    const [selection, setSelection] = useState<any>(null)

    return <form className="countByForm" onSubmit={() => { selection ? select(selection) : alert("Please select an option.") }}>
        <h1>Would you like even or odd numbers?</h1>
        {options.map(x => <label key={x} htmlFor={String(x)}><input name="countByForm" onChange={() => { setSelection(x) }} id={String(x)} type='radio' /> {x}</label>)}
        <button type='submit'>Submit</button>
    </form>
}

type nullOrBool = null | boolean

const EvenOrOdd = () => {
    const dispatch: typeof dispatchStore = useDispatch()

    const selected = useSelector<RootState>((state) => state.app.selected)

    const [isEven, setIsEven] = useState<nullOrBool>(null)

    const handleSelected = (evenOrOdd: string) => {
        if (evenOrOdd === 'Even') {
            setIsEven(true)
        } else {
            setIsEven(false)
        }
        dispatch(appActions.setSelectedToTrue())
    }
    return !selected ? <EvenOrOddPreScreen select={handleSelected} /> : <EvenOrOddInnerSection isEven={isEven as boolean} />
}

export default EvenOrOdd