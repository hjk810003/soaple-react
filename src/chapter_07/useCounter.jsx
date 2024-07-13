import {useState} from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount((count) => count + 1)
    }

    const decrease = () => {
        setCount((count) => Math.max(count - 1, 0))
    }

    return [count, increase, decrease]
}

export default useCounter;