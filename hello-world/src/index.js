import React from 'react';
import { render } from 'react-dom';

const App = () => {
    const name = "Prasannajit";
    const getButtontext = () => "Click me";
    return (
        <div>
            <div>
                <label htmlFor="namefield">Enter name</label>
                <input className="red" type="text" id="namefield"></input>
                <button style={{ color: 'white', backgroundColor: 'blue' }}>{getButtontext()}</button>
                <p>{name}</p>
            </div>
        </div>
    );
}

render(<App></App>, document.querySelector('#root'));