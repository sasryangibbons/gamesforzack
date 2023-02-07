const NumberBox: React.FC<{ number: string | number }> = (props) => {
    return (
        <div className="numberBox">{props.number}</div >
    )
}

export default NumberBox