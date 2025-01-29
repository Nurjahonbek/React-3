import { useState } from 'react';

function Masala6() {
const [value, setValue] = useState(1);
function kopaytish() {
    setValue(prevValue => {
      const newValue = prevValue * 2;
        return newValue;
    })
}
function bolish() {
    setValue(prevValue => {
        const newValue = prevValue / 2;
        return newValue;
    })
}
    return (
    <div>
        <h2>6-masala</h2>
        <h3>hozirgi natija: {value}</h3>
        <button onClick={kopaytish}>kopaytirish</button>
        <button onClick={bolish}>bolish</button>
    </div>
)
}

export default Masala6;
