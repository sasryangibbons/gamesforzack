import { Link } from 'react-router-dom';
const MainPage = () => {

    return (
        <div className='homepage'>
            <p>Please select a game listed above.</p>
            <h2>Games Rules:</h2>
            <ul>
                <li><Link to='random-numbers'>Random Numbers</Link>
                    <ul>
                        <li>Type the number you see on the screen</li>
                    </ul>
                </li>
                <li><Link to='numbers-in-order'>Numbers In Order</Link>
                    <ul>
                        <li>Type the number that comes next</li>
                    </ul>
                </li>
                <li><Link to='abc'>ABC's</Link>
                    <ul>
                        <li>Type the letter that comes next</li>
                    </ul>
                </li>
                <li><Link to='words'>Words</Link>
                    <ul>
                        <li>Type the word you see on the screen</li>
                    </ul>
                </li>
                <li><Link to='countby'>Count By __</Link>
                    <ul>
                        <li>Select the number you'd like to count by and click Submit</li>
                        <li>Type numbers starting at the number you selected and going up by the same amount</li>
                    </ul>
                </li>
                <li><Link to='countdown'>Count Down</Link>
                    <ul>
                        <li>Type the number that comes before the previous number</li>
                    </ul>
                </li>
                <li><Link to='evenorodd'>Even or Odd</Link>
                    <ul>
                        <li>Select even or odd and then type the correct numbers in order</li>
                    </ul>
                </li>
            </ul>
        </div>
    )

}

export default MainPage