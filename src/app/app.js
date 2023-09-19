import React, {useEffect, useState} from "react";
import './app.css';

const App = () => {
    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(14);
    useEffect(() => console.log('only one'), []);
    useEffect(() => console.log('font size'), [fontSize]);
    return (

        <div className="app" style={{backgroundColor: color, fontSize: fontSize}}>
            <p>hello world</p>
            <button type='button' onClick={() => setColor('white')}>Light</button>
            <button type='button' onClick={() => setColor('black')}>Dark</button>
            <button type='button' onClick={() => setFontSize((val) => val+1)}>+</button>
            <button type='button' onClick={() => setFontSize((val) => val-1)}>-</button>
        </div>
    );
}

export default App;