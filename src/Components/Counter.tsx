import {useState} from "react";
import './Counter.scss'

export const Counter = () => {
    const [count, useCount] = useState(0);

    const increment = () => {
        useCount(count+1);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}