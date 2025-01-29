import { useState } from 'react';

function Masala4() {
    const [isVisible, setIsVisible] = useState(true)

    function removeText() {
    setIsVisible(!isVisible)
}
    return (
    <div> 
        <h2>4-masala</h2>
        <br />
        {isVisible && <div>React-ni organish juda qiziqarli</div>} <br />
        <button onClick={removeText}>
            {isVisible ? "yashirish" : "korsatish"}
        </button>
    </div>
)
}

export default Masala4
