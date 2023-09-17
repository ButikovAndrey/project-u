import {useState} from "react";
import styles from './Counter.module.scss'
import '../styles/index.scss'

export const Counter = () => {
    const [count, useCount] = useState(0);

    const increment = () => {
        useCount(count+1);
    }

    return(
        <div>
            <h1 className={'app'}>{count}</h1>
            <button className={styles.btn} onClick={increment}>Increment</button>
        </div>
    )
}