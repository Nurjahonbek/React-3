import { useState } from 'react';

function Masala3() {
    const [text, setText] = useState("Salom");
    function handClick() {
    setText(text == 'Salom' ? 'Xayr' : 'Salom')
}
    return (
    <div>
        <h2>3-masala</h2>
        <h3>{text}</h3>
        <p>uzunligi: {text.length}</p>
        <div>
        <button onClick={handClick}>Button</button>
        </div>
    </div>
)
}

export default Masala3;
