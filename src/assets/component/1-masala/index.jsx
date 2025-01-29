import { useState } from "react";

function Masala1(){
    const [numbers, setNumbers] = useState([]);
    function addNumber() {
      const randomNumber = Math.floor(Math.random() * 100) + 1
        setNumbers([...numbers, randomNumber]);
    }
    function removeNumber() {
        const copy = [...numbers]
        copy.pop()
        setNumbers(copy)
    }
    function clear(){
        setNumbers([])
    }

    return (
    <div>
        <h2>1-masala</h2>
        <button onClick={addNumber}>qoshish</button> 
        <button onClick={removeNumber}>ochirish</button> 
        <button onClick={clear}>tozalash</button>
        <div>
        {numbers.length > 0 ? (
            <p>{numbers.join(" ; ")}</p>
        ) : (
            <h4>son yarating: </h4>
        )}
        </div>
    </div>
)
}

export default Masala1;
