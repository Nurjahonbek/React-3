import {useState} from 'react'

function Masala2() {
    const [currentcolor, setcurrentcolor] = useState('#c9b6b6')

    function hand(){
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        let random = `rgb(${red}, ${green}, ${blue})`
        setcurrentcolor(random)
    }
    return (
    <div>
        <div style={{backgroundColor: currentcolor, width: 80, height: 80}}></div>
        <button onClick={hand}>change</button>

    </div>
)
}

export default Masala2