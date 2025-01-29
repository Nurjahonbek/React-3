import { useState } from 'react';

function Masala7() {
    const [button1, setButton1] = useState(0)
    const [button2, setButton2] = useState(0)
    const [button3, setButton3] = useState(0)

function reset() {
    setButton1(0)
    setButton2(0)
    setButton3(0)
}

    return (
    <div>
        <br />
        <h2>7-masala</h2>
        <br />
        <div>
        <button onClick={() => setButton1(button1 + 1)}>Btn-1</button>
        <p>Bosildi: {button1}</p>
    </div>
    <div>
        <button onClick={() => setButton2(button2 + 1)}>Btn-2</button>
        <p>Bosildi: {button2}</p>
    </div>
    <div>
        <button onClick={() => setButton3(button3 + 1)}>Btn-3</button>
        <p>Bosildi: {button3}</p>
    </div>
    <button onClick={reset}>Reset</button>
    </div>
)
}

export default Masala7;
