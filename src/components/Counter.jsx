'use client';
import { useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(prev => prev+1);
    }

    return(
        <button onClick={handleCounter}>
            <p>[Counter : {counter}]</p>
        </button>
    )
}