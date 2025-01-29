import { useState } from 'react';

function Masala5() {
    const [current, setCurrent] = useState([])
    const [previous, setPrevious] = useState([])

    function RandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1
    setCurrent(randomNum)
    setPrevious(prevNum => [...prevNum, randomNum])
}

    return (
    <div>
        <h2>5-masala</h2>
        <h3>render son: {current}</h3>
        <h3>avvalgi sonlar: {previous.join(', ')}</h3>
        <button onClick={RandomNumber}>random</button>
    </div>
)
}

export default Masala5;
