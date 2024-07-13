import useCounter from "./useCounter";
import {useEffect, useState} from "react";

const MAX = 10;

function Accomodate() {
    const [count, increase, decrease] = useCounter(0);

    const [isFull, setIsFull] = useState(false)

    useEffect(() => {
        setIsFull(count >= MAX);
    }, [count])

    return (
        <>
            <p>총 {count}명 수용했습니다.</p>
            <button onClick={increase} disabled={isFull}>입장</button>
            <button onClick={decrease}>퇴장</button>
            {isFull && <p>정원이 꽉 찼습니다.</p>}
        </>
    )
}

export default Accomodate;