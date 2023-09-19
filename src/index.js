import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {clear} from "@testing-library/user-event/dist/clear";



const App = () => {
    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(14);
    useEffect(() => console.log('only one'), []);
    useEffect(() => console.log('font size'), [fontSize]);
    useEffect(() => console.log('color'), [color]);
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

const Notification = () => {
    const [dis, setDis] = useState('display');
    useEffect(() => {
        const timeout = setTimeout(() => {
                setDis('none')
            }
            , 3000);
        return () => clearTimeout(timeout);
    }, [])
    return (
        <p style={{display: dis}}>Notification</p>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Notification/>
  </React.StrictMode>
);

