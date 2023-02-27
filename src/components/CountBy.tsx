import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { dispatchStore, RootState } from "../store"
import CountByInnerSection from "./CountByInnerSection"
import { appActions } from "../store/appStore"

const SelectNumberToCountBy = ({ select }: { select: (n: any) => void }) => {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [selection, setSelection] = useState<any>(null)

    return <form className="countByForm" onSubmit={() => { selection ? select(selection) : alert("Please select a number to count by.") }}>
        <h1>What number would you like to count by?</h1>
        {options.map(x => <label key={x} htmlFor={String(x)}><input name="countByForm" onChange={() => { setSelection(x) }} id={String(x)} type='radio' /> {x}</label>)}
        <button type='submit'>Submit</button>
    </form>
}

type nullOrNum = null | number

const CountBy = () => {
    const dispatch: typeof dispatchStore = useDispatch()

    const selected = useSelector<RootState>((state) => state.app.selected)

    const [num, setNum] = useState<nullOrNum>(null)

    const handleSelected = (num: any) => {
        setNum(num)
        dispatch(appActions.setSelectedToTrue())
    }
    return !selected ? <SelectNumberToCountBy select={handleSelected} /> : <CountByInnerSection num={num as number} />
}

export default CountBy