
import { useState } from 'react';

function Masala10() {
const [On, setOn] = useState(false);
function toggle() {
    setOn(!On)
}

    return (
    <div>
        <h2>10-masala</h2>
        <div>
        {On ? <img style={{width: '100px', height: '100px'}} src='/onn.png' /> : <img style={{width: '100px', height: '100px'}} src='/off.png' />}
        </div>
        <p>{On ? `lampochka: yoqilgan`  : 'lampochka: ochirilgan'}</p>
        <button onClick={toggle}>{On ? 'ochirish' : 'yoqish'}</button>
    </div>
)
}

export default Masala10
