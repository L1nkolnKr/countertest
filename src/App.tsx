import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0)

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])

    useEffect(()=>{
        setToLocalStorageHandler()
    },[value])

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Increment</button>
        </div>
    );
}

export default App;
