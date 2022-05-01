import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
        //setValue(value + 1)
    }

    /*const [value, setValue] = useState(0)

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])

    useEffect(()=>{
        setToLocalStorageHandler()
    },[value])*/


    /* const setToLocalStorageHandler = () => {
         localStorage.setItem('counterValue', JSON.stringify(value))
     }

     const getFromLocalStorageHandler = () => {
         let valueAsString = localStorage.getItem('counterValue')
         if(valueAsString){
             let newValue = JSON.parse(valueAsString)
             setValue(newValue)
         }
     }*/


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Increment</button>
        </div>
    );
}

export default App;
