import { useState } from 'react';

function Array() {
    const [array] = useState([10, 20, 30, 40, 50, 60 , 70, 80, 90])
    const [Index, setIndex] = useState(4)
    function Previous() {
    if (Index > 0) {
        setIndex(Index - 1)
    }
}
function Next() {
    if (Index < array.length - 1) {
        setIndex(Index + 1)
    }
}
return (
    <div>
        <h2>9-masala</h2>
        <h3>hozirgi qiymat: {array[Index]}</h3>
        <div>
        <button onClick={Previous} disabled={Index == 0}>
            oldingi
        </button>
        <button onClick={Next} disabled={Index == array.length - 1}>
            keyingi
        </button>
    </div>
    </div>
)
}
export default Array
